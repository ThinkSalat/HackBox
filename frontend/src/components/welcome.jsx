import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';


//Will parse the query using gql
import gql from 'graphql-tag';
//need to bind with component
import {graphql, compose} from 'react-apollo';

const RoomsQuery = gql`{
  rooms {
    id
    code
    players {
      id
      username
      score
    }
  }
}
`;

const CreateRoomMutation = gql`
  mutation($code: String!) {
    createRoom(code: $code) {
      id
      code
      players {
        id
      }
    }
  }
`;

const AddPlayerMutation = gql`
  mutation($code: String!, $username: String!) {
    addPlayer(code: $code, username: $username) {
      id
      code
      players {
        id
        username
        score
      }
    }
  }
`;

const RemoveRoomMutation = gql`
  mutation($id: ID!) {
    removeRoom(id: $id)
  }
`;

const NewPlayerSubscription = gql`
  subscription onJoinedRoom($code: String!){
    joinedRoom(code: $code) {
      id
      code
      players {
        id
        username
        score
      }
    }
  }
`;

class Welcome extends Component {

  state = {
    username: "",
    code: ""
  }

  componentDidMount() {
    this.subscribeToNewPlayers("AAAA");
    
  }


  handleChange(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  };


  createRoom = async () => {

    // const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let ar = ['AAAA'];
    let code = ar[Math.floor(Math.random() * ar.length)];

    // for (let index = 0; index < 4; index++) {
    //   const element = array[index];
    // }
    // let code = "AAAA"


    await this.props.createRoom({
      variables: {
        code
      },
      update: (store, { data: { createRoom } }) => {
        // Read the data from our cache for this query.
        const data = store.readQuery({ query: RoomsQuery });
        // Add our comment from the mutation to the end.
        data.rooms.unshift(createRoom)
        // Write our data back to the cache.
        store.writeQuery({ query: RoomsQuery, data });
      }
    })
  }


  addPlayer = async () => {
    await this.props.addPlayer({
      variables: {
        code: this.state.code,
        username: this.state.username
      }
    })
  }

  removeRoom = async (room) => {
    await this.props.removeRoom({
      variables: {
        id: room.id
      },
      update: (store) => {
        // Read the data from our cache for this query.
        const data = store.readQuery({ query: RoomsQuery });
        // Add our comment from the mutation to the end.
        data.rooms = data.rooms.filter(x => x.id !== room.id)
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
        // debugger;
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


    // console.log(this.props.data.rooms[0].players)
    // console.log(this.props.data.rooms)
    // console.log(this.state);


    return(

      <div>

      <button onClick={this.createRoom}>Create Room</button>

      <TextField
        onChange={this.handleChange("username")}
        value={username}
        label="username"
        margin="normal"
      />

      <TextField
        onChange={this.handleChange("code")}
        value={code}
        label="code"
        margin="normal"
      />

      <button onClick={this.addPlayer}>Join Room</button>

      <List>
        {rooms.map(room => (
          <ListItem
          key={room.id}
          role={undefined}
          dense
          button
          >
          <ListItemText primary={`${room.code}: players: ${room.players.length}`} />
            <ListItemSecondaryAction>
              <button onClick={() => this.removeRoom(room)}>
                remove
              </button>
            </ListItemSecondaryAction>
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
