/**
 * Error responses
 */

'use strict';

module.exports[401] = function unathorized(req, res) {
  var viewFilePath = '401';
  var statusCode = 401;
  var result = {
    status: statusCode
  };

  res.status(result.status);
  res.render(viewFilePath, function (err) {
    if (err) {
      return res.status(result.status).json(result);

    }
    res.render(viewFilePath);
  });
};

module.exports[403] = function forbidden(req, res) {
  var viewFilePath = '403';
  var statusCode = 403;
  var result = {
    status: statusCode
  };

  res.status(result.status);
  res.render(viewFilePath, function (err) {
    if (err) {
      return res.status(result.status).json(result);

    }
    res.render(viewFilePath);
  });
};

module.exports[404] = function pageNotFound(req, res) {
  var viewFilePath = '404';
  var statusCode = 404;
  var result = {
    status: statusCode
  };

  res.status(result.status);
  res.render(viewFilePath, function (err) {
    if (err) {
      return res.status(result.status).json(result);
    }
    res.render(viewFilePath);
  });
};

