## React with a mock db

An example of setting up a React app with a mock db.

## Steps to Create
 * <b>npx create-react-app name-of-app</b>
 * remove everything in <b>src</b> folder
 * <b>npm install json-server --save-dev</b>
 * <b>npm install npm-run-all --save-dev</b>  (this will allow you to run multiple scripts at the same time in <b>package.json</b>)
 * add <b>tools</b> folder
 * replace <b>mockData.js</b> in <b>tools</b> folder with data for your project
 * setup the scripts section in <b>package.json</b> for starting the client and the api
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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
