import React from 'react';
import { withRouter } from 'react-router-dom';
//need to bind with component
import {graphql, compose} from 'react-apollo';

import { FindRoomQuery } from '../gql/gql_query';
import { findRoomOptions } from '../gql_actions/query_actions';

import { UpdateStatusMutation } from '../gql/gql_mutation';

import {
  NewPlayerSubscription,
  UpdateStatusSubscription
} from '../gql/gql_subscription';

import Game from './game';

class Lobby extends React.Component {

  componentDidMount() {
    let {code} = this.props.match.params;
    
    this.subscribeToNewPlayers(code)
    this.subscribeToRoomStatus(code)
  }

  subscribeToNewPlayers = (code) => {
    this.props.findRoomQuery.subscribeToMore({
      document: NewPlayerSubscription,
      variables: {
        code: code
      },
      updateQuery: (previous, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return previous;
        }
      }
    })
  }

  subscribeToRoomStatus = code => {
    this.props.findRoomQuery.subscribeToMore({
      document: UpdateStatusSubscription,
      variables: {
        code
      },
      updateQuery: (previous, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return previous;
        }
      }
    })
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

  showPlayers = () => {
    let players = this.room.players.map(player => {
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
  
  toggleStartButton = () => {
    if (this.room.players.length > 1) {
      return (
        <button onClick={this.startGame}>Start Game</button>
      )
    }
  }

  waitingStage = () => {
    return (
      <div>
        {this.showPlayers()}
        {this.toggleStartButton()}
      </div>
    );
  }

  gameStage = () => {
    let options = {
      ...this.room,
      showPlayers: this.showPlayers()
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
    this.updateStatus({gameStarted: true});
  }
  
  updateStage = () => {
    return this.room.status.gameStarted ? this.gameStage() : this.waitingStage()
  }

  render() {

    this.room = this.props.findRoomQuery.findRoom;
    if (!this.room) {
      return null;
    }

    // console.log(this.room);

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
