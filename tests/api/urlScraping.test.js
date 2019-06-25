const request = require('supertest');
const server = require('../../app');

describe('POST /urlScrape', () => {

    it('should get og:title parameter', async () => {

        const res = await request(server)
            .post('/urlScrape')
            .set('Accept', 'application/json')
            .send({
                url: "https://diagnal.com/"
            });

        expect(res.body).that.has.property('title');
        expect(res.body["og:title"]).to.equal("Home - DIAGNAL");
    });

});
