'use strict';

describe('Service: Centoquaranta', function () {

  // load the service's module
  beforeEach(module('cqphApp'));

  // instantiate service
  var Centoquaranta;
  beforeEach(inject(function (_Centoquaranta_) {
    Centoquaranta = _Centoquaranta_;
  }));

  it('should do something', function () {
    expect(!!Centoquaranta).toBe(true);
  });

});
