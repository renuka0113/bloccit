//app.js contains our express application

const express = require("express");
const app = express();
const routeConfig = require("./config/route-config.js");
const appConfig = require("./config/main-config.js")

//appConfig.init();
appConfig.init(app, express);
routeConfig.init(app);
module.exports = app;
