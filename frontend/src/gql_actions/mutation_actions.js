import {storage} from '../util/util'

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

export const createRoom = async (state, props) => {
  let code = getRandomCode(props);

  if (!code) return null;
  await props.createRoom({
    variables: {
      code,
      numRounds: state.numRounds,
      gameType: state.gameType,
    }
  });
  storage().setItem('roomId', code)
  storage().setItem("isPlayer", false)
  storage().setItem("isHost", true)
  storage().setItem("inGame", true)

  props.history.push(`room/${code}`)
}



export const addPlayer = (ctx, roomCode) => {
  let {username} = ctx.state;
  let code = roomCode ? roomCode : ctx.state.code;
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
    storage().setItem("playerId", player.data.addPlayer.id);
    storage().setItem("username", player.data.addPlayer.username);
    storage().setItem('roomId', code);
    storage().setItem("isPlayer", true);
    storage().setItem("isHost", false);
    storage().setItem("inGame", true);
  })

}


export const removeRoom = (props, room) => {
  props.removeRoom({
    variables: {
      id: room.id
    }
  })
}

export const updateStatus = (props, code, options) => {
  props.updateStatus({
    variables: {
      code,
      options
    }
  });
}