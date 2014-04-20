module.exports = function(app){
    var handlers = require('./handlers');
    app.get('/', handlers.index);
	app.get('/kecheng', handlers.kecheng);
}

module.exports = function(app){
    var handlers = require('./handlers');
    app.get('/', handlers.index);
	app.get('/aboutme', handlers.aboutme);
}
