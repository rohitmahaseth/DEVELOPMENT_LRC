let path= require("path");

// for(let i= 0; i<= 10; i++){
//     let dirPath= `lecture ${i}`;
//     fs.mkdirSync(dirPath);
//     fs.writeFileSync(path.join(dirPath, "readme.md"), `#readme for ${i}`);
// }

//join ->Joins two or more parts of a path:
let finalPath= path.join("/Users/rohit/Desktop/DEVELOPMENT_LRC/JavaScript/NodeJs", "hero.txt");
// console.log(finalPath);

//extname -> give extension
// console.log(path.extname(finalPath));

//basename -> Return the last portion of a path. A second parameter can filter out the file extension
// let basename= path.basename(__dirname);
// console.log(basename);
// basename= path.basename(finalPath);

//dirName ->directory ->Return the directory part of a path
// console.log(path.dirname(finalPath));

//folder path
// console.log(__dirname);
// //file path
// console.log(__filename);




