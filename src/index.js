const express = require("express");
const app = express();
const XLSX = require("xlsx");
const fs = require("fs");
const uniq = require("./data.js");

app.get("/", function(req, res) {
  res.send("Hello World!");
});

let workbook = XLSX.utils.book_new();
workbook.Props = {
  Title: "SheetJS export",
  Subject: "Excel file",
  Author: "Dmitriy"
};
let workSheet = XLSX.utils.json_to_sheet(uniq.uniq);

XLSX.utils.book_append_sheet(workbook, workSheet, "out.xlsx");
console.log("THis is workbook", workSheet);

XLSX.writeFile(workbook, "out2.xlsx");
