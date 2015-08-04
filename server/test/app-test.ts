/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import chai = require('chai');
var expect = chai.expect;

describe('App', () => {
  it('should just work', (done) => {
      expect(5).to.equals(5);
      done();
  });
});
