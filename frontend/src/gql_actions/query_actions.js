import {storage} from '../util/util'

export const findRoomOptions = () => {
  return {
    name: "findRoomQuery",
    options: ownProps => {
      let code;
      if (!ownProps.match) {
        code = storage().roomId;
      } else {
        code = ownProps.match.params.code;
      }
      return {
        variables: { code },
      }
    }
  }
};

export const retrievePromptsOptions = () => {
  return {
    name: "retrievePromptsQuery",
    options: ownProps => {
      return {
        variables: {
          code: storage().roomId,
          username: storage().username 
        }
      }
    }
  }
};

