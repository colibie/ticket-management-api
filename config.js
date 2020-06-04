const numCPUs = require('os').cpus().length;

module.exports = {
  // app
  APP_ID: process.env.APP_ID,
  SERVICE_NAME: process.env.SERVICE_NAME,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  EMAIL_SECRET: process.env.EMAIL_SECRET,
  WEB_WORKER_COUNT: process.env.WEB_WORKER_COUNT || numCPUs,
  API_BASE_URL: process.env.API_BASE_URL,
};