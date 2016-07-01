var express = require('express')
var router = express.Router()
var json = require('../helpers').json

router.get('/', function(req, res, next) {
  res.send(json(200))
})

module.exports = router
