import type { APIRoute } from "astro";
import { renderLogoPng } from "@/lib/og";

/** Home-screen icon for iOS (and the icon some chat apps show next to a link). */
export const GET: APIRoute = async () =>
  new Response(new Uint8Array(await renderLogoPng(180, 24)), {
    headers: { "Content-Type": "image/png" }
  });
