# Props and State

## Questions

- Does a deployed React application require a server?
  - No, React creates all the files needed to run on its own.
- Why do we prefer to test a React application at the behavior level rather than the unit level?
  - Because behavior more closely resembles and tests what will occur when a user is interaction with the app. 
- What does npm run build do?
  - This creates all the files necessary for a React app to actually work in a browser. Without it, React can not talk to a browser and your app will not work.
- Describe the actual composition / architecture of a React application.
  - React uses index.js as the entry point along with index.js
  - Every page is essentially rendered inside of the index.html page
  - Other JavaScript files are built as components and then imported into individual pages where needed.

## Vocab

- *BDD* - Behavior Driven Development which looks at the desired behavoir of the user when they are interacting with the app
- *Acceptance Tests* - these are the tests that we create to determine if the app has met the criteria needed to be deployed
- *mounting* - ?
- *build* - bringing together all the parts and pieces needed to complete a project.

[Back to Read Me](../README.md)
