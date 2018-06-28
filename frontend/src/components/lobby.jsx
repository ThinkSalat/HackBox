import React from 'react';
import { withRouter } from 'react-router-dom';
//need to bind with component
import {graphql, compose} from 'react-apollo';

import { 
  RoomsQuery
} from '../gql/gql_query';

import HostScreen from './host_screen';
import PlayerScreen from './player_screen';

class Lobby extends React.Component {

  state = {
    stage: 'waiting'
  }

  currentRoom = () => {
    const { rooms } = this.props.data;
    const { code } = this.props.match.params;
    return rooms.find(room => room.code === code);
  }

  roomPlayers = () => {
    let players = this.currentRoom().players.map(player => {
      return (
        <li key={player.id}>
          <span role='img' aria-label='smiley'>😀</span>
          <h3>{player.username}</h3>
          <p>Score: {player.score}</p>
        </li>
      );
    });
    return players;
  }

  waitingStage = () => {
    return (
      <div>
        <ul className='player-list'>{this.roomPlayers()}</ul>
        <button onClick={this.startGame}>
          Start Game
        </button>
      </div>
    );
  }

  gameStage = () => {
    return (
      <div>
        <br/>
        <HostScreen />
        <br/>
        <PlayerScreen />
      </div>
    );
  }

  leaveRoom = () => {
    this.props.history.push('/');
  }

  startGame = () => {
    this.setState({
      stage: 'game'
    })
  }

  render() {
    const {data: {loading}} = this.props;
    
    if (loading) {
      return null;
    }

    let currentRoom = this.currentRoom();
    // console.log(currentRoom);
    console.log(this.state);

    this.roomPlayers();

    return (
      <div className='single-room'>
        <h2>{currentRoom.gameType}</h2>
        <button onClick={this.leaveRoom}>
          Leave Room
        </button>
        {
          this.state.stage === 'waiting' ? this.waitingStage() : this.gameStage()
        }
      </div>
    );
  }
}

export default compose (
  graphql(RoomsQuery),
  graphql(RoomsQuery, {name: "roomsQuery"}),
)(withRouter(Lobby));