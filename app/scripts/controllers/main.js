'use strict';

angular.module('cqphApp')

  .controller('MainCtrl', function ($scope, $routeParams,  ListService) {
    var topic = $routeParams.topic ? $routeParams.topic : '<<<< >>>>'

    ListService.getLists(function(err, data) {
      ListService.getName(topic, data, function(err, list) {
        $scope.listName = (list[0] === undefined || list[0].name === '') ? topic : list[0].name
      })
    })

    //ListService.getList(topic, function(err, data) {
      //$scope.tweets = data
    //})

    ListService.getListMembers(topic, function(err, result) {
      if(!err && result.users != undefined) {
        $scope.topic = result.users.map(function(el) {
          return el.id
        })
      }else {
        $scope.topic = []
      }
    })

    $scope.tweets = []
    var ws = new WebSocket("ws://centoquaranta.herokuapp.com")
    ws.onopen = function() {
      console.log("socket opened")
    }

    ws.onmessage = function(message) {
      var tweet = JSON.parse(message.data)
      $scope.$apply(function() {
        $scope.tweets.unshift(tweet)
      })
    }

  });

