import React from 'react';

export default class PlayerScreen extends React.Component {

  state = {
    currentRound: 0,
    roundOver: false,
    promptPhase: true,
    votingPhase: false,
  }

  render() {
    const { numRounds, deck, playerDeck, players } = this.props.options;
    const prompts = deck.map(card => card.prompt);
    console.log(prompts);
    

    return (
      <div>
        {
          
        }
      </div>
    );
  }
}