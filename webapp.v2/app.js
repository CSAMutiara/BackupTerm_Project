var express = require('./express');
var library = require('./controllers/library');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));
// for example: localhost:3000/assets/styles.css

//fire controllers
library(app);

app.listen(3000);
console.log('you are listenning to port 3000');