var fs = require('fs');

module.exports = function(app){
  fs.readdirSync("./routes/api").forEach(function(file) {
    require("./api/" + file)(app);
  });
};
