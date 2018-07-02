//Will parse the query using gql
import gql from 'graphql-tag';

import {ROOM, PLAYER, CARD, RESPONSE, ANSWER} from './gql_types';

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
  mutation($code: String!, $options: StatusOptions!) {
    updateStatus(code: $code, options: $options) {
      ${ROOM}
    }
  }
`;

export const RetrieveAndAssignPromptsMutation = gql`
  mutation($code: String!, $cardType: String!) {
    retrieveAndAssignPrompts(code: $code, cardType: $cardType) {
      ${RESPONSE}
    }
  }
`;

export const AddAnswerToResponseMutation = gql`
  mutation($responseId: String!, $code: String!, $username: String!, $answers: [String!]) {
    addAnswerToResponse(responseId: $responseId, code: $code, username: $username, answers: $answers) {
      ${RESPONSE}
    }
  }
`;

export const AddVoteToAnswerMutation = gql`
  mutation($code: String!, $username: String!, $answerId: String!, $responseId: String!) {
    addVoteToAnswer(code: $code, username: $username, answerId: $answerId, responseId: $responseId) {
      ${ANSWER}
    }
  }
`;

