# iSiteWatch-React
iSiteWatch React application

### Site Urls

**Localhost**: `http://localhost:8080/iSiteWatch-React`

### FE Local Environment Set Up

*npm version*: **v3.10.3**  
*node version*: **v6.9.1**

### Clone the repository

Make sure you are checked out on the [iSiteWatch-React](https://github.com/karthi1987/iSiteWatch-React.git) branch before running the following!

Run `npm -v` and `node -v` to check to see if you're using the correct versions.  
Use nvm to download correct versions if necessary.

### Installation

Run `nvm install v6.9.1` and do `nvm use 6.9.1` to make sure you are installed right version.

Make sure webpack and gulp are installed globally for node version 6.9.
If they aren't:

This may require having admin access. You may have to run these commands as sudo.

`npm install -g webpack@1.13.3`  
`npm install --global gulp-cli`

Once webpack and gulp are setup globally. Open terminal:

`cd Your cloned path to the iSiteWatch-React project`

`npm install`

It will install all the dependencies, Once install is finished.

### Settings

Find `server.config.js` in root directory `iSiteWatch-React/`.

In `server.config.js`, `LOCAL_PATH` by default will be localhost and `PORT` will be 8080. Change these according to your local development needs.

Find `config.js` in root directory `iSiteWatch-React/js/`.

In `config.js`, update lines `3` and `5` to the following:

`const USE_MOCK_DATA = true;`

`const VZ_AJAX_POST_TYPE = 'GET';`

### Run the local express server:

`npm start`

In order to compile javascript using webpack, open a new tab and run:

`webpack --watch --progress -d -c`

If you need to compile scss in `app-src/assets`, open a new tab, and from `iSiteWatch-React/` run:

`gulp build`

You should be good to go. Access the app by going to:

`http://localhost:8080/iSiteWatch-React`

### For Prod deployment.

we have a `webpack.config.js` and a `webpack.prod.config.js` file. We need to run the production config after work on the react app and before we push any react changes. The command for that is `npm run prod`. or `npm run build`.
It will generate `app.js` and `app.min.js` files.

### To Test the component.

Run the command in terminal `npm run build-test` and `npm run test`, It will test all the test suites and generate the report, reports are visible at the terminal.
