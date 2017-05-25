
describe('trackevent', function () {
  it('trackevent', function (done) {
    var req = request().get('/api/messages/');
    req.set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        expect(res.body.result.list.length > -1);
        done();
      });
  });
});