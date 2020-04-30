 const inquirer = require("inquirer");
 const colors = require("colors");
 const KeyManager = require('../lib/KeyManager');
 const { isRequired } = require("../utils/validation");

 const key = {
   async set(){
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
        {
          type: 'input',
          name: 'key',
          message: 'Enter your API Key: '.blue+"https://rapidapi.com/api-sports/api/covid-193",
          validate: isRequired 
        }
     ]);
    
    const key = keyManager.setKey(input.key);
    
    if(key){
      console.log("API Key Set".green);
    }

   },

   get(){
      try {
        const keyManager = new KeyManager();
        const key = keyManager.getKey();
        console.log("Current API Key: ".green, key.yellow);
        return key;
      }
      catch(err){
        console.error(err.message.red);
      }
   },

   remove(){
    try {
      const keyManager = new KeyManager();
      keyManager.removeKey();
      console.log("Key Removed ".green);
      return;
    }
    catch(err){
      console.error(err.message.red);
    }
   }
 }

 module.exports = key;