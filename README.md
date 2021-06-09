# Dolphinagram

Today you'll be building an app for viewing, liking, and commenting on a single picture of a Dolphin. You will be using a local API and building out the frontend for our app, Dolphinagram.


## Setup

- Fork and clone this repository
- Run `json-server --watch db.json --routes routes.json` to get the backend started
- Open the `index.html` file on your browser

## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints you will need are:

- GET `/dolphins/1`
- PATCH `/dolphins/1`

## Core Deliverables

As a user, I can:

- See the dolphin image received from the server, including its title, likes and comments when the page loads
- Click on the heart icon to increase the dolphin image's likes, and still see them when I reload the page
- Add a comment (no persistance needed)