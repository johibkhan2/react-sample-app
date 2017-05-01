# react bootstrap sample app

## Installing and Running

To start, make sure you're in the `react-sample-app` folder in command-line.



#install the gulp globally

npm install -g gulp

# Install Node Modules
npm install

# Start the Server . you can use 'npm start' to start the app
gulp

# If you want to edit the react code, this rebuilds
gulp watch


The server will be available at localhost:3000

If you want to edit the React code, you'll have to re-build the `public/js/bundle.js` file with Webpack. You'll probably want to open a new terminal tab so you can keep your server running. To rebuild with Webpack, type:


gulp watch



## JSON Server

we will use __JSON Server__ to give us the feel of having a real database. It will need to run on a different port from our Node server though, so it runs on _localhost:3001_.

Launching the Node server with `gulp` now also launches JSON Server.

They have [great documentation](https://github.com/typicode/json-server) if you want to learn more about how it works, but in short, they create a RESTful API for us to `GET`, `POST`, `PUT`, and `DELETE` to. In this guide, we can use those HTTP verbs on the `/actions` path as follows:

A `GET` request to _localhost:3001/companies will return a JSON array which resembles:



## Organization

The `/app/components` folder is now organized by:

- containers
- layouts
- views

This was just the simplest way to organize this small codebase. I make no claims that this is amazing organization :)


## Search Layout

The main purpose of the Search Layout component was to convey nested layouts in the first tutorial. It doesn't yet serve us any in the Container Components tutorial to utilize it. Therefore, it just has some static information which is not yet hooked up to state. In the third guide, we will make this information more meaningful.


## Axios

As discussed in the tutorial, we use [axios](https://github.com/mzabriskie/axios) for our Ajax (XHR) requests. However, the components don't make XHR requests directly from their `componentDidMount()` methods as the tutorial showed. Instead, all database API requests exist in the `/app/api` folder. The `componentDidMount()` methods will use those outside files for XHR requests. This just helps keep the component size down and helps them to look cleaner.


## ES6 Arrow Functions

ES6 arrow functions are very popular in React tutorials online. While the CSS-Tricks tutorial doesn't use ES6 features, the code at this guide will. Here's a brief explanation of how they work:

```js
// Old way with ES5
 companyAPI.getCompanies().then(companies => {
            this.setState({companies: companies})
        });


