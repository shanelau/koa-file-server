var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: `Express env: ${process.env.NODE_ENV}`, data: "hello world" });
});

router.post('/upload', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  req.file('avatar').upload(function (err, uploadedFiles) {
    if (err) return res.send(500, err);
    return res.json({
      message: uploadedFiles.length + ' file(s) uploaded successfully!',
      files: uploadedFiles
    });
  });
})

module.exports = router;
