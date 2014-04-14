'use strict';

angular.module('cqphApp')
  .controller('MenuCtrl', function ($scope, ListService) {
    ListService.getLists(function(err, data) {
      $scope.lists = data

      $scope.isActive = function(path) {
        return '#/topic/' + path === window.location.hash ? true : false
      }
    })
  });
