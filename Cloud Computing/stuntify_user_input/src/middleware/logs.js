// contoh middleware (untuk memantau server)
const logRequest = (req, res, next) => {
    console.log('API Running... in path', req.path);
    next();
}

module.exports = logRequest;