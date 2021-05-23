/*
  Wrapper function to to change the try/catch into a promise for any Express handler
  for more informaion look https://zellwk.com/blog/async-await-express/
*/
function asyncWrapper(callback) {
  return (req, res, next) => {
    callback(req, res, next).catch(next);
  }
};

module.exports = asyncWrapper;