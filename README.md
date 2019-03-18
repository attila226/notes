# Notes Application

Simple application to view and edit notes

## Installation

    npm install

## Run

    npm start

This will run both the server and serve the website. The website utilizes transpilation with Babel on start-up. (JavaScript files are copied from `src` to `public`.)

## Test

    npm run test

## Folder Structure

`index.js` Entry point for service.

`api` Server side API logic.

`src` Client side source files. By default running `npm run` will cause the JavaScript files in this directory to be transpiled and output to the `public` folder.

`public` The website files. The website is a single page application, with `index.html` being the entry point. Do not edit JavaScript files in this folder, but in `src` instead.

### Additional Notes

Tested with node version 10.0.0
