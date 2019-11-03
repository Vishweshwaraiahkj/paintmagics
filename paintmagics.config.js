module.exports = {
  apps: [
    {
      name: "paintmagics-api",
      script: "./server/index.js",
      watch: true,
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    },
    {
      name: "paintmagics-client",
      script: "./client/src/index.js",
      watch: true,
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
