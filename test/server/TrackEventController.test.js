describe('trackevent', function () {
  it('trackevent', function (done) {
    var req = request().post('/api/dash/trackevent');
    req.set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({
        'category': 'a',
        'action': 'view',
        'value': 1,
        'label': 'btn-query-user',
        'resource': '123'
      })
      .expect(200)
      .end(function (err, res) {
        expect(res.body.code).to.eql(200);
        done();
      });
  });
});