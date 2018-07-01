
export const findRoomOptions = () => {
  return {
    name: "findRoomQuery",
    options: ownProps => {
      let code = localStorage.roomId;
      return {
        variables: { code },
      }
    }
  }
};

