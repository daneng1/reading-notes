# Node.js

### What is Node and how do I use it?

*According to Stack Overflow:*
> Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google’s V8 JavaScript engine and libuv library.

- Lets start wth the V8 Engine
  - it is an open source JavaScript engine the runs in Googel Chrome browsers. It was designed for performance and complies JS directly to native machine code that your computer can execute.
  - Node doesn't execute in the browser though, it exectutes JS runtime.

- Installing Node
  - `node -v` to check if you have node already installed and if so, show which version.
  -  `npm -v` to see if you have NPM installed, which is a package manager and is used to install many componnents needed to run JavaScript.
  - you can install Node either locally or globally, meaning globally will be installed for all projects whereas locally will only be installed for one project.
  #### Global Install  
  - `npm install -g jshint`
    - This will install the jshint package globally on your system. We can use it to lint the index.js file from the previous example:

  - `jshint index.js`
    - You should now see a number of ES6-related errors. If you want to fix them up, add /* jshint esversion: 6 */ to the top of the index.js file, re-run the command and linting should pass.
  #### Local Install
  - `npm init -y`
    - This will create and auto-populate a package.json file in the same folder. Next, use npm to install the lodash package and save it as a project dependency:

  - `npm install lodash --save`

### What Is Node.js Used For?

- Now that we know what Node and npm are and how to install them, we can turn our attention to the first of their common uses: installing (via npm) and running (via Node) various build tools — designed to automate the process of developing a modern JavaScript application.

- These build tools come in all shapes and sizes, and you won’t get far in a modern JavaScript landscape without bumping into them. They can be used for anything from bundling your JavaScript files and dependencies into static assets, to running tests, or automatic code linting and style checking.


### Node.js Lets Us Run JavaScript on the Server

- Running JavaScript on the server is one of the biggest benefits of using Node.js. Node now plays a critical role in the technology stack of many high-profile companies.

#### Node.js Execution Model

- When connecting to a traditional Apache server, it will spawn a new thread to handle the request.
- Any subsequent requests block the execution of your code until the operation has completed.
- That blocks the server from processing new requests and must spawn new threads. This is inefficient and can casue the system to be slow or crash the site.
- Node. js is single threaded and event driven, which means that everything that happens in Node is a response to an event. 
- Instead of blocking new requests, it will register a callback before continuing to the next operation.

[Back to Read Me](../README.md)