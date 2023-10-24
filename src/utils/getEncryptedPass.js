/* eslint-disable max-len */
/* eslint-disable no-return-await */
const bcrypt = require('bcrypt');

const comparePasswords = async (inputPassword, storedPassword) => await bcrypt.compare(inputPassword, storedPassword);

module.exports = comparePasswords;
