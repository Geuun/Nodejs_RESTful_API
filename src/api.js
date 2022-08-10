// @ts-check

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {*} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property {() => Promise<*>} callback
 */

/** @type {Route[]} */
const routes = [
  {
    url: /^\/posts$/,
    method: 'GET',
    callback: async () => ({
      // TODO: implement
      statusCode: 200,
      body: {},
    }),
  },

  {
    url: /^\/posts\/([a-zA-Z0-9-_]+)$/,
    method: 'GET',
    callback: async () => ({
      // TODO: implement
      statusCode: 200,
      body: {},
    }),
  },

  {
    url: /^\/posts$/,
    method: 'POST',
    callback: async () => ({
      // TODO: implement
      statusCode: 200,
      body: {},
    }),
  },
];

module.exports = {
  routes,
};
