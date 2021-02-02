var express = require('express');
var router = express.Router();
const controller = require('./stock-report.controller');

router.get('/symbol/:symbol', controller.getSymbolData);

module.exports = router;