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
  .factory('ListService', function ListService($http, $q) {

    var members = {}

    var getLists = function(cb) {
      $http.get('http://centoquaranta.herokuapp.com/140/lists')
        .success(function(data) {
          cb(null, data)
        })
    }

    var getListMembers = function(list, cb) {
      if(list === '' || list === undefined) cb ('list not defined', null)
      $http.get('http://centoquaranta.herokuapp.com/140/lists/' + list + '/members')
        .success(function(data) {
          cb(null, data.users.map(function(el) {
            return el.id
          }))
        })
        .error(function(data, status) {
          console.log('http error '+ status)
          cb('http error', null)
        })
    }


    var getMembers = function() {
      var deferred = $q.defer()
      getLists(function(err, lists) {
        lists.map(function(list) {
          var slug = list.slug
          getListMembers(slug, function(err, data) {
            members[slug] = data
          })
        })
        deferred.resolve(members)
      })
      return deferred.promise
    }

    var getList = function(list, cb) {
      var url = 'http://centoquaranta.herokuapp.com/140/lists/' + list
      $http.get(url)
        .success(function(data) {
          for(var i=0; i<data.length; i++) {
            data[i].text = urlify(data[i].text)
            data[i].created_at = formatDate(data[i].created_at)
          }
          cb(null, data)
        })
    }

    var getName = function(slug, lists, cb) {
      if(slug === '' || slug === undefined) cb(null, '')
      var name = lists.filter(function(el) {
        return el.slug === slug ? true : false
      })
      cb(null, name)
    }


    return {
      getMembers: getMembers,
      getLists: getLists,
      getListMembers: getListMembers,
      getList: getList,
      getName: getName
    }

  });
