// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var config = require('./config'),
  http = require('http'),
  socketio = require('socket.io'),
  express = require('express'),
  morgan = require('morgan'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  session = require('express-session'),
  MongoStore = require('connect-mongo')(session),
  flash = require('connect-flash'),
  consolidate_eng = require('consolidate'),
  passport = require('passport');

// Define the Express configuration method
module.exports = function(db, wagner) {
  // Create a new Express application instance
  var app = express();

  // Create a new HTTP server
  var server = http.createServer(app);

  // Create a new Socket.io server
  var io = socketio.listen(server);

  // Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

  // Use the 'body-parser' and 'method-override' middleware functions
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  // Configure the MongoDB session storage
  var mongoStore = new MongoStore({
    db: db.connection.db
  });

  // Configure the 'session' middleware
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret,
    store: mongoStore
  }));

  // Set the application view engine and 'views' folder
  app.set('views', './app/views');
  app.engine('html', consolidate_eng.nunjucks);
  app.set('view engine', 'ejs');

  // Configure the flash messages middleware
  app.use(flash());

  // Configure the Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Load the payment methods
  require('../app/controllers/ys/ys_stripe.payments')(wagner);

  // Load the routing files
  require('../app/routes/index.routes')(app);
  require('../app/routes/ex/ex_proangular.routes')(app);
  require('../app/routes/ys/ys_users.routes')(app);
  require('../app/routes/bo/bo_articles.routes')(app);
  require('../app/routes/oa/oa_todolists.routes')(app);
  require('../app/routes/ec/ec_categorys.routes')(app, wagner);
  require('../app/routes/ec/ec_products.routes')(app, wagner);
  require('../app/routes/ec/ec_users.routes')(app, wagner);
  require('../app/routes/sps/sps_products.routes')(app);
  require('../app/routes/sps/sps_orders.routes')(app);

  // Load the routing files for SampleProjects
  if (process.env.BJ101_ENV_APP_M101JS === 'development') {
    require('../app/routes/ex/m101js/ex_m101js.w01.routes.js')(app);
    require('../app/routes/ex/umdbm101/ex_umdbm101.routes.js')(app);
  }

  // Configure static file serving
  app.use(express.static('./public'));

  // Load the Socket.io configuration
  require('./socketio')(server, io, mongoStore);

  // Return the Server instance
  return server;
};


