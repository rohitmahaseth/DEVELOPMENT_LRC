let path= require("path");

//join ->Joins two or more parts of a path:
let finalPath= path.join("/Users/rohit/Desktop/DEVELOPMENT_LRC/JavaScript/29Mar/path", "hero.txt");

//basename -> Return the last portion of a path. A second parameter can filter out the file extension
let basename= path.basename(finalPath);
// console.log(basename);

//extname -> give extension
// console.log(path.extname(finalPath));

//dirName ->directory ->Return the directory part of a path
console.log(path.dirname(finalPath));
