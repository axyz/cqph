'use strict';

angular.module('cqphApp')
  .filter('byTopic', function (ListService) {
    return function (input, topic) {
      if(window.location.hash === '#/') return input
      return input.filter(function(el) {
        if(topic === undefined) return true
        return String(el.user.id) in topic
      })
    }
  })
