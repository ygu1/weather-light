var lightControlModel = require('../../models/lightControl');

module.exports = function (app) {
  getLightStatus = function(req, res) {
    lightControlModel.getLightStatus()
      .then(function(result){
        // result is number, '' change it to string
        res.status(200).send(result);
      })
      .catch(function(err){
        res.status(400).send(err);
      });
  },
  turnLightOn = function(req, res) {
    lightControlModel.turnLightOn()
      .then(function(result){
        // result is number, '' change it to string
        res.status(200).send(result);
      })
      .catch(function(err){
        res.status(400).send(err);
      });
  },
  turnLightOff = function(req, res) {
    lightControlModel.turnLightOff()
      .then(function(result){
        // result is number, '' change it to string
        res.status(200).send(result);
      })
      .catch(function(err){
        res.status(400).send(err);
      });
  },
  changeLightColor = function(req, res) {
    lightControlModel.changeLightColor(req.body.color)
      .then(function(result){
        // result is number, '' change it to string
        res.status(200).send(result);
      })
      .catch(function(err){
        res.status(400).send(err);
      });
  },
  app.get('/api/lightControl/status', getLightStatus);
  app.get('/api/lightControl/on', turnLightOn);
  app.get('/api/lightControl/off', turnLightOff);
  app.put('/api/lightControl/color', changeLightColor);
}
