var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', function(req, res, next){
  req.file('avatar').upload(function (err, uploadedFiles) {
    if (err) return res.send(500, err);
    return res.json({
      message: uploadedFiles.length + ' file(s) uploaded successfully!',
      files: uploadedFiles
    });
  });
})

module.exports = router;
