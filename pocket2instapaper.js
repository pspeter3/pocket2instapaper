// Dependencies
var request = require('request');
var querystring = require('querystring');
var _ = require('underscore');

var getPocketReadingList = function(apikey, username, password) {
  var params = querystring.stringify({apikey: apikey, username: username, password: password});
  request.get('https://readitlaterlist.com/v2/get?' + params, function(err, response, body) {
    var articles = JSON.parse(body);
    _.each(articles.list, function(article, id) {
      console.log(article.url);
    });
  });
};