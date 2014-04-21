var mongoose = require("mongoose")
, Pin = mongoose.model("Pin");

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

exports.pinterless = function(req, res){
      if(req.query.search) {
	Pin.findByTitle(req.query.search, function(err, all_pins){
		console.log("Pins: " + JSON.stringify(all_pins));
		res.render('pinterless', { pins: all_pins }, function(err, html){
			res.send(html);
	})
});
		
      }else{
	Pin.find({}, function(err, all_pins) {
		console.log("Pins: "+ JSON.stringify(all_pins));
		res.render("pinterless", { pins: all_pins}, function(err, html){
		res.send(html);		
		})	
	} );
}
}
exports.createPin = function(req, res){
	var newPin = new Pin({
		title : req.body.title, 
		description: req.body.description, 
		image_url: req.body.image_url		
	});

	newPin.save(function(err) {
		if(err){ console.log("Error saving pin: " + err)}
		else{
			res.redirect('/pinterless');		
		}
	})
}	

