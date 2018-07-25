import React from 'react';

import {storage} from '../util/util'
import HostScreen from './host_screen';
import PlayerScreen from './player_screen';

import { withRouter } from 'react-router-dom';

class Game extends React.Component {

  showScreen = () => {
    // let { options } = this.props;

    if (storage().roomId !== this.props.match.params.code) {
      return <h2>The game in this room has started.</h2>;
    }

    if (storage().isHost === 'true') {
      return <HostScreen />;
    }
    if (storage().isPlayer === 'true') {
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