'use strict';

describe('Filter: byTopic', function () {

  // load the filter's module
  beforeEach(module('cqphApp'));

  // initialize a new instance of the filter before each test
  var byTopic;
  beforeEach(inject(function ($filter) {
    byTopic = $filter('byTopic');
  }));

  it('should return the input prefixed with "byTopic filter:"', function () {
    var text = 'angularjs';
    expect(byTopic(text)).toBe('byTopic filter: ' + text);
  });

});
