const { v4: uuidv4 } = require("uuid");

const generateUniqueBusinessId = () => {
  return uuidv4(); // Append a prefix to the UUID
};

// Usage:
module.exports = { generateUniqueBusinessId };
