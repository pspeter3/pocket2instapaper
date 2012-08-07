// Dependencies
var request = require('request');
var querystring = require('querystring');
var _ = require('underscore');
var config = require('./config');

// Get the pocket reading list
var params = querystring.stringify(config.pocket);
request.get('https://readitlaterlist.com/v2/get?' + params, function(err, response, body) {
  var articles = JSON.parse(body);
  _.each(articles.list, function(article, id) {
    var params = querystring.stringify({username: config.instapaper.username, password: config.instapaper.password, url: article.url});
    request.get('https://www.instapaper.com/api/add?' + params, function(err, response, body) {
      if (body === '201') {
        console.log('Added ' + article.url);
      }
    });
  });
});