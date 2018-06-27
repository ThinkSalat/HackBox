//Will parse the query using gql
import gql from 'graphql-tag';


export const RoomsQuery = gql`{
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

export const CreateRoomMutation = gql`
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

export const AddPlayerMutation = gql`
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

export const RemoveRoomMutation = gql`
  mutation($id: ID!) {
    removeRoom(id: $id)
  }
`;

export const NewPlayerSubscription = gql`
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

export const NewRoomSubscription = gql`
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