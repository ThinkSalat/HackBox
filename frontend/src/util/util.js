import React from 'react';

export const showPlayers = (plyrs) => {
  let players = plyrs.map(player => {
    return (
      <li key={player.id}>
        <span role='img' aria-label='smiley'>😀</span>
        <span>{player.username} </span>
        <p>{player.score} pts</p>
      </li>
    );
  });
  
  return (
    <ul className='player-list'>{players}</ul>
  );
}