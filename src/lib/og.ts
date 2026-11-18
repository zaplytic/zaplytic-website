import { readFileSync } from "node:fs";
import { join } from "node:path";
import satori from "satori";
import sharp from "sharp";
import logoSvg from "../../public/favicon.svg?raw";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

/** Link preview size recommended by Facebook, WhatsApp, LinkedIn and X (1.91:1). */
export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

export const BRAND_CYAN = "#1AB3EF";
export const BRAND_LIME = "#CBF539";
const BG = "#0a0a0a";

export interface OgCard {
  /** Small label above the title, e.g. "Blog" or "Products". */
  eyebrow: string;
  title: string;
  description: string;
  /** Extra details in the footer, e.g. a post's date and tags. */
  meta?: string;
}

export interface OgImage {
  /** Root-relative path the PNG is served at. */
  path: string;
  alt: string;
}

/** Preview cards for the site's fixed pages, keyed by the image name under /og/. */
export const OG_PAGES = {
  index: {
    eyebrow: "Software studio · Bangladesh",
    title: "We build SaaS, websites, apps and open-source tools.",
    description: SITE_DESCRIPTION
  },
  about: {
    eyebrow: "About",
    title: "We build tools we'd use ourselves.",
    description: "A small studio of four building open-source tools and SaaS products."
  },
  products: {
    eyebrow: "Products",
    title: "ZapRoute, ZapMemo, AMC-Booster, RailGuard and more.",
    description: "SaaS products, client projects and open-source tools built by Zaplytic."
  },
  blog: {
    eyebrow: "Blog",
    title: "Engineering notes from Zaplytic.",
    description: "Rails, React, TypeScript, Postgres, architecture and building software."
  }
} satisfies Record<string, OgCard>;

export type OgPage = keyof typeof OG_PAGES;

export const ogImageForPage = (page: OgPage): OgImage => ({
  path: `/og/${page}.png`,
  alt: `${SITE_NAME}: ${OG_PAGES[page].title}`
});

export const ogImageForPost = (slug: string, title: string): OgImage => ({
  path: `/og/blog/${slug}.png`,
  alt: `${title} | ${SITE_NAME} blog`
});

export const DEFAULT_OG_IMAGE = ogImageForPage("index");

// Fonts are read from node_modules at build time; satori needs TTF/OTF/WOFF (not WOFF2).
const fontFile = (weight: number) =>
  readFileSync(
    join(process.cwd(), `node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`)
  );

let fonts: { name: string; data: Buffer; weight: 400 | 600 | 800; style: "normal" }[] | undefined;
const loadFonts = () =>
  (fonts ??= ([400, 600, 800] as const).map((weight) => ({
    name: "Inter",
    data: fontFile(weight),
    weight,
    style: "normal" as const
  })));

const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra = {}): Node => ({
  type,
  props: { style, children, ...extra }
});

/** Long titles get a smaller size so they still fit in three lines. */
export function titleSize(title: string): number {
  if (title.length <= 40) return 76;
  if (title.length <= 70) return 64;
  return 54;
}

function card({ eyebrow, title, description, meta }: OgCard): Node {
  const host = new URL(SITE_URL).host;
  return h(
    "div",
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      display: "flex",
      flexDirection: "column",
      backgroundColor: BG,
      backgroundImage: `radial-gradient(circle at 92% 0%, rgba(26, 179, 239, 0.28), transparent 45%), radial-gradient(circle at 0% 100%, rgba(203, 245, 57, 0.16), transparent 40%)`,
      color: "#ffffff",
      fontFamily: "Inter"
    },
    [
      h(
        "div",
        { display: "flex", flexDirection: "column", flexGrow: 1, padding: "64px 72px 48px" },
        [
          // Logo and wordmark
          h("div", { display: "flex", alignItems: "center" }, [
            h("img", { width: 64, height: 64 }, undefined, {
              src: logoDataUri,
              width: 64,
              height: 64
            }),
            h(
              "div",
              { marginLeft: 20, fontSize: 40, fontWeight: 800, letterSpacing: -1 },
              SITE_NAME
            )
          ]),
          // Eyebrow, title and description
          h("div", { display: "flex", flexDirection: "column", marginTop: "auto" }, [
            h(
              "div",
              {
                color: BRAND_LIME,
                fontSize: 26,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 3,
                marginBottom: 18
              },
              eyebrow
            ),
            h(
              "div",
              {
                fontSize: titleSize(title),
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: -1.5,
                display: "block",
                lineClamp: 3
              },
              title
            ),
            h(
              "div",
              {
                marginTop: 22,
                fontSize: 28,
                lineHeight: 1.4,
                color: "#a3a3a3",
                display: "block",
                lineClamp: 2
              },
              description
            )
          ]),
          // Footer
          h(
            "div",
            {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 40,
              fontSize: 24,
              color: "#737373"
            },
            [
              h("div", { color: BRAND_CYAN, fontWeight: 600 }, host),
              h("div", { display: "flex" }, meta ?? "")
            ]
          )
        ]
      ),
      // Brand gradient bar along the bottom edge
      h("div", {
        height: 10,
        width: "100%",
        backgroundImage: `linear-gradient(90deg, ${BRAND_CYAN}, ${BRAND_LIME})`
      })
    ]
  );
}

/** Renders a link preview card to PNG. */
export async function renderOgImage(input: OgCard): Promise<Buffer> {
  const svg = await satori(card(input) as Parameters<typeof satori>[0], {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts: loadFonts()
  });
  // Palette PNG keeps the file small; WhatsApp skips previews over ~300 KB
  return sharp(Buffer.from(svg)).png({ palette: true, quality: 90, effort: 10 }).toBuffer();
}

/** Renders the logo onto a solid square, for apple-touch-icon and the JSON-LD logo. */
export async function renderLogoPng(size: number, padding: number): Promise<Buffer> {
  const inner = size - padding * 2;
  const logo = await sharp(Buffer.from(logoSvg), { density: 72 * (inner / 96) * 2 })
    .resize(inner, inner)
    .png()
    .toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: BG } })
    .composite([{ input: logo, top: padding, left: padding }])
    .png()
    .toBuffer();
}
