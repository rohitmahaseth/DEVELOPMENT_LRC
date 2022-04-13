let fs= require("fs");
let inputArr= process.argv.slice(2);
// console.log(inputArr);

//options
let optionsArr= [];
let filesArr= [];
for(let i= 0; i< inputArr.length; i++){
    let firstChar= inputArr[i].charAt(0);
    if(firstChar== '-'){
        optionsArr.push(inputArr[i]);
    }
    else{
        filesArr.push(inputArr[i]);
    }

}

// read the files
let content= "";
for(let i= 0; i< filesArr.length; i++){
    let bufferContent= fs.readFileSync(filesArr[i]);
    content+= bufferContent+ "\n";
}
// console.log(content);
let contentArr= content.split("\n");
console.log(contentArr);


