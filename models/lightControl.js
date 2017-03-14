var Promise = require('bluebird');
var _ = require('underscore');
var settings = require('../settings');
var request = require('request');
var hueIP = settings.hueIP;
var hueUsername = settings.hueUsername;
var hueID = settings.hueID;

module.exports.getLightStatus = function() {
  return new Promise(function(resolve, reject){
    request('http://' + hueIP + '/api/' + hueUsername + '/lights/' + hueID, function (error, response, body) {
      var jsonBody = {};
      try {
        jsonBody = JSON.parse(body);
      }
      catch (e) {
        return reject(e);
      }
      if (!error && response.statusCode == 200) {
        return resolve(jsonBody);
      } else {
        return reject(error);
      }
    });
  });
};

module.exports.turnLightOn = function() {
  return new Promise(function(resolve, reject){
    request({
      url: 'http://' + hueIP + '/api/' + hueUsername + '/lights/' + hueID + '/state',
      method: 'PUT',
      json: {
        'on': true
      }
    }, function (error, response, body) {
      var jsonBody = {};
      if (_.isArray(body)) {
        jsonBody = body[0];
      } else {
        try {
          jsonBody = JSON.parse(body);
        }
        catch (e) {
          return reject(e);
        }
      }
      if (!error && response.statusCode == 200) {
        return resolve(jsonBody);
      } else {
        return reject(error);
      }
    });
  });
}

module.exports.turnLightOff = function() {
  return new Promise(function(resolve, reject){
    request({
      url: 'http://' + hueIP + '/api/' + hueUsername + '/lights/' + hueID + '/state',
      method: 'PUT',
      json: {
        'on': false
      }
    }, function (error, response, body) {
      var jsonBody = {};
      if (_.isArray(body)) {
        jsonBody = body[0];
      } else {
        try {
          jsonBody = JSON.parse(body);
        }
        catch (e) {
          return reject(e);
        }
      }
      if (!error && response.statusCode == 200) {
        return resolve(jsonBody);
      } else {
        return reject(error);
      }
    });
  });
}

module.exports.changeLightColor = function(color) {
  return new Promise(function(resolve, reject){
    request({
      url: 'http://' + hueIP + '/api/' + hueUsername + '/lights/' + hueID + '/state',
      method: 'PUT',
      json: {
        'hue': color,
        'sat': 254,
        'bri': 254
      }
    }, function (error, response, body) {
      var jsonBody = {};
      if (_.isArray(body)) {
        jsonBody = body[0];
      } else {
        try {
          jsonBody = JSON.parse(body);
        }
        catch (e) {
          return reject(e);
        }
      }
      if (!error && response.statusCode == 200) {
        return resolve(jsonBody);
      } else {
        return reject(error);
      }
    });
  });
}
