const { registerService } = require('../../services');

const registerController = async (req, res, next) => {
  const userData = req.body;
  try {
    const registeredData = await registerService(userData);
    return res.status(201).json(registeredData);
  } catch (error) {
    return next(error);
  }
};

module.exports = registerController;
