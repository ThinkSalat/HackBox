import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//need to bind with component
import {graphql, compose} from 'react-apollo';

import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
  NewPlayerSubscription,
  NewRoomSubscription,
  RemoveRoomSubscription
} from '../gql/gql_subscription';

const defaultGame = "Quiplash";
const defaultRounds = 3;

class Welcome extends Component {

  state = {
    username: "",
    code: "",
    subbed: false,
    gameType: defaultGame,
    numRounds: defaultRounds
  }

  componentDidMount() {
    this.subscribeToNewRooms();
    this.subscribeToRemoveRooms();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== '/') {
      this.props.history.push('/');
    }

    if (nextProps.data.rooms && !this.state.subbed) {
      nextProps.data.rooms.forEach((rm) => {
        this.subscribeToNewPlayers(rm.code)
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

  getRandomCode() {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let code = '';
    for (let i = 0; i < 4; i++) {
      code += alpha[Math.floor(Math.random() * alpha.length)];
    }
    return code;
  }

  createRoom = () => {
    let code = this.getRandomCode();

    if (!code) {
      return null;
    }
    
    this.props.createRoom({
      variables: {
        code,
        numRounds: this.state.numRounds,
        gameType: this.state.gameType
      }
    });
  }

  addPlayer = () => {
    let { code, username } = this.state;
    if (!code || !username) {
      return null;
    }
    
    const { rooms } = this.props.data;
    let room = rooms.filter(room => room.code === code);
    if (!room.length) {
      this.setState({code: "", username: ""});
      return null;
    }

    this.props.history.push(`/room/${code}`);
    
    this.props.addPlayer({
      variables: {
        code,
        username
      }
    })
  }

  removeRoom = room => {
    this.props.removeRoom({
      variables: {
        id: room.id
      }
    })
  }

  subscribeToNewPlayers = (code) => {
    this.props.roomsQuery.subscribeToMore({
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

  subscribeToNewRooms = () => {
    this.props.roomsQuery.subscribeToMore({
      document: NewRoomSubscription,
      updateQuery: (previous, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return previous;
        }
        let newRooms = [ subscriptionData.data.createdRoom, ...previous.rooms];

        let result = {
          ...previous,
          rooms: newRooms
        }

        this.subscribeToNewPlayers(subscriptionData.data.createdRoom.code)

        return result;
      }
    })
  }

  subscribeToRemoveRooms = () => {
    this.props.roomsQuery.subscribeToMore({
      document: RemoveRoomSubscription,
      updateQuery: (previous, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return previous;
        }

        let newRooms = previous.rooms.filter((rm) => {
          return subscriptionData.data.removedRoom !== rm.id
        })

        let result = {
          ...previous,
          rooms: newRooms
        }

        return result;
      }
    })
  }

  render() {
    const {data: {loading, rooms}} = this.props;
    const {username, code, gameType, numRounds} = this.state;

    
    if (loading) {
      return null;
    }

    return(

      <div style={{margin: '0 100px'}}>

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

        <button onClick={this.createRoom}>Create Room</button>

        <br/>

        <TextField
          onChange={this.handleChange("code")}
          value={code}
          label="Room Code"
          inputProps={{ maxLength: 4 }}
          />
        <TextField
          onChange={this.handleChange("username")}
          value={username}
          label="Username"
          inputProps={{ maxLength: 12 }}
        />

        <button onClick={() => this.addPlayer(code, username)}>Join Room</button>

        <List>
          {rooms.map(room => (
            <ListItem
            key={room.id}
            role={undefined}
            dense
            button
            >
              <ListItemText primary={`${room.code}: ${room.players.length} players, ${room.gameType}, ${room.numRounds}r`} />
              <button onClick={() => this.removeRoom(room)}>
                remove
              </button>
            </ListItem>
          ))}
        </List>

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
