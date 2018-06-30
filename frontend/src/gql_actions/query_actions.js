
export const findRoomOptions = () => {
  return {
    name: "findRoomQuery",
    options: ownProps => {
      let code = ownProps.match.params.code;
      return {
        variables: { code },
      }
    }
  }
};

