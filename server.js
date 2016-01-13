var express = require('./config/express');

var PORT = process.env.PORT || 3000;

var app = express();
app.listen(PORT);
module.exports = app;

console.log('Server running at port ' + PORT + '!');


