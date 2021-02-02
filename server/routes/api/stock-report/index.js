var express = require('express');
var router = express.Router();
const controller = require('./stock-report.controller');

router.get('/cities', controller.getCities);

module.exports = router;