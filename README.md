# Dixit WEB UI
This is the web UI of an app that allows friends to play dixit online.

The React components and their hierarchy were originally developed in 2020 by [Eleni Mandilara](https://github.com/emandilara/dixit-web).
Then carolinux forked the project in 2021 and extended most of the existing components / hooked them to a brand new API which can be found at [Dixit API repo](https://github.com/carolinux/dixit-api).

## Get started

Before you run the application, you need to install the dependencies.
Please run the following commands in the root directory of the project.

### Installation

In order to install the project and download the necessary dependencies, go to the root folder and run

`npm install`

### Run the app

In order to run the project in the development mode, in the root folder run

`npm start`

Open [http://localhost:5000/game](http://localhost:5000/game) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### Build

To build the app for production to the `build` folder, please run:
`npm run build`

NB: This builds the app with the production url baked in.

This will correctly bundle React in production mode and optimize the build for the best performance.

The build is minified and the filenames include the hashes.

## Linter

This project uses ESLint following the AirBnB style guide.

## Node version

This project was created using Node version 12.0.0.
