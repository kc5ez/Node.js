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

exports.eating = function(req, res){
	res.render('eating', function(err, html){
		res.send(html);
	})
}

exports.adventures = function(req, res){
	res.render('adventures', function(err, html){
		res.send(html);
	})
}

exports.thoughts = function(req, res){
	res.render('thoughts', function(err, html){
		res.send(html);
	})
}

exports.likes = function(req, res){
	res.render('likes', function(err, html){
		res.send(html);
	})
}
