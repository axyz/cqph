'use strict';

angular.module('cqphApp')
  .factory('TweetSocket', function ($rootScope) {
    // Service logic
    var tweets = []
    var ws = new WebSocket("ws://centoquaranta.herokuapp.com")
    ws.onopen = function() {
      console.log("socket opened")
    }

    ws.onmessage = function(message) {
      var tweet = JSON.parse(message.data)
      $rootScope.$apply(function() {
        tweets.unshift(tweet)
      })
    }


    // Public API here
    return {
      tweets: tweets
    };
  });
