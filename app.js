var express = require('express');
var path = require('path');
var mongoose = require('mongoose')
var dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
var app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/chatrealtime");
mongoose.connection.on('connected',()=>{
  console.log("connected");
})
app.use(cors());
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.use("/auth", require("./routes/auth"));

module.exports = app;