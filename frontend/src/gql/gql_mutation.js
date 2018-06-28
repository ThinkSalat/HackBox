//Will parse the query using gql
import gql from 'graphql-tag';

import {ROOM} from './gql_types';

export const CreateRoomMutation = gql`
  mutation($code: String!) {
    createRoom(code: $code) {
      ${ROOM}
    }
  }
`;

export const AddPlayerMutation = gql`
  mutation($code: String!, $username: String!) {
    addPlayer(code: $code, username: $username) {
      ${ROOM}
    }
  }
`;

export const RemoveRoomMutation = gql`
  mutation($id: ID!) {
    removeRoom(id: $id)
  }
`;