var express = require("express")
, path = require('path')
, mongoose =  require('mongoose')
, models = require('./models');

var app = express();

// Points Express to a folder where you keep static files
// e.g. css or client side js files


var uristring = process.env.MONGOLAB_URI || 
"mongodb://heroku_app22101346:tagr28j4ecjlurfrapg970imnt@ds053838.mongolab.com:53838/heroku_app22101346"


// These 3 lines tell express that we are going to be rendering html files
// held in the public directory which should be in the same directory as this file
app.use(express.static(path.normalize(__dirname) + '/public'))

app.set('views', path.normalize(__dirname) + '/public');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.logger('dev'));
app.use(express.errorHandler());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

require('./routes')(app);

mongoose.connect(uristring, function(err, res) {
if (err) {
console.log("Error" + err);
} else {
console.log("Successfully connected to mongodb at the url: " + uristring);
var port = Number(process.env.PORT || 8000);
app.listen(port);
console.log("App listening on port: " + port);
}
});




