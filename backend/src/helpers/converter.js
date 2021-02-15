const { Parser } = require('json2csv');


function convert2Csv (jsonFile){
try {
    const parser = new Parser();
    const csv = parser.parse(jsonFile);
    console.log(csv);
    return csv;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {convert2Csv}