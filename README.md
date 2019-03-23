# Notes Application

Simple application to view and edit notes

## Installation

    npm install

## Run

    npm start

This will run both the server and serve the website. The website utilizes webpack and utilizes hot loading. (JavaScript files are copied from `src` to `public` by Webpack.)

## Test

    npm run test

## Folder Structure

`server.js` Entry point for service.

`api` Server side API logic.

`src` Client side source files. By default running `npm run` will cause the JavaScript files in this directory to be transpiled and output to the `public` folder.

`public` This folder is used exclusively by Webpack.

### Additional Notes

Tested with node version 10.0.0
