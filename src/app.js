const express = require("express");
const app = express();
const XLSX = require("xlsx"),
  request = require("request");
const fs = require("fs");
const uniq = require("./data.js");

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(8080, function() {
  console.log("Example app listening on port 3000!");
});

let wb = XLSX.utils.book_new();
wb.Props = {
  Title: "SheetJS export",
  Subject: "Excel file",
  Author: "Dmitriy"
};
wb.SheetNames.push("testing");
let ws_data = [uniq.uniq];
let ws = XLSX.utils.aoa_to_sheet(ws_data);
wb.Sheets["testing"] = ws;

let wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

fs.writeFile("hello5.xlsx", wbout, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});

console.log(uniq.uniq);
