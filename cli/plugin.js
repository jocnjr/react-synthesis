#!/usr/bin/env node
const co = require('co');
const prompt = require('co-prompt');
const program = require('commander');
const fs = require('fs');
const request = require('superagent');

console.log('welcome, let\'s create some plugins!');
console.log('run: syn-plugin <pluginName> or syn-plugin -h');
program
  .arguments('<pluginName>')
  .action(function (pluginName) {
    co(function *() {
      let mountPoint= yield prompt('mount point -> dashboard, post-feed or post-view: ');      
      let description = yield prompt('plugin description: ');
      console.log(mountPoint, description, pluginName);
      createDir(pluginName);    
      // process.exit();    
    })
  })
  .parse(process.argv)

function createDir(dirName) {
    let path = './plugins/'+dirName;
    fs.mkdir(path, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('dir created');
        let pluginTemplate = fs.readFile('./plugins/plugin.synth.js', 'utf8', function(err) {
          if (err) throw err;
        });
        fs.writeFile(path + "/plugin.synth.js", pluginTemplate, function(err) {
            if (err) {
                console.log('error writing file', err);
            } else {
                console.log('writing file succeeded');
            }
        });        
      }  
    });
}