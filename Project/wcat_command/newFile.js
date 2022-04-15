let path= require("path");
let fs= require("fs");

let folderPath1= path.join("/Users/rohit/Desktop/DEVELOPMENT_LRC/Project/wcat_command", "folder1");
if(fs.existsSync(folderPath1)== false){
    fs.mkdirSync(folderPath1);
}

let folderPath2= path.join("/Users/rohit/Desktop/DEVELOPMENT_LRC/Project/wcat_command/folder1", "folder2");
if(fs.existsSync(folderPath2)== false){
    fs.mkdirSync(folderPath2);
}

// let newFilePath= path.join("/Users/rohit/Desktop/DEVELOPMENT_LRC/Project/wcat_command/folder1/folder2", "file.txt");
let baseFile= path.basename("/Users/rohit/Desktop/DEVELOPMENT_LRC/Project/wcat_command/f5.txt");
let destFilepath= path.join("/Users/rohit/Desktop/DEVELOPMENT_LRC/Project/wcat_command/folder1/folder2", baseFile)
fs.copyFileSync("/Users/rohit/Desktop/DEVELOPMENT_LRC/Project/wcat_command/f5.txt", destFilepath);
// if(fs.existsSync(newFilePath)== false){
//     fs.mkdirSync(newFilePath);
// }

fs.writeFileSync("/Users/rohit/Desktop/DEVELOPMENT_LRC/Project/wcat_command/folder1/folder2/file.txt", "this is the file");

