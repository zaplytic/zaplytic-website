import type { APIRoute } from "astro";
import { renderLogoPng } from "@/lib/og";

/** Raster logo for the Organization JSON-LD (Google's logo guidelines prefer PNG). */
export const GET: APIRoute = async () =>
  new Response(new Uint8Array(await renderLogoPng(512, 56)), {
    headers: { "Content-Type": "image/png" }
  });
