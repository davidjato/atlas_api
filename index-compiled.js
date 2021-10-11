"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _http = _interopRequireDefault(require("http"));

var _https = _interopRequireDefault(require("https"));

var _config = _interopRequireDefault(require("./config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var host = `${process.env.APP_HOST}:${process.env.APP_PORT}`;
var port = process.env.APP_PORT || 3010;
app.get('/', function (req, res) {
  res.send('Saludos desde express');
});
(0, _config["default"])(app);

var httpServer = _http["default"].createServer(app);

var server = httpServer.listen(port, function () {
  console.log("App listening on port ".concat(port, " => ").concat(host, ":").concat(port));
});
module.exports = server;
