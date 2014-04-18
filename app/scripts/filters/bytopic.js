'use strict';

angular.module('cqphApp')
  .filter('byTopic', function (ListService) {
    return function (input, topic) {
      if(window.location.hash === '#/') return input
      return input.filter(function(el) {
        if(topic === undefined) return true
        return topic.indexOf(String(el.user.id)) != -1
      })
    }
  })
