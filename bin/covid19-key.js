const program = require("commander");
const key = require("../commands/key");
program
.command("set")
.description("Set the API key from -- https://rapidapi.com/api-sports/api/covid-193")
.action(key.set)

program
.command("get")
.description("Get the API key from -- https://rapidapi.com/api-sports/api/covid-193")
.action(key.get)

program
.command("remove")
.description("Remove the API key from -- https://rapidapi.com/api-sports/api/covid-193")
.action(key.remove)

program.parse(process.argv);