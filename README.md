## React with a mock db

An example of setting up a React app with a mock db.

## Steps for setting up the app to run with mock data
 * <b>npx create-react-app name-of-app</b>
 * remove everything in <b>src</b> folder
 * <b>npm install json-server --save-dev</b>
 * <b>npm install npm-run-all --save-dev</b>  (this will allow you to run multiple scripts at the same time in <b>package.json</b>)
 * add <b>tools</b> folder
 * replace <b>mockData.js</b> in <b>tools</b> folder with data for your project
 * setup the scripts section in <b>package.json</b> for starting the client, api and creating the mock data
```  
  "scripts": {
    "start": "run-p start:dev start:api",
    "start:dev": "react-scripts start",
    "prestart:api": "node tools/createMockDb.js",
    "start:api": "node tools/apiServer.js",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

## Steps for api setup
 * add a folder to the <b>src</b> folder named <b>api</b>
 * <b>apiConfig.js</b> for the base url
 * <b>apiUtil.js</b> for handling responses/errors in api calls
 * add file for making api calls (<b>bookApi.js</b> in this project)
 
## Steps for creating components to show a list:
* add <b>index.js</b> file as entry point to application
* add <b>components</b> folder
* add <b>App.js</b> to components folder
* add <b>books</b> folder to <b>components</b> folder
* add <b>BookList.js</b> to <b>books</b> folder
* use Hooks <b>useState</b> and <b>useEffect</b> to call book api for getting books


## Run the project
* <b>npm start</b>  (this will start the client, the api server and create the mock data)

## Notes
* Mock data is refreshed each time <b>npm start</b> is ran
* To simulate a delay on network requests, in <b>apiServer.js</b> comment out next() and uncomment setTimeout(next, 2000)
  ```
  server.use(function (req, res, next) {
  next();
  // setTimeout(next, 2000);
});
  ```
  
* For additional information, check out Cory House's Pluralsight course [Building Applications with React and Redux](https://www.pluralsight.com/courses/react-redux-react-router-es6), a fantastic course with a MUCH better explanation of this and additional processes for creating React applications.
