module.exports = function(app){
    var handlers = require('./handlers');
    app.get('/', handlers.index);
	app.get('/kecheng', handlers.kecheng);
	app.get('/aboutme', handlers.aboutme);
	app.get('/eating', handlers.eating);
	app.get('/adventures', handlers.adventures);
	app.get('/thoughts', handlers.thoughts);
	app.get('/pinterless', handlers.pinterless);

	app.post('/pinterless', handlers.createPin);
	app.post('/eating', handlers.createFood);
}
