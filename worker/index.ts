export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // API routes
    if (url.pathname.startsWith("/api/v1/")) {
      return new Response(
        JSON.stringify({
          data: null,
          error: { code: "NOT_IMPLEMENTED", message: "API not yet implemented" },
          meta: { timestamp: new Date().toISOString() },
        }),
        {
          status: 501,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Health check
    if (url.pathname === "/api/health") {
      return new Response(
        JSON.stringify({ status: "ok", timestamp: new Date().toISOString() }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    // Static assets are served by Cloudflare Pages / Vite dev server
    return new Response("Not Found", { status: 404 });
  },
};
