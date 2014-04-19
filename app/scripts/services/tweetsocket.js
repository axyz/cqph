'use strict';

angular.module('cqphApp')
  .factory('TweetSocket', function ($rootScope) {
    // Service logic
    var tweets = []
    var ws = new WebSocket("ws://centoquaranta.herokuapp.com")
    ws.onopen = function() {
      console.log("socket opened")
    }

    ws.onmessage = _.throttle(function(message) {
      $rootScope.$apply(function() {
        tweets.unshift(JSON.parse(message.data))
      })
    }, 5000)


    // Public API here
    return {
      tweets: tweets
    };
  });
