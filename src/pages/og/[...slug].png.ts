import type { APIRoute, GetStaticPaths } from "astro";
import { getSortedPosts } from "@/lib/blog";
import { OG_PAGES, renderOgImage, type OgCard } from "@/lib/og";

/** One 1200×630 link preview PNG per fixed page (/og/about.png) and per post (/og/blog/<slug>.png). */
export const getStaticPaths = (async () => {
  const pages = Object.entries(OG_PAGES).map(([slug, card]) => ({
    params: { slug },
    props: { card: card as OgCard }
  }));
  const posts = (await getSortedPosts()).map((post) => {
    const { title, description, date, tags } = post.data;
    return {
      params: { slug: `blog/${post.id}` },
      props: {
        card: {
          eyebrow: "Blog",
          title,
          description,
          meta: [date, ...tags.slice(0, 3).map((t) => `#${t}`)].join("  ·  ")
        } satisfies OgCard
      }
    };
  });
  return [...pages, ...posts];
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ card: OgCard }> = async ({ props }) =>
  new Response(new Uint8Array(await renderOgImage(props.card)), {
    headers: { "Content-Type": "image/png" }
  });
