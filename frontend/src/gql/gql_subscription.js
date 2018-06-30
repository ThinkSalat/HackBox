//Will parse the query using gql
import gql from 'graphql-tag';

import {ROOM, STATUS} from './gql_types';

export const NewPlayerSubscription = gql`
  subscription onJoinedRoom($code: String!){
    joinedRoom(code: $code) {
      ${ROOM}
    }
  }
`;

export const NewRoomSubscription = gql`
  subscription onCreatedRoom {
    createdRoom {
      ${ROOM}
    }
  }
`;

export const RemoveRoomSubscription = gql`
  subscription onRemovedRoom {
    removedRoom
  }
`;

export const UpdateStatusSubscription = gql`
  subscription onUpdateStatus($code: String!) {
    updateStatus(code: $code) {
      ${STATUS}
    }
  }
`;