#!/usr/bin/env node
const program = require("commander");
const pkg = require("../package.json");

program
.version(pkg.version)
.command("key","Manage API Key -- https://rapidapi.com/api-sports/api/covid-193")
.command("show","Show information about COVID-19 of a country")
.parse(process.argv)