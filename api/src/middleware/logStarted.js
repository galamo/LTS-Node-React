function logStarted(req, res, next) {
  console.log(
    `[${new Date().toLocaleString()}] request started ${req.path} ${req.ip}`
  );
  next();
}   

module.exports = { logStarted };
