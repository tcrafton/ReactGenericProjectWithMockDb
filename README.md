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
 * add a folder to the <b>src</b> folder name <b>api</b>
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



