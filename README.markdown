# Node.js Grep lib
  simple module to help grepping directories / files in node.js
# Example
  example usage is in example.js
  for lazy people i will paste it here
    var grep = require('./lib/grep.js').Grep;

    function onfile(filename){
      console.log("FILE(%s)", filename);
    }

    function ondir(dirname){
      console.log("DIR(%s)", dirname);
      grep.run(dirname);
    }
    grep.on("file", onfile);
    grep.on("dir", ondir);
    grep.run("..");%

# Have fun ;-F