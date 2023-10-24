const { loginService } = require('../../services');

const loginController = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const token = await loginService(email, senha);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = loginController;
