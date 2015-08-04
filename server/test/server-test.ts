/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import chai = require('chai');
var expect = chai.expect;

describe('Server', () => {
  it('should just work', (done) => {
      expect(true).to.equals(true);
      done();
  });
});
