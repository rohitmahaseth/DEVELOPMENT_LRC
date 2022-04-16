// file -> create,           read,            update,             delete
// -w, writeFileSync()      readFileSync    appendFileSync      unlinkSync
let fs= require("fs");

//1. read
// let buffer= fs.readFileSync("abc.js");
// console.log(""+ buffer);
// 2. create
// fs.openSync("abc.txt", "w");
// no file -> create or file exist -> content replace
// fs.writeFileSync("abc.txt", "this is rohit")
// 3. update
// fs.appendFileSync("abc.txt", "this is addtional file");

// folder(directory)
// create        read           delete
// mkdirSync     readdirsync    rmdirSync

// 4. create folder
// fs.mkdirSync("meriDir");
// fs.writeFileSync("/Users/rohit/Desktop/DEVELOPMENT_LRC/JavaScript/NodeJs/meriDir/meriFile.txt", "meraFile ka content");
// let content= fs.readdirSync("meriDir");
// console.log(content);
// for(let i= 0; i< content.length; i++){
//     console.log("file "+ content[i]+ " is removed");
//     // 5. remove file
//     fs.unlinkSync("meriDir/"+ content[i]);
// }


// 6. remove folder
// fs.rmdirSync("meriDir");


// 7. if a file exist at a path -> true/ false
// let doesPathExist= fs.existsSync("/Users/rohit/Desktop/DEVELOPMENT_LRC/JavaScript/NodeJs/abc1.txt");
// console.log(doesPathExist);

// 8. is.File() or is.Directory()
// let detailsObj= fs.lstatSync("/Users/rohit/Desktop/DEVELOPMENT_LRC/JavaScript/NodeJs/abc.txt").isFile();
// console.log(detailsObj);
// detailsObj= fs.lstatSync("/Users/rohit/Desktop/DEVELOPMENT_LRC/JavaScript/NodeJs/abc.txt").isDirectory();
// console.log(detailsObj);




