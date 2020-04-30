const Configstore = require("configstore");
const pkg  = require('../package.json');

class Key {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key){
    this.conf.set('apiKey',key);
    return key;
  }

  getKey(){
    const key = this.conf.get('apiKey');
    
    if(!key){
      throw new Error("No API Key found!! -- Get a key from https://rapidapi.com/collection/coronavirus-covid-19 -- You need to register for a account to get the key")
    }

    return key;
  }

  removeKey(){
    const key = this.conf.get('apiKey');
    
    if(!key){
      throw new Error(" Cannot delete, No API Key found!!");
    }

    this.conf.delete('apiKey');
    return;
  }
}

module.exports = Key;