/**
 * Wrapper the try/catch into a promise
 * @module asyncWrapper
 */

/**
 * @callback cbTemplate
 * @param {{}} req - Request
 * @param {{}} res - Response
 * @param {function} [next]
 * @returns {void}
 */

/**
 * Function to wrap the try/catch into a promise for any Express handler
 * @see https://zellwk.com/blog/async-await-express/
 * @param {cbTemplate} callback - a function to be wrapped  
 * @returns {cbTemplate} function that wraps a given callback
 */
function asyncWrapper(callback) {
  return (req, res, next) => {
    callback(req, res, next).catch(next);
  }
};

module.exports = asyncWrapper;