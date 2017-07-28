// not being used rite now.... future plans
var path = require('path');
var express = require('express');

module.exports = function (app){

    app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
    app.use('/api/', require('./api'));
}
