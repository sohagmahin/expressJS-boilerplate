const bcrypt = require("bcrypt");

// bcrypt saltroutnds
const saltRounds = 10;

const createHash = async (data) => {
  return await bcrypt.hash(data, 10);
};

const compareHash = async (plainText, hash) => {
  return await bcrypt.compare(plainText, hash);
};

module.exports = { createHash, compareHash };
