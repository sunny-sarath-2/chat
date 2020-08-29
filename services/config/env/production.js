const secrect = require("../secrect.json");

module.exports = {
  errors: {
    showDebug: false,
  },
  database: {
    server: secrect.database,
    database: "chat",
  },

  server: {
    httpPort: 80,
  },
};
