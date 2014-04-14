'use strict';

angular.module('cqphApp')
  .controller('MainCtrl', function ($scope, $routeParams,  ListService) {
    var topic = $routeParams.topic ? $routeParams.topic : 'photographers'
    ListService.getList(topic, function(err, data) {
      $scope.tweets = data
    })

    ListService.getLists(function(err, data) {
      ListService.getName(topic, data, function(err, list) {
        $scope.listName = list[0].name
      })
    })

  });
