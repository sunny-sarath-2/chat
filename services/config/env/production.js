module.exports = {
  errors: {
    showDebug: false,
  },
  database: {
    server: process.env.database,
    database: "chat",
  },

  server: {
    httpPort: 80,
  },
};
