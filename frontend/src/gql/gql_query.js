//Will parse the query using gql
import gql from 'graphql-tag';

import {ROOM} from './gql_types';

export const FindRoomQuery = gql`{
  findRoom(code: $code) {
    ${ROOM}
  }
}
`;

export const RoomsQuery = gql`{
  rooms {
    ${ROOM}
  }
}
`;


