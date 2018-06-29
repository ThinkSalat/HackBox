import React from 'react';
import { withRouter } from 'react-router-dom';
//need to bind with component
import {graphql, compose} from 'react-apollo';

import { 
  RoomsQuery
} from '../gql/gql_query';

import Game from './game';

class Lobby extends React.Component {

  state = {
    gameStarted: false
  }

  getCurrentRoom = () => {
    const { rooms } = this.props.data;
    let room = rooms.find(room => room.code === this.props.match.params.code);
    return room;
  }

  showPlayers = room => {
    if (!room) {
      return null;
    }
    
    let players = room.players.map(player => {
      return (
        <li key={player.id}>
          <span role='img' aria-label='smiley'>😀</span>
          <span>{player.username} </span>
          <p>{player.score} pts</p>
        </li>
      );
    });
    
    return (
      <ul className='player-list'>{players}</ul>
    );
  }

  waitingStage = room => {
    return (
      <div>
        {this.showPlayers(room)}
        {this.toggleStartButton(room)}
      </div>
    );
  }

  gameStage = room => {
    let options = {
      ...room,
      showPlayers: this.showPlayers(room)
    };

    return (
      <div>
        <Game options={options}/>
      </div>
    );
  }

  leaveRoom = () => {
    this.props.history.push('/');
  }

  startGame = () => {
    this.setState({ gameStarted: true })
  }

  toggleStartButton = room => {
    if (room.players.length > 1) {
      return (
        <button onClick={this.startGame}>Start Game</button>
      )
    }
  }

  updateStage = room => {
    return this.state.gameStarted ? this.gameStage(room) : this.waitingStage(room)
  }

  render() {
    const { loading } = this.props.data;
    if (loading) {
      return null;
    }

    let room = this.getCurrentRoom();
    // console.log(room);
    
    this.showPlayers();

    return (
      <div className='single-room'>
        <h2>{room.gameType}</h2>
        <button onClick={this.leaveRoom}>Leave Room</button>
        {this.updateStage(room)}
      </div>
    );
  }
}

export default compose (
  graphql(RoomsQuery),
  graphql(RoomsQuery, {name: "roomsQuery"}),
)(withRouter(Lobby));