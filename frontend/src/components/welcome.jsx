import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//need to bind with component
import {graphql, compose} from 'react-apollo';

import TextField from '@material-ui/core/TextField';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


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

  handleGameSelect = (gameType) => {
    let val = defaultGame;
    if (gameType !== null) {
      val = gameType.value;
    }
    this.setState({ gameType: val });
  }

  handleRoundsSelect = (numRounds) => {
    let val = defaultRounds;
    if (numRounds !== null) {
      val = numRounds.value;
    }
    this.setState({ numRounds: val });
  }

  render() {

    const {data: {loading, rooms}} = this.props;
    const {username, code, gameType, numRounds} = this.state;
      
    
    if (loading) {
      return null;
    }
    
    return(

      <div className='lobby'>

        <div className='room-option'>
          <Select
            className="select-game"
            value={gameType}
            clearable={false}
            onChange={this.handleGameSelect}
            options={[
              { value: 'Quiplash', label: 'Quiplash' },
              { value: 'A2A', label: 'Apples to Apples' },
              { value: 'CAH', label: 'Cards Against Humanity' },
            ]}
          />

          <Select
            className="select-rounds"
            value={numRounds}
            clearable={false}
            onChange={this.handleRoundsSelect}
            options={[
              { value: 1, label: '1' },
              { value: 2, label: '2' },
              { value: 3, label: '3' },
              { value: 4, label: '4' },
              { value: 5, label: '5' },
            ]}
          />
        </div>

        <br/>
        <button onClick={() => createRoom(this.state, this.props)}>Create Room</button>

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
              <li onClick={() => this.props.history.push(`/room/${room.code}`)}>
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
