var express = require('express');
var router = express.Router();
var path = require('path');
const query = require('../DB/mysql')

// 获取我的插画
router.get('/my/:name', function(req, res, next) {
  var options = {
    root: path.join(__dirname, '../uploads/my'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  const fileName = req.params.name
  // console.log(fileName);

  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      // console.log('Sent:', fileName)
    }
  })

});

// 获取画师的插画
router.get('/artists/:name', function(req, res, next) {
  var options = {
    root: path.join(__dirname, '../uploads/artists'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  const fileName = req.params.name
  // console.log(fileName);

  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      // console.log('Sent:', fileName)
    }
  })

});

// 获取专题的插画
router.get('/subject/:name', function(req, res, next) {
  var options = {
    root: path.join(__dirname, '../uploads/subject'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  const fileName = req.params.name
  // console.log(fileName);

  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      // console.log('Sent:', fileName)
    }
  })

});

module.exports = router;
