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
      // creating plugin directory and  config file
      createDirPluginSynthFile(pluginName, mountPoint);
      editServerFile(pluginName);          
      // process.exit();
    })
  })
  .parse(process.argv);
// console.log('it worked, feel safe to ctrl+C'); 

function createDirPluginSynthFile(dirName, mountPoint) {
    let path = './plugins/'+dirName;
    fs.mkdir(path, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('dir created');
        fs.readFile('./tpl-plugin/synth.js', 'utf8', function(err, fileContents) {
          if (err) throw err;
          console.log(typeof fileContents);
          fileContents = fileContents.replace(/%name%/i, dirName);
          fileContents = fileContents.replace(/%mount_point%/i, mountPoint);
          fs.writeFile(path + "/synth.js", fileContents, function(err) {
              if (err) {
                  console.log('error writing file', err);
              } else {
                  console.log('writing file succeeded');
              }
          });
        });
      }  
    });
}

function editServerFile(pluginName) {
    let pathServerFile = './server/server.js';
    let requireStr = '//%%begin%%\nconst '+pluginName+'Routes = require(\'./plugins/'+pluginName+'/server\');\nrequire(\'./plugins/'+pluginName+'/server/routes\')(app);'
    fs.readFile(pathServerFile, 'utf8', function(err, fileContents) {
      if (err) throw err;
      console.log(typeof fileContents);
      fileContents = fileContents.replace(/\/\/%%begin%%/i, requireStr);
      fs.writeFile(pathServerFile, fileContents, function(err) {
          if (err) {
              console.log('error writing file', err);
          } else {
              console.log('writing file succeeded');
          }
      });
    });
  }