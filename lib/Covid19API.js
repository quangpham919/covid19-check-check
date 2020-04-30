const axios = require('axios');

 
class Covid19API{
  constructor(apiKey){
    this.apiKey= apiKey;
    this.url= 'https://covid-193.p.rapidapi.com/statistics';
  }

  async getInfoByCountry(country){
    try{
      const res = await axios.get(`${this.url}?country=${country}`,{headers: {'x-rapidapi-host':'covid-193.p.rapidapi.com', 'x-rapidapi-key':`${this.apiKey}`}})
      
      //  let output =  `Country: ${res.data.response.country}\n 
      //  New Cases: ${res.data.response.cases.new}\n
      //  Deaths:${res.data.response.deaths.total}\n
      //  Total: ${res.data.response.cases.total}\n
      //  Recovered:${res.data.response.cases.recovered}\n
      //  Date:${res.data.response.day}` ;
     
      
      
      return res.data.response;
    }
    catch(err){
      console.error(err);
    }
  }
}

module.exports = Covid19API;