# HackBox

## Background and Overview

HackBox is a multiplayer party game platform inspired by JackBox to host games such as Apples to Apples and Cards Against Humanity. You can either create a new game from a list of premade games or join an existing game.

To begin a game, simply go to the **[live site](http://)** and select "New Game". You will be provided with a game code such as "HKGY", which will allow users to join your game. You join the game by going to the **[live site](http://)**, entering the room code and a username of your choice.

## Functionality & Minimum Viable Product
- [ ] Users can create rooms
- [ ] Users can join rooms
- [ ] Database contains prompt cards and response cards
- [ ] Game has skippable instructions that show how to play and use the services
- [ ] Platform has a lobby area where people join the game. Display game code and instructions on joining
- [ ] Game chooses a random prompt card and waits for 60 seconds or until everyone has chosen the card they're going to play
- [ ] After all players have selected a card/the timer has run down, the game flips over the cards and players get to select their favorite
- [ ] The game tallies up a score and at the end of a set number of rounds, the player with the highest score is the winner

#### Bonus Features

- [ ] Users can share media such as videos or songs, and media will be shared in round robin fashion allowing everyone to get a turn
- [ ] Interface with APIs: YouTube, Vimeo, (Other video service) Spotify, SoundCloud, BandCamp, Apple Music, Tidal
- [ ] Allow people to join in-progress game as observers who can’t play but can vote
- [ ] Port to React-Native
- [ ] Multiplayer timed GeoGuessr type game (uses Google Maps API)
- [ ] Create open source API for people to create extensions or other games for it


## Technologies & Technical Challenges
M-E-R-N stack 
MongoDB as DataBase 
GraphQL as API endpoint
GraphQL-Yoga as server
React and optionally React Native for frontend 

Other Tools:
GraphiQL - test your queries are working in browser
Mongoose - ORM for MongoDB - validations etc


## Design Documents


### Wireframes

## Group Members and Work Breakdown

**Shawn Salat**, **Qi Huang**, **Carey Johnson**, **Matthew Wojick**

### Monday 
 - Set up Yoga server on top of express/node server **Qi**
 - Set up GraphQL typeDefs (configure queries and models)  **Shawn** 
 - Set up GraphQL resolvers (configure what graphql query returns) **Matt**
 - Set up game lobby where players join game **Carey**
 - Configure session variables to keep players logged in and allow server to know what to send back **Shawn**
### Tuesday 
- Set up apollo & graphQL subscriptions (async functions) **Shawn, Carey**
- Set up React components **Matt, Qi**
### Wednesday
 - Set up Game Logic **Shawn, Qi, Matt, Carey**
### Thursday
 - Seed Database **Shawn**
 - Polish front-end **Qi, Matt**
 - Continue setting up game logic **Shawn, Carey**
### Friday
 - Continue setting up game logic **all**
### Saturday & Sunday  
 - Polish up rest of app, do bonus materials **all**
 - Hosting **Shawn, Carey**
 - Styling (Add sound effects, transitions and music)  **Matt & Qi**

## Accomplished over the Weekend


Get familiar with MERN stack, GraphQL/Apollo
Backend Skeleton Setup
Installed appropriate packages


NPM packages:

`npm init`

`npm install —save babel-cli babel-preset-env babel-watch express  graphql graphql-tools apollo-server-express`


files: 

`server.js - apollo/express/node`
`schema.js - typeDefs`
`resolver.js - configure what gets returned`


.babelrc = 
      `{
        "presets": ["env"]
      }`

package.json add
 `"scripts": {
    "dev": "babel-watch server.js"
  }`

server.js = 

    import express from 'express';
    import bodyParser from 'body-parser';
    import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
    import schema from './schema';
    
    const app = express();
    
    app.use('/graphiql', graphiqlExpress({
        endpointURL: '/graphql'
    }));
    
    app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

    app.listen(4000, () => console.log('Express server running on port 4000'));
