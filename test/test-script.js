var chai = require('chai');
var should = chai.should();
var chirp = require('../chirpchirp.js');

describe('chirp', function () {
  it('should be a function', function () {
    chirp.should.be.a('function');
  });
});