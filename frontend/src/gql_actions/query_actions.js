
export const findRoomOptions = (code) => {
  return {
    name: "findRoomQuery",
    options: ownProps => {
      code = code ? code : ownProps.match.params.code;
      return {
        variables: { code },
      }
    }
  }
};

