var assert = require('assert'),
	should = require('should'),
    urlomatic = require('../lib/urlomatic');

describe('url-o-matic', function ()
{
  describe('parse URLs', function ()
  {
    it('handle IP address', function ()
    {
      urlomatic.baseurl('http://127.0.0.1/part/').should.eql('127.0.0.1');
    });

    it('handle simple www address', function ()
    {
      urlomatic.baseurl('http://www.domain.com/').should.eql('domain.com');
    });

    it('handle simple SLD address', function ()
    {
      urlomatic.baseurl('http://www.domain.co.uk/').should.eql('domain.co.uk');
    });

    it('handle null', function ()
    {
      urlomatic.baseurl(null).should.eql('');
    });

    it('handle empty', function ()
    {
      urlomatic.baseurl('').should.eql('');
    });

    it('handle garbage', function ()
    {
      urlomatic.baseurl('not-valid').should.eql('');
    });

    it('handle URL with port', function ()
    {
      urlomatic.baseurl('http://www.domain.com:8080/').should.eql('domain.com:8080');
    });

    it('handle IP with port', function ()
    {
      urlomatic.baseurl('192.168.0.1:80').should.eql('192.168.0.1:80');
    });
  });
});
