import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//need to bind with component
import {graphql, compose} from 'react-apollo';

import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import { 
  RoomsQuery,
  FindRoomQuery
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


class Welcome extends Component {

  state = {
    username: "",
    code: "",
    subbed: false
  }

  // React Class Component functions

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

  render() {
    const {data: {loading, rooms}} = this.props;
    const {username, code} = this.state;
    
    if (loading) {
      return null;
    }

    return(

      <div style={{margin: '0 300px'}}>

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
              <ListItemText primary={`${room.code}: ${room.players.length} players`} />
              <button onClick={() => this.removeRoom(room)}>
                remove
              </button>
            </ListItem>
          ))}
        </List>

      </div>
    );
  }
  
  // Graphql Queries and helpers

  getRandomCode() {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let code = '';
    for (let i = 0; i < 4; i++) {
      code += alpha[Math.floor(Math.random() * alpha.length)];
    }
    // if (this.props.FindRoomQuery) return this.getRandomCode();
    return code;
  }

  createRoom = () => {
    let code = this.getRandomCode();

    if (!code) return null;
    
    this.props.createRoom({
      variables: {
        code
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

}

export default compose (
  graphql(FindRoomQuery),
  graphql(RoomsQuery),
  graphql(RoomsQuery, {name: "roomsQuery"}),
  graphql(CreateRoomMutation, {name: "createRoom"}),
  graphql(RemoveRoomMutation, {name: "removeRoom"}),
  graphql(AddPlayerMutation, {name: "addPlayer"}),
)(withRouter(Welcome));
