const jwt = require('jsonwebtoken');
const { getUserByIdModel } = require('../models');

const authenticationToken = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({
      message:
        'Authentication required. Please provide a valid Bearer Token.',
    });
  }

  const tokenWithoutBearer = token.replace('Bearer ', '').trim();

  try {
    const decoded = jwt.verify(tokenWithoutBearer, process.env.SECRET_KEY);

    const user = await getUserByIdModel(decoded.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const userDataSecured = { ...user };
    delete userDataSecured.senha;

    req.user = userDataSecured;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token. Authentication failed.' });
  }
};

module.exports = authenticationToken;
