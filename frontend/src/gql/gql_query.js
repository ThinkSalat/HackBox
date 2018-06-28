//Will parse the query using gql
import gql from 'graphql-tag';

export const ROOM = `
  id
  code
  players {
    id
    username
    score
  }
`;

export const FindRoomQuery = gql`{
  findRoom(code: $code){
    code
  }
}`;

export const RoomsQuery = gql`{
  rooms {
    ${ROOM}
  }
}
`;





