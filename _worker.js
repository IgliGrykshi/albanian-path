export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Match /tours/<slug> but not real existing paths
    const tourSlug = path.match(/^\/tours\/(?!single-day|multi-day)([^/]+)\/?$/);

    if (tourSlug) {
      // Rewrite to _tour.html but keep the URL the same
      const rewriteUrl = new URL(request.url);
      rewriteUrl.pathname = '/_tour.html';
      return env.ASSETS.fetch(new Request(rewriteUrl.toString(), request));
    }

    // All other requests serve normally
    return env.ASSETS.fetch(request);
  }
}