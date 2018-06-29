import React from 'react';

import HostScreen from './host_screen';
import PlayerScreen from './player_screen';

export default class Game extends React.Component {

  render() {
    let { options } = this.props;

    return (
      <div>
        <br/>
        <HostScreen {...options} />
        <br/>
        <PlayerScreen {...options} />
        <br/>
      </div>
    )
  }
}