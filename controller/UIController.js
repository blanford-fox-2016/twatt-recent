var connect_data = require('../helper/oauth')

module.exports = {
  // ============================================
  // View
  //=============================================
  viewHome: function(req, res, next){
    var url = 'https://api.twitter.com/1.1/statuses/user_timeline.json'
    connect_data.get_data_cb(url, function(data){
      res.render('index', {title: "twatt-recent", show_data_home : JSON.parse(data)})
    })
  },
  viewTimeline: function(req, res, next) {
    var url = 'https://api.twitter.com/1.1/statuses/home_timeline.json'
    connect_data.get_data_cb(url, function(data){
      res.render('timeline', {title: "twatt-recent", show_data_timeline : JSON.parse(data)})
    })
  }
}
