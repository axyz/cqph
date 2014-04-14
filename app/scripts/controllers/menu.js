'use strict';

angular.module('cqphApp')
  .controller('MenuCtrl', function ($scope, ListService) {
    ListService.getLists(function(err, data) {
      $scope.lists = data.filter(function(el) {
        return el.user.screen_name === '140photography' ? true : false
      })

      $scope.isActive = function(path) {
        return '#/topic/' + path === window.location.hash ? true : false
      }
    })
  });
