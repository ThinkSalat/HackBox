//Will parse the query using gql
import gql from 'graphql-tag';

import {ROOM, PLAYER, STATUS} from './gql_types';

export const CreateRoomMutation = gql`
  mutation($code: String!, $numRounds: Int!, $gameType: String!) {
    createRoom(code: $code, numRounds: $numRounds, gameType: $gameType) {
      ${ROOM}
    }
  }
`;

export const AddPlayerMutation = gql`
  mutation($code: String!, $username: String!) {
    addPlayer(code: $code, username: $username) {
      ${PLAYER}
    }
  }
`;

export const RemoveRoomMutation = gql`
  mutation($id: ID!) {
    removeRoom(id: $id)
  }
`;

export const UpdateStatusMutation = gql`
  mutation($code: String!, $options: STATUS!) {
    updateStatus(code: $code, options: $options) {
      ${ROOM}
    }
  }
`;