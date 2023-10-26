const bcrypt = require('bcrypt');

const comparePasswords = async (inputPassword, storedPassword) => {
  const response = await bcrypt.compare(inputPassword, storedPassword);

  return response
};

module.exports = comparePasswords;
