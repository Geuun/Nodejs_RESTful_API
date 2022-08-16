// @ts-check

/** jsdoc
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/**
 * @typedef CreatePostBody
 * @property {string} title
 * @property {string} content
 */

/** @type {CreatePostBody} */

/** @type {Post[]} */
const posts = [
  {
    id: 'my_first_post',
    title: 'My first post',
    content: 'Hello!',
  },
  {
    id: 'my_second_post',
    title: 'My second post',
    content: 'Hi!',
  },
];

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | Object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property {(matches: string[], body: Object | undefined) => Promise<*>} callback
 */

/** @type {Route[]} */
const routes = [
  {
    url: /^\/posts$/,
    method: 'GET',
    callback: async () => ({
      // TODO: implement
      statusCode: 200,
      body: posts,
    }),
  },

  {
    url: /^\/posts\/([a-zA-Z0-9-_]+)$/,
    method: 'GET',
    callback: async (matches) => {
      const postId = matches[1];
      if (!postId) {
        return {
          status: 404,
          body: 'Not found',
        };
      }

      const post = posts.find((_post) => _post.id === postId);

      if (!post) {
        return {
          status: 404,
          body: 'Not found',
        };
      }

      return {
        statusCode: 200,
        body: post,
      };
    },
  },

  {
    url: /^\/posts$/,
    method: 'POST',
    callback: async (_, body) => {
      if (!body) {
        return {
          statusCode: 400,
          body: 'Ill-formed request.',
        };
      }

      /** @type {string} */
      /* eslint-disable-next-line prefer-destructuring */
      const title = body.title;
      const newPost = {
        id: title.replace(/\s/g, '_'),
        title,
        content: body.content,
      };

      posts.push({
        id: title.replace(/\s/g, '_'),
        title,
        content: body.content,
      });

      posts.push(newPost);

      return {
        statusCode: 200,
        body: newPost,
      };
    },
  },
];

module.exports = {
  routes,
};
