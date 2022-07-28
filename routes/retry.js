var express = require('express');
var router = express.Router();
const dbo = require('./../db/conn');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('retrying...');
    dbo.connectToServer(function (err) {
        if (err) {
          console.error(err);
          res.send("error connecting");
         // process.exit();
        }
        else {
            res.send("connected to database");
        }
      });
});

module.exports = router;