
const getRandomCode = (props) => {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let code = '';
  for (let i = 0; i < 4; i++) {
    code += alpha[Math.floor(Math.random() * alpha.length)];
  }

  props.data.rooms.forEach((room) => {
    if (room.code === code) {
      getRandomCode(props);
    }
  })

  return code;
}

export const createRoom = (state, props) => {
  let code = getRandomCode(props);

  if (!code) return null;
  props.createRoom({
    variables: {
      code,
      numRounds: state.numRounds,
      gameType: state.gameType,
    }
  });
  localStorage.setItem('roomId', code)
  localStorage.setItem("isPlayer", false)
  localStorage.setItem("isHost", true)
  localStorage.setItem("inGame", true)
}



export const addPlayer = (ctx) => {
  let { code, username} = ctx.state;
  if (!code || !username) {
    return null;
  }
  
  const { rooms } = ctx.props.data;
  let room = rooms.find(room => room.code === code);
  if (!room) {
    ctx.setState({code: "", username: ""});
    return null;
  }
  for (let i = 0; i < room.players.length; i++) {
    if (room.players[i].username === username) {
      ctx.setState({
        error: "Username Taken",
        username: ""
      })
      return null;
    }
  }
  ctx.props.history.push(`/room/${code}`);

  ctx.props.addPlayer({
    variables: {
      code,
      username
    }
    
  }).then((player) =>  {
    localStorage.setItem("playerId", player.data.addPlayer.id);
    localStorage.setItem('roomId', code);
    localStorage.setItem("isPlayer", true);
    localStorage.setItem("isHost", false);
    localStorage.setItem("inGame", true);
  })

}


export const removeRoom = (props, room) => {
  props.removeRoom({
    variables: {
      id: room.id
    }
  })
}