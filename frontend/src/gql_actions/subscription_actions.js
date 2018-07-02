import {
  NewPlayerSubscription,
  NewRoomSubscription,
  RemoveRoomSubscription,
  UpdateStatusSubscription,
  ReceivePromptsSubscription
} from '../gql/gql_subscription';

export const subscribeToNewPlayers = (query, code) => {
  query.subscribeToMore({
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

export const subscribeToNewRooms = (query) => {
  query.subscribeToMore({
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

      subscribeToNewPlayers(query, subscriptionData.data.createdRoom.code)

      return result;
    }
  })
}

export const subscribeToRemoveRooms = (query) => {
  query.subscribeToMore({
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


export const subscribeToRoomStatus = (query, code) => {
  query.subscribeToMore({
    document: UpdateStatusSubscription,
    variables: {
      code
    },
    updateQuery: (previous, { subscriptionData }) => {
      if (!subscriptionData.data) {
        return previous;
      }

      let newStatus = subscriptionData.data.updateStatus;

      let result = {
        ...previous,
        findRoom: {
          ...previous.findRoom,
          status: newStatus
        }
      }

      return result;

    }
  })
}

export const subscribeToReceivePrompts = (query, code, username) => {
  query.subscribeToMore({
    document: ReceivePromptsSubscription,
    variables: {
      code,
      username
    },
    updateQuery: (previous, { subscriptionData }) => {
      if (!subscriptionData.data) {
        return previous;
      }

      let newPrompts = subscriptionData.data.receivePrompts
      
      let result = {
        ...previous,
        retrievePlayerPrompts: newPrompts
      }

      // debugger;
      return result;

    }
  })
}