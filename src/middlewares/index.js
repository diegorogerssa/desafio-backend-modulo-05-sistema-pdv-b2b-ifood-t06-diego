const validateData = require('./validateData');
const authenticationToken = require('./authenticationToken');
const errorMiddleware = require('./errorMiddleware');

module.exports = {
  validateData,
  authenticationToken,
  errorMiddleware,
};
