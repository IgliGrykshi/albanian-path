export async function onRequestGet({ request, env, params }) {
  const slug = (params.slug || "").replace(/\.html$/, "");
  const base = new URL(request.url);

  // Try to serve an existing static page first
  // (handles single-day, multi-day, berat-and-belshi-lake-day-tour, etc.)
  try {
    base.pathname = `/tours/${slug}.html`;
    const staticPage = await env.ASSETS.fetch(base.toString());
    if (staticPage.ok) return staticPage;
  } catch {}

  // Serve the dynamic tour template
  try {
    base.pathname = "/tour-template.html";
    const template = await env.ASSETS.fetch(base.toString());
    if (template.ok) return template;
    return new Response("Tour template not found at /tour-template.html", { status: 404 });
  } catch (e) {
    return new Response("Function error: " + e.message, { status: 500 });
  }
}
