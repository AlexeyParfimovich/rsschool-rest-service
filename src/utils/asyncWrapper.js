/**
 * @module asyncWrapper
 */


/**
 * Wrapper function to to change the try/catch into a promise for any Express handler
 * @see https://zellwk.com/blog/async-await-express/
 * @param {*} callback 
 * @returns 
 */
function asyncWrapper(callback) {
  return (req, res, next) => {
    callback(req, res, next).catch(next);
  }
};

module.exports = asyncWrapper;