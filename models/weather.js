var Promise = require('bluebird');
var _ = require('underscore');
var settings = require('../settings');
var request = require('request');
var weatherAPIKey = settings.weatherAPIKey;
var weatherDomain = settings.weatherDomain;

module.exports.getWeather = function(zipcode) {
  return new Promise(function(resolve, reject){
    request('http://' + weatherDomain + 'zip=' + zipcode + ',us&APPID=' + weatherAPIKey, function (error, response, body) {
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
