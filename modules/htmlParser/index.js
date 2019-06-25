const cheerio = require('cheerio');

module.exports = {
    getMetaData: (html) => {
        let metaObj = {};
        const $ = cheerio.load(html);
        const $title = $('head title').text();
        if ($title) metaObj.title = $title;
        const $meta = $('meta');
        if ($meta && $meta.length) {
            for (let i = 0; i < $meta.length; i++) {
                let metaName = $($meta[i]).attr('property') || $($meta[i]).attr('name');
                if (metaName) metaObj[metaName] = $($meta[i]).attr('content');
            }
        }
        const $images = $('img');
        metaObj.images = [];
        if ($images && $images.length) {
            for (let i = 0; i < $images.length; i++) {
                metaObj.images.push($($images[i]).attr('src'));
            }
        }

        return metaObj;
    }
};