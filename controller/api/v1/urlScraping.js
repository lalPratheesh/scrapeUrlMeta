const express = require('express');
const createError = require('http-errors');
const router = express.Router();

const httpRequest = require('../../../modules/httpRequest');
const { getMetaData } = require('../../../modules/htmlParser');

router.post('/', async (req, res, next) => {
    try {
        const { url } = req.body;
        const htmlString = await httpRequest(url);
        if (htmlString === "") {
            return next(createError(422, "Invalid Url!"));
        }
        const metaData = getMetaData(htmlString);
        return res.send({
            ...metaData
        });
    } catch (e) {
        next(e);
    }
});

module.exports = router;
