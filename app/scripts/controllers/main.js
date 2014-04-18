'use strict';

angular.module('cqphApp')

  .controller('MainCtrl', function ($scope, $routeParams,  ListService, TweetSocket) {
    $scope.topic = $routeParams.topic ? $routeParams.topic : '<<<< >>>>'

    ListService.getLists(function(err, data) {
      ListService.getName($scope.topic, data, function(err, list) {
        $scope.listName = (list[0] === undefined || list[0].name === '') ? $scope.topic : list[0].name
      })
    })

    //ListService.getList(topic, function(err, data) {
      //$scope.tweets = data
    //})

    ListService.getMembers().then(function(data) {
      $scope.members = data
    })
    $scope.tweets = TweetSocket.tweets

  });

