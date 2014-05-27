url-o-matic
============

URL helpers. First version just contains 'baseurl(url)' which extracts the root domain or IP from a full URL. 'baseurl' extracts the top-level domains (TLD) but will also handle extracting second level domains (SLD) based on the latest known SLD list.

## Installation

	npm install url-o-matic
	
## Usage

	/* look at the unit tests for more examples */
	
	var urlomatic = require('url-o-matic');	
	var baseurl = urlomatic.baseurl('http://www.domain.co.uk/part');
	
	
## Tests

	mocha test/*.js

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
