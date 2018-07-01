import React from 'react';

import HostScreen from './host_screen';
import PlayerScreen from './player_screen';

export default class Game extends React.Component {

  showScreen = () => {
    let { options } = this.props;

    if (localStorage.roomId !== options.code) {
      return <h2>The game in this room has started.</h2>;
    }

    if (localStorage.isHost === 'true') {
      return <HostScreen {...options} />;
    }
    if (localStorage.isPlayer === 'true') {
      return <PlayerScreen {...options} />;
    }
  }

  render() {
    return (
      <div>
        {this.showScreen()}
      </div>
    )
  }
}