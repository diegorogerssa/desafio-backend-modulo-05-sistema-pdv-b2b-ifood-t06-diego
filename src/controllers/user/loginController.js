const { loginService } = require('../../services');

const loginController = async (req, res, next) => {
  const { email, senha } = req.body;
  try {
    const token = await loginService(email, senha);
    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};

module.exports = loginController;
