require("dotenv").config();
//dotenv is  node package that assists us with handling environment variables for our development environment

const path = require("path");
const viewsFolder = path.join(__dirname, "..", "views");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const flash = require("express-flash");
const passportConfig = require("./passport-config");
const session = require("express-session");


module.exports = {
  init(app,express){
    app.set("views", viewsFolder);
    app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "..", "assets")));
    app.use(expressValidator());
    app.use(session({
   secret: process.env.cookieSecret,
   resave: false,
   saveUninitialized: false,
   //cookie: { maxAge: 60000 }
  cookie:{maxAge: 1.21e+9}//set cookie to expire in 14 days
 }));
 app.use(flash());
 passportConfig.init(app);
 app.use((req,res,next) => {
    res.locals.currentUser = req.user;
    next();
  })
  }
};
