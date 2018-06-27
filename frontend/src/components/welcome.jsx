import React, { Component } from 'react';
//need to bind with component
import {graphql, compose} from 'react-apollo';

import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { 
  RoomsQuery,
  CreateRoomMutation, 
  AddPlayerMutation,
  RemoveRoomMutation,
  NewPlayerSubscription
} from './gql_query';


class Welcome extends Component {

  state = {
    username: "",
    code: "",
    subbed: false
  }

  // findRoomId(code) {
  //   this.props.data.rooms.forEach((room) => {
  //     if (room.code === code) {
  //       return room.id;
  //     }
  //   })
  //   return null;
  // }

  componentWillReceiveProps({data: {rooms}}) {
    console.log("receive props", rooms);

    if (rooms !== undefined && !this.state.subbed) {
      console.log("SUBBED")
      rooms.forEach((rm) => {
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

  getRandomCode() {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let code = '';
    for (let i = 0; i < 4; i++) {
      code += alpha[Math.floor(Math.random() * alpha.length)];
    }
    return code;
  }

  createRoom = async () => {
    let code = this.getRandomCode();

    if (!code) {
      return null;
    }
    
    await this.props.createRoom({
      variables: {
        code
      },
      update: (store, { data: { createRoom } }) => {
        // Read the data from our cache for this query.
        const data = store.readQuery({ query: RoomsQuery });
        data.rooms.unshift(createRoom);
        // Write our data back to the cache.
        store.writeQuery({ query: RoomsQuery, data });
      }
    });

    this.subscribeToNewPlayers(code)

    this.setState({code: ""});
  }

  addPlayer = async (code, username) => {
    await this.props.addPlayer({
      variables: {
        code,
        username
      }
    })
    // this.props.location.history.push(`/rooms/${code}`)
  }

  removeRoom = async (room) => {
    await this.props.removeRoom({
      variables: {
        id: room.id
      },
      update: (store) => {
        // Read the data from our cache for this query.
        const data = store.readQuery({ query: RoomsQuery });
        data.rooms = data.rooms.filter(x => x.id !== room.id);
        // Write our data back to the cache.
        store.writeQuery({ query: RoomsQuery, data });
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
}

export default compose (
  graphql(RoomsQuery),
  graphql(RoomsQuery, {name: "roomsQuery"}),
  graphql(CreateRoomMutation, {name: "createRoom"}),
  graphql(RemoveRoomMutation, {name: "removeRoom"}),
  graphql(AddPlayerMutation, {name: "addPlayer"}),
)(Welcome);
