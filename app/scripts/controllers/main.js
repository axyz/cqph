'use strict';

angular.module('cqphApp')
  //.controller('MainCtrl', function ($scope, $routeParams,  ListService) {
    //var topic = $routeParams.topic ? $routeParams.topic : 'photographers'
    //ListService.getList(topic, function(err, data) {
      //$scope.tweets = data
    //})

    //ListService.getLists(function(err, data) {
      //ListService.getName(topic, data, function(err, list) {
        //$scope.listName = list[0].name
      //})
    //})

  //});

  .controller('MainCtrl', function ($scope, $routeParams,  ListService) {
    var topic = $routeParams.topic ? $routeParams.topic : 'photographers'
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

    ListService.getLists(function(err, data) {
      ListService.getName(topic, data, function(err, list) {
        $scope.listName = list[0].name
      })
    })

  });

