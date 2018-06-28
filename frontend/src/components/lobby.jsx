import React from 'react';
import { withRouter } from 'react-router-dom';
//need to bind with component
import {graphql, compose} from 'react-apollo';

import { 
  RoomsQuery
} from '../gql/gql_query';

class Lobby extends React.Component {

  leaveRoom = () => {
    this.props.history.push('/');
  }

  render() {
    const {data: {loading, rooms}} = this.props;
    
    if (loading) {
      return null;
    }

    const currentRoom = rooms.find(room => room.code === this.props.match.params.code);
    let roomPlayers = currentRoom.players.map(player => {
      return (
        <li key={player.id}>
          <span role='img' aria-label='smiley'>😀</span>
          <h3>{player.username}</h3>
          <p>Score: {player.score}</p>
        </li>
      );
    });

    return (
      <div className='single-room'>
        <h2>Hello</h2>
        <button onClick={this.leaveRoom}>
          Leave Room
        </button>
        <ul className='player-list'>{roomPlayers}</ul>
      </div>
    );
  }
}

export default compose (
  graphql(RoomsQuery),
  graphql(RoomsQuery, {name: "roomsQuery"}),
)(withRouter(Lobby));