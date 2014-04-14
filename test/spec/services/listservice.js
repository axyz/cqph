'use strict';

describe('Service: Listservice', function () {

  // load the service's module
  beforeEach(module('cqphApp'));

  // instantiate service
  var Listservice;
  beforeEach(inject(function (_Listservice_) {
    Listservice = _Listservice_;
  }));

  it('should do something', function () {
    expect(!!Listservice).toBe(true);
  });

});
