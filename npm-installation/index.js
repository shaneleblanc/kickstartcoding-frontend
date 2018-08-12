
var weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C
var temp = 0;
weather.find({search: 'Oakland, CA', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);

  console.log(JSON.stringify(result, null, 2));
  temp = result[0].current.temperature;
});

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send(`Here's the weather for Oakland: ${temp}`);
})

app.listen(3000)
