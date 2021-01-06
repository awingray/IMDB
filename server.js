var compression = require("compression");
const express = require("express");
var bodyParser = require("body-parser");
var helmet = require("helmet");
var passport = require("passport");
var session = require("express-session");
var cookieParser = require("cookie-parser");
const connectDB = require("./src/database/config/db");
var cors = require('cors')

const app = express();
app.use(compression());
app.use(cors());

require("dotenv").load();

// set up mongoose connection
var port = process.env.PORT || 5000;
connectDB();

// set up our express application
app.use(cookieParser()); // read cookies (needed for auth)

// required for passport
app.use(
  session({
    secret: "mernAuthentication",
    saveUninitialized: true,
    resave: true,
  })
);
// session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// Imports routes
const movie_routes = require("./src/routes/v1/movie/movie.route");
const actor_routes = require("./src/routes/v1/actor/actor.route");
const director_routes = require("./src/routes/v1/director/director.route");

//Register Routes
app.use("/api/movies", movie_routes);
app.use("/api/actors", actor_routes);
app.use("/api/directors", director_routes);

app.listen(port, () => `Server running on port ${port}`);
