var weatherModel = require('../../models/weather');

module.exports = function (app) {
  getWeather = function(req, res) {
    weatherModel.getWeather(req.params.zipcode)
      .then(function(result){
        // result is number, '' change it to string
        res.status(200).send(result);
      })
      .catch(function(err){
        res.status(400).send(err);
      });
  },
  app.get('/api/weather/:zipcode', getWeather);
}
