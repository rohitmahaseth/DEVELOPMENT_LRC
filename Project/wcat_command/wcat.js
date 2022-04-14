#!/usr/bin/env node
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

let isBothPresent= optionsArr.includes("-b") && optionsArr.includes("-n");
if(isBothPresent){
    console.log("either enter -b or -n");
    return;
}

//existance
for(let i= 0; i< filesArr.length; i++){
    let isPresent= fs.existsSync(filesArr[i]);
    if(isPresent== false){
        console.log(`file ${filesArr[i]} is not present`);
        return;
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
// console.log(contentArr);

//-s
let isSPresent= optionsArr.includes("-s");
if(isSPresent){
    for(let i= 0; i< contentArr.length; i++){
        if(contentArr[i]== "" && contentArr[i- 1]== ""){
            contentArr[i]= null;
        }
        else if(contentArr[i]== "" && contentArr[i- 1]== null){
            contentArr[i]= null;
        }
    }

    let tempArr= [];
    for(let i= 0; i< contentArr.length; i++){
        if(contentArr[i]!= null){
            tempArr.push(contentArr[i]);
        }
    }
    contentArr= tempArr;
}
// console.log(contentArr.join("\n"));

let isNPresent= optionsArr.includes("-n");
if(isNPresent){
    for(let i= 0; i< contentArr.length; i++){
        contentArr[i]= `${i+ 1} ${contentArr[i]}`;
    }
}
// console.log(contentArr.join("\n"));

let isBPresent= optionsArr.includes("-b");
if(isBPresent){
    let count= 1;
    for(let i= 0; i< contentArr.length; i++){
        if(contentArr[i]!= ""){
            contentArr[i]= `${count}} ${contentArr[i]}`;
            count++;
        }
    }
}
console.log(contentArr.join("\n"));



