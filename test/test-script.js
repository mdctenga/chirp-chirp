var chai = require('chai');
var expect = chai.expect;
var chirp = require('../chirpchirp.js');

describe('chirp', function () {
  it('should be a function', function () {
    expect(chirp).to.be.a('function');
  });

  it('should chirp once', function () {
    expect(chirp(1)).to.equal('chirp');
  });

  it('should chirp twice', function () {
    expect(chirp(2)).to.equal('chirp chirp');
  });
});