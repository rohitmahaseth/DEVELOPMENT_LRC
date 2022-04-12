  let inputArr= process.argv.slice(2);
  let fs= require("fs");
  let path= require("path");
//   console.log(inputArr);
  //node main.js tree "directoryPath"
  //node main.js organize "directoryPath"
  //node mian.js help

 let types= {
    media: ["mp4", "mkv"], 
    archieves: ["zip", "7z", "tar", "rar", "iso"],
    documents: ["docx", "doc", "pdf", "xlxs", "xls", "txt", "pptx", "csv"],
    app: ["exe", "dmg", "pkg", "deb", "apk"],
    photo: ["jpg"],
 }

  let command= inputArr[0];
  switch (command){
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organize":
        organizeFn(inputArr[1]);
        break;
    case "help":
        helpFn();
        break;
    defaut:
        console.log("Please input right command");
        break;
  }

  function treeFn(dirPath){
    // let desPath;
    if(dirPath== undefined){
        console.log("please enter the path");
        return;
    }
    else{
        let doesExist= fs.existsSync(dirPath);
        if(doesExist){
            treeHelper(dirPath, "")
        }
        else{
            console.log("please enter correct path");
        }
    }
  }

  function treeHelper(dirPath, indent){
      // is file or folder
      let isFile= fs.lstatSync(dirPath).isFile();
      if(isFile){
          let fileName= path.basename(dirPath);
          console.log(indent+ "├── "+ fileName);
      }
      else{
          let dirName= path.basename(dirPath);
          console.log(indent+ "└── "+ dirName);
          let childrens= fs.readdirSync(dirPath);
          for(let i= 0; i< childrens.length; i++){
              let childPath= path.join(dirPath, childrens[i]);
              treeHelper(childPath, indent+ "\t");
          }
      }

  }

  function organizeFn(dirPath){
    //1. input -> directory path given
    let desPath;
    if(dirPath== undefined){
        console.log("please enter the path");
        return;
    }
    else{
        let doesExist= fs.existsSync(dirPath);
        if(doesExist){
            //2. create organized_files in the dirctory
            desPath= path.join(dirPath, "organized_files");
            if(fs.existsSync(desPath)== false){
                fs.mkdirSync(desPath);
            }
            


        }
        else{
            console.log("please enter correct path");
        }
    }
    organizehelper(dirPath, desPath);
}

 function organizehelper(dirPath, desPath){
    //3. Identify files in the directory
    let childNames= fs.readdirSync("/Users/rohit/Downloads");
    // console.log(childNames);
    for(let i= 0; i< childNames.length; i++){
        let childAddress= path.join("/Users/rohit/Downloads", childNames[i]);
        let isFile= fs.lstatSync(childAddress).isFile();
        if(isFile){
            let category= getCategory(childNames[i]);
            //4. copy/ cut files to organized_files
            sendFiles(childAddress, desPath, category);
        }
    }
    
 } 

 function sendFiles(srcFilePath, dest, category){
     let categoryPath= path.join(dest, category);
     if(fs.existsSync(categoryPath)== false){
         fs.mkdirSync(categoryPath);
     }
     let fileName= path.basename(srcFilePath);
     let destFilepath= path.join(categoryPath, fileName);
     fs.copyFileSync(srcFilePath, destFilepath);
     fs.unlinkSync(srcFilePath);
     console.log(fileName, "copied to", category);
 }

 function getCategory(name){
     let ext= path.extname(name);
     ext= ext.slice(1);
     for(let type in types){
        let ctypeArray= types[type];
        for(let i= 0; i< ctypeArray.length; i++){
            if(ext== ctypeArray[i])
                return type;
        }
     }

     return "others";
 }

  //help implemented
  function helpFn(){
      console.log(`
      List of all commands:
        node main.js tree "directoryPath"
        node main.js organize "directoryPath"
        node mian.js help
      `);
  }