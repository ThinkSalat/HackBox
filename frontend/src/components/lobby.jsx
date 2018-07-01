import React from 'react';
import { withRouter } from 'react-router-dom';
//need to bind with component
import {graphql, compose} from 'react-apollo';

import { FindRoomQuery } from '../gql/gql_query';
import { findRoomOptions } from '../gql_actions/query_actions';

import { UpdateStatusMutation } from '../gql/gql_mutation';

import {
  subscribeToNewPlayers,
  subscribeToRoomStatus
} from '../gql_actions/subscription_actions';

import {
  showPlayers
} from '../util/util';

import Game from './game';
import Instructions from './instructions'


class Lobby extends React.Component {


  componentDidMount() {
    let {code} = this.props.match.params;
    subscribeToNewPlayers(this.props.findRoomQuery, code)
    subscribeToRoomStatus(this.props.findRoomQuery, code)
  }
  
  updateStatus = (options) => {
    let code = this.room.code;
    this.props.updateStatus({
      variables: {
        code,
        options
      }
    });
  }
  
  toggleStartButton = () => {
    if (localStorage.roomId !== this.room.code) {
      return null;
    }

    if (localStorage.isHost === 'true' && this.room.players.length > 1) {
      return (
        <button onClick={this.startGame}>Start Game</button>
      )
    }
  }

  toggleInstructions = () => {
    if (localStorage.roomId === this.room.code) {
      return <Instructions />;
    }
  }

  waitingStage = () => {
    return (
      <div>
        {this.toggleInstructions()}
        {showPlayers(this.room.players)}
        {this.toggleStartButton()}
      </div>
    );
  }

  gameStage = () => {
    return (
      <div>
        <Game />
      </div>
    );
  }

  leaveRoom = () => {
    this.props.history.push('/');
  }

  startGame = () => {
    this.updateStatus({
      gameStarted: true,
      answerPhase: true
    });
  }
  
  updateStage = () => {
    if (this.room.status.gameOver) {
      return <h2>The game in this room has ended.</h2>;
    }

    return this.room.status.gameStarted ? this.gameStage() : this.waitingStage()
  }

  render() {

    this.room = this.props.findRoomQuery.findRoom;

    if (!this.room) {
      return null;
    }

    return (
      <div className='single-room'>
        <h2>{this.room.gameType}</h2>
        <button onClick={this.leaveRoom}>Leave Room</button>
        {this.updateStage()}
      </div>
    );
  }
}

export default compose (
  graphql(FindRoomQuery, findRoomOptions()),
  graphql(UpdateStatusMutation, {name: 'updateStatus'}),
)(withRouter(Lobby));
