import React from 'react';
import { withRouter } from 'react-router-dom';
//need to bind with component
import {graphql, compose} from 'react-apollo';

import { FindRoomQuery } from '../gql/gql_query';
import { findRoomOptions } from '../gql_actions/query_actions';

import {
  NewPlayerSubscription,
  UpdateStatusSubscription
} from '../gql/gql_subscription';

import Game from './game';

class Lobby extends React.Component {

  state = {
    gameStarted: false
  }

  componentDidMount() {
    let {code} = this.props.match.params;
    
    this.subscribeToNewPlayers(code)
    this.subscribeToRoomStatus(code, {
      currentRound: 1,
      status: 'Lobby',
      gameOver: false,
      gameStarted: false,
      votingFinished: false,
      allResponsesReceived: false,
      timer: 60
    })
  }

  showPlayers = room => {
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

  subscribeToRoomStatus = (code, options) => {
    this.props.findRoomQuery.subscribeToMore({
      document: UpdateStatusSubscription,
      variables: {
        code,
        options
      },
      updateQuery: (previous, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return previous;
        }
      }
    })
  }

  render() {

    let room = this.props.findRoomQuery.findRoom;
    // debugger;
    if (!room) {
      return null;
    }

    // console.log(room);


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
  graphql(FindRoomQuery, findRoomOptions()),
)(withRouter(Lobby));