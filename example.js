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

grep.run("..");