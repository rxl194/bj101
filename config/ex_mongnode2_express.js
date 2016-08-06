// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var path = require('path'),
  http = require('http'),
  exphbs = require('express-handlebars'),
  express = require('express'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  morgan = require('morgan'),
  methodOverride = require('method-override'),
  moment = require('moment'),
  errorHandler = require('errorhandler');

// Define the Express configuration method
module.exports = function(db, wagner) {
  // Create a new Express application instance
  var app = express();

  // Create a new HTTP server
  var server = http.createServer(app);
  
  app.use(morgan('dev'));

  // Use the 'body-parser' and 'method-override' middleware functions
  app.use(bodyParser.urlencoded({
    extended: true
  }));  
  app.use(bodyParser.json());
  app.use(methodOverride()); 

  app.use(cookieParser('some-secret-value-here'));  
  
  // Set the application view engine and 'views' folder
  app.set('views', './app/views/ex/mongnode2/views');
  app.engine('handlebars', exphbs.create({
    defaultLayout: 'main',
    layoutsDir: app.get('views') + '/../layouts',
    partialsDir: [app.get('views') + '/../partials'],
    helpers: {
      timeago: function(timestamp) {
        return moment(timestamp).startOf('minute').fromNow();  
      }
    }      
  }).engine);
  app.set('view engine', 'handlebars');
  
  require('../app/routes/ex/mongnode2/ex_mongnode2.routes.js')(app);
  
  // Configure static file serving
  app.use(express.static('./public'));
  
  if (process.env.BJ101_ENV_APP_M101JS === 'development') {  
      app.use(errorHandler());
  }
  
  

  // Return the Server instance
  return server;
};


