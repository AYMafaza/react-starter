/// <reference path="../../../../typings/mocha/mocha.d.ts" />
/// <reference path="../../../../typings/chai/chai.d.ts" />

import chai = require('chai');
var expect = chai.expect;

describe('Workspace', () => {
  it('should just work', (done) => {
      expect(1+1).to.equals(2);
      done();
  });
});
