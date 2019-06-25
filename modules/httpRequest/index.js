const rp = require('request-promise');

module.exports = async (uri) => {
    try {
        const htmlString = await rp(encodeURI(uri));
        if (/<[a-z][\s\S]*>/i.test(htmlString))
            return htmlString;

        return null;
    } catch (e) {
        throw e;
    }
}