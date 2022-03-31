//file system
let fs= require("fs");

// let content= fs.readFileSync("profileLookup.js");
//buffer deta hai
// console.log(content);
//string main convert ho jata hai
// console.log(content+ " ");

//write file
// fs.writeFileSync("myfile.txt", "hello from node");

//append
// fs.writeFileSync("myfile.txt", "content appended");

//delete
// fs.unlinkSync("toDelete.txt");

//create folder in Nodejs
let doesPathExist= fs.existsSync("myFolder");
if(doesPathExist== false){
    fs.mkdirSync("myFolder");
}
else{
    console.log("Folder already exist");
}

//how to delete a folder in Nodejs
fs.rmdirSync("myFolder");
console.log("Folder deleted");
