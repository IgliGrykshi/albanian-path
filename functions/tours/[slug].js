export async function onRequestGet({ request, env, params }) {
  // Strip any accidental .html suffix from the slug
  const slug = params.slug.replace(/\.html$/, "");

  // Try to serve an existing static page first
  // (handles single-day, multi-day, berat-and-belshi-lake-day-tour, tirana-day-tour1, etc.)
  const staticPage = await env.ASSETS.fetch(
    new URL(`/tours/${slug}.html`, request.url).toString()
  );
  if (staticPage.ok) {
    return staticPage;
  }

  // Fall back to the dynamic Sanity tour template
  return env.ASSETS.fetch(
    new URL("_tour.html", request.url).toString()
  );
}
