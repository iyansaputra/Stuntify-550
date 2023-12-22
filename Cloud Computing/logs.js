const { DateTime } = require('luxon'); 
const logRequest = (req, res, next) => {
  const timestamp = DateTime.utc().setZone('Asia/Jakarta').toISO();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
};

module.exports = logRequest;
