var schedule = require('node-schedule');
var weatherModel = require('../models/weather');
var lightControlModel = require('../models/lightControl');
var Promise = require('bluebird');
var _ = require('underscore');

schedule.scheduleJob('*/1 * * * *', function() {
  return new Promise(function(resolve, reject){
    weatherModel.getWeather('06810')
      .then(function(result){
        var w = result.weather[0].main;
        if (w == 'Snow') {
          var color = 65280;
        } else if (w == 'Rain') {
          color = 12750;
        } else {
          color = 25500;
        }
        return lightControlModel.changeLightColor(color);
      })
      .then(function(result){
        console.log(result);
        resolve(result);
      })
      .catch(function(err){
        console.log(err);
        reject(err);
      })
  });
})
