# Synthesis

Synthesis is an open-source content mangement framework built for the modern web with React, Redux, Express, and Mongo. It is designed to be pragmatic and extensible, so it's easy to create new features and plugins around Synthesis.

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation
```
git clone https://github.com/synthesis-js/react-synthesis.git

cd react-synthesis-master

npm install
```

Next create a file in the root directory, titled config.js. This file will hold the url to your mongo database as we as your secret key for password hashing. 

We use mongo labs for a simple remote database https://mlab.com/.

Your session secret should be a string.

```
// config.js
const sessionSecret = "hashSecret";
const serverConfig = 'mongodb://database.url';

module.exports = { sessionSecret, serverConfig };
```

Next run the webpack build command to compile our react components.
```
npm run build
```

For local development, start up the react devolopment server and navigate to http://localhost:7700/
```
npm run dev:hot
```

Then start up the express server
```
npm start
```

If no users have been created you will be redirect to the sign-up page to create the admin user.
	

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Describe and show how to run the tests with code examples.

## Pull Requests

We'd love your help making Synthesis better! Feel free to create issues or pull requests to start discussions.

## Feature Requests / Plugin ideas

Have an idea for a package or a feature you'd love to see in Synthesis? Check out our site Idea board to contribute your thoughts and vote on existing ideas.

## License

Synhesis is <a href="https://github.com/synthesis-js/synthesis/blob/master/LICENSE" >MIT licenced</a>
