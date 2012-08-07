// Dependencies
var prompt = require('prompt');
var request = require('request');
var querystring = require('querystring');
var _ = require('underscore');

var getPocketReadingList = function(apikey, username, password) {
  var params = querystring.stringify({apikey: apikey, username: username, password: password});
  request.get('https://readitlaterlist.com/v2/get?' + params, function(err, response, body) {
    var list = JSON.parse(body);
    console.log(list);
  });
};
