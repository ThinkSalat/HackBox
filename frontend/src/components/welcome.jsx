import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//need to bind with component
import {graphql, compose} from 'react-apollo';

import TextField from '@material-ui/core/TextField';
// import Select from 'react-select';
// import 'react-select/dist/react-select.css';


import { 
  RoomsQuery
} from '../gql/gql_query';

import {
  CreateRoomMutation, 
  AddPlayerMutation,
  RemoveRoomMutation
} from '../gql/gql_mutation';
import {
  createRoom,
  addPlayer,
  removeRoom
} from '../gql_actions/mutation_actions';

import {
  subscribeToNewPlayers,
  subscribeToNewRooms,
  subscribeToRemoveRooms
} from '../gql_actions/subscription_actions';


const defaultGame = "Quiplash";
const defaultRounds = 3;

class Welcome extends Component {

  state = {
    username: "",
    code: "",
    subbed: false,
    gameType: defaultGame,
    numRounds: defaultRounds,
    error: "Username"
  }

  componentDidMount() {
    subscribeToNewRooms(this.props.roomsQuery);
    subscribeToRemoveRooms(this.props.roomsQuery);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== '/') {
      this.props.history.push('/');
    }

    if (nextProps.data.rooms && !this.state.subbed) {
      nextProps.data.rooms.forEach((rm) => {
        subscribeToNewPlayers(this.props.roomsQuery, rm.code)
      })

      this.setState({subbed: true});
    }
  }

  handleChange(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value.toUpperCase()
    });
  };

  render() {
    
    const {data: {loading, rooms}} = this.props;
    const {username, code} = this.state;
      
    
    if (loading) {
      return null;
    }
    
    return(

      <div className='lobby'>

        <br/>
        <button onClick={() => createRoom(this.state, this.props)}>Create Game</button>

        <TextField
          onChange={this.handleChange("code")}
          value={code}
          label="Room Code"
          inputProps={{ maxLength: 4 }}
          />
        <TextField
          onChange={this.handleChange("username")}
          value={username}
          label={this.state.error}
          inputProps={{ maxLength: 12 }}
        />

        <br/>
        <button onClick={() => addPlayer(this)}>Join Room</button>

        <ul className='room-list'>
          {rooms.map(room => (
            <div key={room.id}>
              <li onClick={() => addPlayer(this, room.code)}>
                {`${room.code}: ${room.players.length} players, ${room.gameType}, ${room.numRounds} rounds`}
              </li>
              <button onClick={() => removeRoom(this.props, room)}>
                remove
              </button>
            </div>
          ))}
        </ul>

      </div>
    );
  }
}

export default compose (
  graphql(RoomsQuery),
  graphql(RoomsQuery, {name: "roomsQuery"}),
  graphql(CreateRoomMutation, {name: "createRoom"}),
  graphql(RemoveRoomMutation, {name: "removeRoom"}),
  graphql(AddPlayerMutation, {name: "addPlayer"}),
)(withRouter(Welcome));
