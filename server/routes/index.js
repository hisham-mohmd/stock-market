module.exports = function (app) {
    app.use('/report', require('./api/stock-report'));
}