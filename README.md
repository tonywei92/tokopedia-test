# [Tokopedia] Software Engineer Mobile Web Test

This exercise is designed to demonstrate my web development skills. A simple application that given a number of rupiahs will calculate the minimum number of rupiahs needed to make that amount. 

## Screenshot
![alt text](https://raw.githubusercontent.com/tonywei92/tokopedia-test/master/screenshot.png)


## Demo
https://powerful-wildwood-64727.herokuapp.com/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Install NPM required packages

```
$ npm install
```

### Running

Only two steps to run this web app

Run development server

```
$ npm run start
```

Open http://localhost:{port}, which the port is printed on console, example:

```
The server listening on port 5000!
```
Then the address is http://localhost:5000

That all, you're good to go!

## Running the tests

The test package used for testing this web app is `jest`

Enter this command to run tests.

```
$ npm run test
```

## Deployment

To run server:
```
$ npm run start
```

To run watch (development mode):
```
$ npm run watch
```

To run production mode (minified js and css):
```
$ npm run prod
```

## Built With

* [VueJS](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [VueRouter](https://router.vuejs.org/) - Vue Web Router
* [Webpack](https://webpack.js.org/) - Used to generate Compile ES6 code and process scss


## Authors

* **Tony Song** - *Initial work* - [GitHub](https://github.com/tonywei92)

## Acknowledgments

* PostCSS and Autoprefixer is used to help prefix CSS vendor
* Tippy.JS used for Popup
* XRegExp.js used for named regular expression 
* Accounting.js used to format currency beautifully 
