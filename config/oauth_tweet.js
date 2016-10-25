var OAuth = require('oauth');
var cofTweet = require('../config/configTweet');

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  cofTweet.consumer_key,
  cofTweet.consumer_secret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

module.exports = {

  search: function (url, callback){
    oauth.get(
      url,
      cofTweet.access_token_key, //test user token
      cofTweet.access_token_secret, //test user secret
      function (e, data, res){
      if (e) console.error(e);
        callback(data)
      });
  }
}
