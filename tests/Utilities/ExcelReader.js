const xlsx = require('xlsx');

function readExcelFile(filepath, sheetName){
   const workbook = xlsx.readFile(filepath);
   const sheet = workbook.Sheets[sheetName];
   const jsonData =  xlsx.utils.sheet_to_json(sheet);
   return jsonData;


}
function getDataByKeyOption(filepath, sheetName, keyOptionValue) {
   const data = readExcelFile(filepath, sheetName);
   const matchedEntry = data.find(entry => entry['KeyOption'] === keyOptionValue);
   return matchedEntry || {};
} 
module.exports = { readExcelFile };

module.exports = {getDataByKeyOption};