/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
var _ = require('lodash');

module.exports = function(app, passport) {

  // Insert routes below

  app.get('/api/loggedin', function (req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  });

  app.post('/api/login', passport.authenticate('local'), function (req, res) {
    res.send(req.user);
  });

  app.get('/api/logout', function (req, res) {
    req.logOut(); // provided by passport
    res.send(200);
  });

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  errors[401](req, res);
}
