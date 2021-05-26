/**
 * @module asyncWrapper
 */

/**
 * @callback functionToWrap
 * @param {{}} req - Request
 * @param {{}} res - Response
 * @param {function} [next]
 * @returns {void}
 */

/**
 * Function to wrap the try/catch into a promise for any Express handler
 * @see https://zellwk.com/blog/async-await-express/
 * @param {functionToWrap} callback - a function to be wrapped  
 * @returns {function} function that wraps a given callback
 */
function asyncWrapper(callback) {
  return (req, res, next) => {
    callback(req, res, next).catch(next);
  }
};

module.exports = asyncWrapper;