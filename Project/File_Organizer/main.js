#!/usr/bin/env node
  let inputArr= process.argv.slice(2);
  let fs= require("fs");
  let path= require("path");
  
  let helpObj= require("/Users/rohit/Desktop/DEVELOPMENT_LRC/Project/File_Organizer/commands/help.js");
  let treeObj= require("/Users/rohit/Desktop/DEVELOPMENT_LRC/Project/File_Organizer/commands/tree.js");
  let organizeObj= require("/Users/rohit/Desktop/DEVELOPMENT_LRC/Project/File_Organizer/commands/organize.js");

  //node main.js tree "directoryPath"
  //node main.js organize "directoryPath"
  //node mian.js help

  let command= inputArr[0];
  switch (command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    defaut:
        console.log("Please input right command");
        break;
  }

