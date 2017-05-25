var superagent = require('supertest');
global.expect = require('expect.js');
const app = require('../app.js');

let req;

function request() {
  if(req) return req;
  req = superagent.agent(app);
  return req;
}
global.request = request;

describe('App', function () {
  describe('#start()', function () {
    it('running app', function (done) {
      request()
        .get('/')
        .expect(302, done);
    });
  });
});

describe('simulateLogin:', function () {
  it('should create user session for valid user', function (done) {
    request()
      .get('/api/login/simulate?email=admin@admin.com')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        done();
      });
  });
});
