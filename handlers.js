exports.index = function(req, res){
    res.send("Welcome to cs");
}

exports.kecheng = function(req, res){
	res.render('kecheng', function(err, html){
		res.send(html);
	})
}

exports.aboutme = function(req, res){
	res.render('aboutme', function(err, html){
		res.send(html);
	})
}
