# HackBox

### HackBox is a multiplayer party game inspired by Apples to Apples, JackBox and Cards Against Humanity. 

## Background and Overview

To begin a game, simply go to the **live site** and select "New Game". You will be provided with a game code such as "HKGY", which will allow users to join your game. You join the game by going to the **live site** and entering the room code, and a username of your choice.

## Funcionality & Minimum Viable Product
- [ ] Users can create games/rooms
- [ ] Database contains prompt cards and response cards
- [ ] Game has skippable instructions that show how to play and use the services
- [ ] Games have a lobby area where people join the game. Display game code and instructions on joining
- [ ] Game chooses a random prompt card and waits for 60 seconds or until every has chosen the card they're going to play
- [ ] After all players have selected a card/the timer has run down, the game flips over the cards and players get to select their favorite
- [ ] The game tallies up a score and at the end of a set number of rounds, the player with the highest score is the winner

#### Bonus Features

- [ ] Users can share media such as videos or songs, and media will be shared in round robin fashion allowing everyone to get a turn
- [ ] Interface with APIs: YouTube, Vimeo, (Other video service) Spotify, SoundCloud, BandCamp, Apple Music, Tidal
- [ ] Multiplayer timed GeoGuessr type game
- [ ] Uses Google Maps API
- [ ] Create open source API for people to create extensions or other games for it


## Technologies & Technical Challenges
M-E-R-N stack 
MongoDB as DataBase 
GraphQL as API endpoint
NodeJS / Express / Apollo Server
React and optionally ReactNative for frontend 

Other Tools:
GraphiQL - test your queries are working in browser
Mongoose - ORM for mongo - validations etc


## Design Documents


## Group Members and Work Breakdown

**Shawn Salat**, **Qui Huang**, **Carey Johnson**, **Matthew Wojick**

### Monday 
### Tuesday 
### Wednesday
### Thursday
### Friday
### Saturday 
### Sunday  

## Accomplished over the Weekend

### Backend Skeleton Setup

Set up Apollo server on top of express/node server


Set up GraphQL typeDefs (configure querys and models)


Set up graphQL resolvers (configure what graphql query returns)

Configure websockets or graphql subscriptions 


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
