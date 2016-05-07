const request = require('request');

module.exports = request.defaults({
  headers: {
    'Host': 'www.car2go.com',
    'Accept': 'application/json; encoding="utf-8"',
    'User-Agent': 'car2go/2.33.0 (iPhone; iOS 9.3.1; Scale/3.00)',
    'Accept-Language': 'en-US;q=1',
  }
});
