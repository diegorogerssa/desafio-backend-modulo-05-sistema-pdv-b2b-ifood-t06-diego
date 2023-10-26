/* eslint-disable no-unused-vars */
const errorMiddleware = async (error, _req, res, _next) => {
  if (error.statusCode && error.message) {
    const { message, statusCode } = error;
    return res.status(statusCode).json({ message });
  }
  return res.status(500).json({ message: error });
};

module.exports = errorMiddleware;
