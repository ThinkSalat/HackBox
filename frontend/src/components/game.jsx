import React from 'react';

import HostScreen from './host_screen';
import PlayerScreen from './player_screen';

import { withRouter } from 'react-router-dom';

class Game extends React.Component {

  showScreen = () => {
    // let { options } = this.props;

    if (localStorage.roomId !== this.props.match.params.code) {
      return <h2>The game in this room has started.</h2>;
    }

    if (localStorage.isHost === 'true') {
      return <HostScreen />;
    }
    if (localStorage.isPlayer === 'true') {
      return <PlayerScreen />;
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

export default withRouter(Game);