// @vitest-environment node
import sharp from "sharp";
import { describe, expect, test } from "vitest";
import {
  DEFAULT_OG_IMAGE,
  OG_HEIGHT,
  OG_PAGES,
  OG_WIDTH,
  ogImageForPage,
  ogImageForPost,
  renderLogoPng,
  renderOgImage,
  titleSize
} from "@/lib/og";

describe("og image paths", () => {
  test("fixed pages live under /og/<page>.png", () => {
    expect(ogImageForPage("about").path).toBe("/og/about.png");
    expect(DEFAULT_OG_IMAGE.path).toBe("/og/index.png");
  });

  test("posts live under /og/blog/<slug>.png with the title in the alt text", () => {
    expect(ogImageForPost("a-post", "A Post")).toEqual({
      path: "/og/blog/a-post.png",
      alt: "A Post | Zaplytic blog"
    });
  });

  test("every fixed page card has an eyebrow, title and description", () => {
    for (const card of Object.values(OG_PAGES)) {
      expect(card.eyebrow).not.toBe("");
      expect(card.title).not.toBe("");
      expect(card.description).not.toBe("");
    }
  });
});

describe("titleSize", () => {
  test.each([
    ["Short title", 76],
    ["A".repeat(60), 64],
    ["A".repeat(97), 54]
  ])("%s → %ipx", (title, size) => {
    expect(titleSize(title)).toBe(size);
  });
});

describe("rendering", () => {
  test("a card renders to a 1200×630 PNG small enough for WhatsApp", async () => {
    const png = await renderOgImage({
      eyebrow: "Blog",
      title: "A fairly long title that has to wrap onto more than one line in the card",
      description: "Description text",
      meta: "2026-01-01  ·  #a"
    });
    const { format, width, height } = await sharp(png).metadata();
    expect({ format, width, height }).toEqual({
      format: "png",
      width: OG_WIDTH,
      height: OG_HEIGHT
    });
    expect(png.length).toBeLessThan(300 * 1024);
  });

  test("the logo renders to an opaque square PNG", async () => {
    const png = await renderLogoPng(180, 24);
    const { width, height } = await sharp(png).metadata();
    expect({ width, height }).toEqual({ width: 180, height: 180 });
    const { isOpaque } = await sharp(png).stats();
    expect(isOpaque).toBe(true);
  });
});
