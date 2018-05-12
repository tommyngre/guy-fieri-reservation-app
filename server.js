let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();
let PORT = 3200;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let tables = [
  {
    name: "bimp",
    phoneNumber: "919-900-9000",
    email: "bimp@bimp.com",
    customerID: "101"
  }
];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/table", function (req, res) {
  res.sendFile(path.join(__dirname, "table.html"))
});
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"))
});

app.get("/api/tables", function (req, res) {
  return res.json(tables);
});
app.post("/api/tables", function (req, res) {
  let newTable = req.body;

  console.log(newTable)

  tables.push(newTable);

  //what is this doing?
  res.json(newTable);
});

app.post('/api/clear', function(req, res){
  // Empty out the arrays of data
  tables = [];
  waitListData = [];

  console.log(tables);
})

app.listen(PORT, function () {
  console.log("listening on port " + PORT);
});