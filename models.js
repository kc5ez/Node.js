var mongoose = require("mongoose");

var pinSchema = mongoose.Schema({
    title: String, 
    description: String,
    image_url: String,
    date: {
	type: Date, 
        default: Date.now
    },
});

pinSchema.methods.print_out = function(){
    var output = JSON.stringify(this);
    console.log(output);
}

pinSchema.statics.findByTitle = function (title, cb){
    this.find({title: new RegExp(title, 'i')}, cb)
}

pinSchema.methods.delete = function(title, cb){
    this.remove({title:title});
}

var Pin = mongoose.model('Pin', pinSchema)
