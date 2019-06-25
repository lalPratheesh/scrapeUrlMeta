const express = require('express');
const router = express.Router();

router.use('/urlScrape', require('../controller/api/v1/urlScraping'));

module.exports = router;
