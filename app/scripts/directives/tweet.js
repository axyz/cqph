'use strict';

angular.module('cqphApp')
  .directive('tweet', function () {
    return {
      templateUrl: 'views/tweet.html',
      restrict: 'E',
      scope: {
        json: '='
      },
      link: function postLink(scope, element, attrs) {
        element.find('p').html(scope.json.text)
      }
    };
  });
