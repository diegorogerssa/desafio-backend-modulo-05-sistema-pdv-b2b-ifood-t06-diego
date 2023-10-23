const { registerService } = require('../../services');

const registerController = async (req, res) => {
  const userData = req.body;
  try {
    const registeredData = await registerService(userData);
    return res.status(201).json(registeredData);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = registerController;
