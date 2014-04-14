var express = require("express")
, path = require('path')
, mongoose = require('mongoose')
, models = require('./models');

var app = express();





var uristring = process.env.MONGOLAB_URI || 
"mongodb://heroku_app22101346:bjnrfnk4kk2llmcdpl6gpeojmu@ds029277.mongolab.com:29277/heroku_app22101346"

app.use(express.static(path.normalize(__dirname) + '/public'))

app.set('views', path.normalize(__dirname) + '/public/html');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.logger('dev'));
app.use(express.errorHandler());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

require('./routes')(app);

console.log("Trying to connect");
mongoose.connect(uristring, function(err){
    if (err){
	console.log("Error: " + err
		   ); 
	}else{
		       console.log("Successfully connected to mongodb at url: " + uristring);
		       var port = Number(process.env.PORT || 8000);
		       app.listen(port);
		       console.log("App listening on port: " + port);
		   }
});

