import React from 'react';
// import { withRouter } from 'react-router-dom';

export default class PlayerScreen extends React.Component {

  state = {
    answer: '',
    currentRound: 1,
    promptPhase: true,
    votingPhase: false,
  }

  render() {
    const { numRounds, deck, playerDeck, players } = this.props;
    const prompts = deck.map(card => card.prompt);

    return (
      <div>
        player screen
      </div>
    );
  }
}