module.exports = {
  errors: {
    showDebug: false,
  },
  database: {
    server: ENV["database"],
    database: "chat",
  },

  server: {
    httpPort: 80,
  },
};
