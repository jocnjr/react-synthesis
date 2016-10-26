#!/usr/bin/env node
const co = require('co');
const prompt = require('co-prompt');
const program = require('commander');
const fs = require('fs');
const progressBar = require('progress');
const request = require('superagent');

console.log('welcome, hi there, we\'re team synthesis!');
console.log('run: syn <appName> or syn -h');
program
  .arguments('<app>')
  .action(function (app) {
    co(function *() {
      let appTitle = yield prompt('app title: ');
      let appDescription = yield prompt('app description: ');
      let email = yield prompt('email account: ');
      let password = yield prompt.password('password: ');
      let name = yield prompt('author\'s name: ');
      let newApp = {};

      newApp.title = appTitle;
      newApp.description = appDescription;
      newApp.user_id = '1001';  
      newApp.blog_id = '101';

      // creating the user
      let newUser = {};
      newUser.email = email;
      newUser.password = password;
      newUser.name = name;
      newUser.blog_id = '101';   

      console.log("...");
      console.log("... creating app");
      request
       .post('http://localhost:3000/api/blog')
       .set('Accept', 'application/json')
       .send(newApp)       
       .end(function (err, res) {
         if (err) {
          //  console.log(err.status);
           console.log('closing connection...');
           process.exit();
         } else {
          console.log("... OK... DONE");
         }
       });

      // posting user to the api
      console.log("...");
      console.log("... creating user");
      request
       .post('http://localhost:3000/api/user')
       .send(newUser)
       .set('Accept', 'application/json')
       .end(function (err, res) {
         if (err) {
           console.log('closing connection...');
           process.exit();
         } else {
          console.log("... OK... DONE");
         }         
       });
      // process.exit();    
    })
  })
  .parse(process.argv)
