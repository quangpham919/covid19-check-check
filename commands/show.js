const KeyManager = require('../lib/KeyManager');
const Covid19API = require('../lib/Covid19API');
const colors = require('colors');

const show={
  async total(cmd){
      try{
          const keyManager =  new KeyManager();
          const key = keyManager.getKey();
          const api = new Covid19API(key);

          const stats = await api.getInfoByCountry(cmd.country);
          stats.forEach(data=>{
            console.log(`Country: ${colors.green(data.country)}
New Cases: ${colors.yellow(data.cases.new)}
Total Cases: ${colors.yellow(data.cases.total)}
Total Deaths: ${colors.red(data.deaths.total)}
Recovered: ${colors.green(data.cases.recovered)}
Date: ${colors.green(data.day)}`);
          })
      }
      catch(err){
          console.error(err.message.red);
      }
  }
}

module.exports = show;