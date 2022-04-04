let inputArr= process.argv.slice(2);
// console.log(inputArr);

// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
//node main.js help

let command= inputArr[0];
switch (command) {
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organize":
        organizeFn(inputArr[1]);
        break;
    case "help":
        helpFn(inputArr[0]);
        break;
    default:
        console.log("Please Input Right Command");
}

function treeFn(dirPath){
    console.log("Tree command implementd", dirPath);
}
function organizeFn(dirPath){
    console.log("Organize command implemented", dirPath);
}
function helpFn(dirPath){
    console.log(`
    // node main.js tree "directoryPath"
    // node main.js organize "directoryPath"
    //node main.js help
    `);
}
