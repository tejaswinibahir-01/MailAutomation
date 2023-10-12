var xlsx = require("xlsx");
var dataPathExcel = "demo.xlsx";
var wb = xlsx.readFile(dataPathExcel);
var sheetName = wb.SheetNames[0];
var sheetValue = wb.Sheets[sheetName];
var excelData = xlsx.utils.sheet_to_json(sheetValue);
//console.log(excelData);

const fs = require('fs');

const saveData = (excelData) => {
    const finished = (error) => {
        if(error){
            console.error(error);
            return;
        }
    }

    const jsonData = JSON.stringify(excelData,null,2);
    fs.writeFile('output.json',jsonData,finished);
}

saveData(excelData);


// var XLSX = require("xlsx");
// var workbook = XLSX.readFile("demo.xlsx");
// var sheet_name_list = workbook.SheetNames;
// console.log(sheet_name_list); // getting as Sheet1

// sheet_name_list.forEach(function (y) {
//   var worksheet = workbook.Sheets[y];
//   //getting the complete sheet
//   // console.log(worksheet);

//   var headers = {};
//   var data = [];
//   for (z in worksheet) {
//     if (z[0] === "!") continue;
//     //parse out the column, row, and value
//     var col = z.substring(0, 1);
//     // console.log(col);

//     var row = parseInt(z.substring(1));
//     // console.log(row);

//     var value = worksheet[z].v;
//     // console.log(value);

//     //store header names
//     if (row == 1) {
//       headers[col] = value;
//       // storing the header names
//       continue;
//     }

//     if (!data[row]) data[row] = {};
//     data[row][headers[col]] = value;
//   }
//   //drop those first two rows which are empty
//   data.shift();
//   data.shift();
//   console.log(data);
// });