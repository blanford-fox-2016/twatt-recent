var express = require('express');
var OAuth = require('oauth');
var cofTweet = require('../config/configTweet');
var connectionToken = require('../config/oauth_tweet');


module.exports = {

  awal: function(req, res){
    var url = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
    connectionToken.search(url, function(data){
      var json_data = JSON.parse(data)
      res.json(json_data)
    })
  },search: function(req, res) {
    var url = 'https://api.twitter.com/1.1/search/tweets.json?q='+req.query.input_user;
    connectionToken.search(url, function(data){
      var json_data = JSON.parse(data)
      res.json(json_data)
    })
  }

}
