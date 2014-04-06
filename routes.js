module.exports = function(app){
    var handlers = require('./handlers');
    app.get('/', handlers.index);
	app.get('/pilates', handlers.pilates);
	app.get('/kecheng', handlers.kecheng);
	app.get('/pinterless', handlers.pinterless);

	app.post('/pinterless', handlers.createPin);
}
