var express = require('express');
var router = express.Router();
var fluxList = [
  {hipHop: "http://streamingads.hotmixradio.fm:8000/hotmixradio-hiphop-128.mp3"}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { fluxList });
});

module.exports = router;
