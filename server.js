const express = require("express"); 
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userdata = require("./utility/userdata.json");
const path = require("path");

const app = express();
const PORT = 5000;

app.get("/userdata", (req, res) => {
  res.send(userdata);
  });

app.get("/", (req, res) => {
  res.send( "Hello World");
});

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`.yellow)
    });

      