#!/usr/bin/env node
const co = require('co');
const prompt = require('co-prompt');
const program = require('commander');
const fs = require('fs');
const progressBar = require('progress');
const request = require('superagent');

console.log('welcome, hi there, we\'re team synthesis!');
console.log('run: syn <blogName> or syn -h');
program
  .arguments('<blog>')
  .action(function (blog) {
    co(function *() {
      let blogTitle = yield prompt('blog title: ');
      let blogDescription = yield prompt('blog description: ');
      let email = yield prompt('email account: ');
      let password = yield prompt.password('password: ');
      let name = yield prompt('name: ');
      //console.log('user: %s and blog %s created!',
      //  email, blog);
      // process.exit();
      //creating the blog
      let newBlog = {};
      newBlog.title = blogTitle;
      newBlog.description = blogDescription;
      newBlog.user_id = '1001';  
      newBlog.blog_id = '101';
      // console.log('after newBlog obj', newBlog);


      // creating the user
      let newUser = {};
      newUser.email = email;
      newUser.password = password;
      newUser.name = name;
      newUser.blog_id = '101';   
      //console.log('after newUser');

      // http.get('http://localhost:3000/api/posts', (res) => {
      //   console.log(`Got response: ${res.statusCode}`);
      //   // consume response body
      //   res.resume();
      // }).on('error', (e) => {
      //   console.log(`Got error: ${e.message}`);
      // });
      // posting blog to the api
          // sendRequest function() {
          //   return new Promise((resolve,reject) => {
          //     console.log()


      // var fileSize = fs.statSync(blog).size;
      // var fileStream = fs.createReadStream(blog);
      // var barOpts = {
      //   width: 20,
      //   total: fileSize,
      //   clear: true
      // };
      // var bar = new ProgressBar(' uploading [:bar] :percent :etas', barOpts);

      // fileStream.on('data', function (chunk) {
      //   bar.tick(chunk.length);
      // });

      console.log("...");
      console.log("... creating blog");
      request
       .post('http://localhost:3000/api/blog')
       .set('Accept', 'application/json')
       .send(newBlog)       
       .end(function (err, res) {
         if (err) console.log(err);        
        //  var link = res.body.links.html.href;
        // console.log('blog created: %s', res.body, JSON.stringify(newBlog));
       });

      console.log("... OK... DONE");


      // posting user to the api
      console.log("...");
      console.log("... creating user");
      request
       .post('http://localhost:3000/api/user')
       .send(newUser)
       .set('Accept', 'application/json')
       .end(function (err, res) {
         if (err) console.log(err);
         //console.log('user created: %s', res.body, JSON.stringify(newUser));
       });

      console.log("... OK... DONE");
      // process.exit();    
    })
  })
  .parse(process.argv)
