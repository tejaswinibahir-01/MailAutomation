var xlsx = require("xlsx");
const jsonObject = require("./output.json");
var workBook = xlsx.utils.book_new()
var workSheet = xlsx.utils.json_to_sheet(jsonObject);
xlsx.utils.book_append_sheet(workBook,workSheet);
xlsx.writeFile(workBook,"convertedDemo.xlsx");

// var xlsx = require('xlsx')
// const jsonObject = require('./dataJ.json')
// var workBook = xlsx.utils.book_new()
// var workSheet = xlsx.utils.json_to_sheet(jsonObject)
// xlsx.utils.book_append_sheet(workBook,workSheet)
// xlsx.writeFile(workBook,"convertedJsontoExcel.xlsx")