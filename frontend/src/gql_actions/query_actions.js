
export const findRoomOptions = () => {
  return {
    name: "findRoomQuery",
    options: ownProps => {
      let code;
      if (!ownProps.match) {
        code = localStorage.roomId;
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
    options: {
      variables: {
        code: localStorage.roomId,
        username: localStorage.username 
      }
    }
  }
};

