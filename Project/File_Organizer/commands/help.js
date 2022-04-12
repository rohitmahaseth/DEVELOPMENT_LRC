 
 //help implemented
  function helpFn(){
    console.log(`
    List of all commands:
      node main.js tree "directoryPath"
      node main.js organize "directoryPath"
      node mian.js help
    `);
}

module.exports={
    helpKey: helpFn
}