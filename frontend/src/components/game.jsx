import React from 'react';

import HostScreen from './host_screen';
import PlayerScreen from './player_screen';

export default class Game extends React.Component {

  showScreen = () => {
    let { options } = this.props;

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
        <br/>
        {this.showScreen()}
        <br/>
      </div>
    )
  }
}