const program = require("commander");
const show = require('../commands/show');

program
.command('total')
.description('Check the total covid-19 statistic of a country')
.option('--country <type>', 'Add a specific country name','canada')
.action((cmd)=>show.total(cmd))

program.parse(process.argv);