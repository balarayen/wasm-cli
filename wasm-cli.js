#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { exec } = require('child_process');

yargs(hideBin(process.argv))
  .command('new [projectname]', ' - Create a new Project', (commands) => {
    return commands
      .positional('projectname', {
        describe: 'Name of the new project',
        default: 'My Project'
      })
  }, 
  (argv) => {
    if (argv.verbose) console.info(`New project name : ${argv.projectname}`)

    console.log('Creating project...');

    exec('cmake --version', error => {
      if (error) {
          console.log('Error: cmake not found');
      }
      else {
          console.log('cmake found!');
      }
    });
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .strictCommands()
  .demandCommand(1)
  .parse();
