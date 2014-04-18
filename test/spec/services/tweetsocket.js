'use strict';

describe('Service: TweetSocket', function () {

  // load the service's module
  beforeEach(module('cqphApp'));

  // instantiate service
  var TweetSocket;
  beforeEach(inject(function (_TweetSocket_) {
    TweetSocket = _TweetSocket_;
  }));

  it('should do something', function () {
    expect(!!TweetSocket).toBe(true);
  });

});
