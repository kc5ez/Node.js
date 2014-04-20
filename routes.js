module.exports = function(app){
    var handlers = require('./handlers');
    app.get('/', handlers.index);
	app.get('/kecheng', handlers.kecheng);
	app.get('/aboutme', handlers.aboutme);
}
