# OBS Overlay System + Dashboard

This application enables users to place the content of a React page to transparent webpage via OBS.

## Prerequisites

- React/ JavaScript
- OBS Studio (Mac, Windows, or Linux)
- Node 16.x+

## Project Overview

The `react-socket-client` folder is a React project running Vite that attempts to connect to a websockets server on load.

The `socket-server` contains the websockets server connects to.

While `react-socket-client` is running, navigating to the that the overlay uses to listen to incoming events that can then run on the React site.

## Running the overlay & websockets server

1. `git clone` the repo into a folder.
2. `cd` into the `socket-server` folder, run `npm i` to install dependencies, then run `node index.js` to start the server.
3. `cd` into the `react-socket-client` folder, run `npm i` to install dependencies, then run `npm run dev` to start the React project.

The overlay web page will be running on `localhost:5173`. The websockets server will be running on `localhost:3131`.

## Using the overlay

1. Add the `localhost:5173` URL to OBS as a browser source to the scene you intend to share. Make sure to set the width and height to 1920x1080.
2. Open the `localhost:5173/dashboard` URL in a browser. This will not be displayed in OBS. As long as the websockets server is running, the overlay will be able to receive events from the dashboard.
