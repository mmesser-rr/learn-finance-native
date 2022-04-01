const fs = require('fs');

const API_FILE_LOCATION = `${__dirname}/../src/types/API.ts`;

fs.readFile(API_FILE_LOCATION, 'utf8', function (error, data) {
  if (error) {
    return console.log(error);
  }
  var result = data.replace(/__typename:/g, '__typename?:');

  fs.writeFile(API_FILE_LOCATION, result, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
  });
});
