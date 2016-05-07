const { writeFile } = require('fs');
const { join } = require('path');
const mkdirp = require('mkdirp');

const car2go = require('./lib/car2go-headers');
const getNextInterval = require('./lib/get-next-interval');

const url = 'https://www.car2go.com/caba/customer/vehicles/denver?hardwareVersion=HW2';

const dataDirectory = join(__dirname, 'data');
const logsDirectory = join(__dirname, 'logs');

mkdirp(dataDirectory);
mkdirp(logsDirectory);

module.exports = function getData() {
  car2go.get(url, (error, response, body) => {
    if (error) { writeFile(join(logsDirectory, `${Date.now()}.json`), error); }
    writeFile(join(dataDirectory, `${Date.now()}.json`), body);
    setTimeout(getData, getNextInterval());
  });
}

if (module.parent) { getData(); }
