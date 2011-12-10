var fs     = require('fs');
var events = require('events');
var path   = require('path');

function Grep(){
  events.EventEmitter.call(this);
}

Grep.super_ = events.EventEmitter;
Grep.prototype = Object.create(events.EventEmitter.prototype, {
    constructor: {
        value: Grep,
        enumerable: false
    }
});

Grep.prototype.run = function(dir){
    var self = this;
    var dir = path.normalize(dir);
	fs.readdir(dir, function(err, entries){
	  if(err){
	    console.log(err);
	  }else{
	    entries.forEach(function(entry){
		  var entry_path = path.join(dir, entry); 
	      fs.stat(entry_path, function(err, stats){
		    if(err){
			  console.log(err);
		    }else{
	          if(stats.isFile()){
	          // Emit File
       	        self.emit('file', entry_path);
              }
              if( stats.isDirectory() ){
	            // Emit Dir
	            //self.run(entry_path);
	       	    self.emit('dir', entry_path);
	          }
	        }
	      });
	    });
	  }
	});	
};

exports.Grep = new Grep();