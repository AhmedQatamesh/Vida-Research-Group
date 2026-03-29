const BASE_URL = 'http://mysite-testing.local';
const KEY = 'ck_429e7ea0381565e0f1226bfe9c7ecdb3b0565a08';
const SECRET = 'cs_886fd8819b055c35d949ecb19e9b161d51503801';

const api = {
  get: async (endpoint) => {
    const separator = endpoint.includes('?') ? '&' : '?';
    const response = await fetch(
      `${BASE_URL}/wp-json/wc/v3/${endpoint}${separator}consumer_key=${KEY}&consumer_secret=${SECRET}`
    );
    const data = await response.json();
    return { data };
  },
  post: async (endpoint, body) => {
    const separator = endpoint.includes('?') ? '&' : '?';
    const response = await fetch(
      `${BASE_URL}/wp-json/wc/v3/${endpoint}${separator}consumer_key=${KEY}&consumer_secret=${SECRET}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    return { data };
  },
};

export default api;