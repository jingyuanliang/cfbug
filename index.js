export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    return env.PRIVATE_API.fetch(`http://cfbug${url.pathname}${url.search}`);
  },
};
