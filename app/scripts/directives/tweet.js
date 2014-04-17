'use strict';

var urlify = function(text) {
  var ris = ""
  ris = text.replace(/https?:\/\/[\w.?\-\+\/]*/g, '<a target="_blank" href ="$&">$&</a>')
  ris = ris.replace(/#[\w\-\._]*/g, function(match, offset, string) {
    return '<a target="_blank" class="hashtag" href ="https://twitter.com/search?q=%23' + match.slice(1) + '&src=hash">' + match + '</a>'
  })
  ris = ris.replace(/@[\w\-\._]*/g, function(match, offset, string) {
    return '<a target="_blank" class="hashtag" href ="https://twitter.com/' + match.slice(1) + '">' + match + '</a>'
  })
  return ris
}

var formatDate = function(date) {
  return date.slice(0,19) + ' ' + date.slice(26,30)
}

angular.module('cqphApp')
  .directive('tweet', function () {
    return {
      templateUrl: 'views/tweet.html',
      restrict: 'E',
      scope: {
        json: '='
      },
      link: function postLink($scope, element, attrs) {
        $scope.json.text = urlify($scope.json.text)
        $scope.json.created_at = formatDate($scope.json.created_at)
        element.find('p').html($scope.json.text)
      }
    };
  });
