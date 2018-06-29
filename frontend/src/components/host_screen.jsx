import React from 'react';
import { withRouter } from 'react-router-dom';

class HostScreen extends React.Component {

  state = {
    answerCount: 0,
    currentRound: 1,
    clock: 60,
    promptPhase: true,
    votingPhase: false,
  }

  clock = () => {
    this.clock = setInterval(() => this.setState({
      clock: this.state.clock - 1
    }), 1000);
  }

  componentDidMount() {
    this.clock();
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  componentDidUpdate() {
    this.updateProgress();
  }

  updateProgress = () => {
    let { currentRound, clock, promptPhase, votingPhase } = this.state;

    if (clock === 0) {
      if (promptPhase) {
        this.enterVotingPhase();
      } 
      if (votingPhase) {
        this.enterPromptPhase();
      }
    }

    if (currentRound > this.props.options.numRounds) {
      console.log('all rounds end');
      
      //game summary
      console.log('score tally, decalre winner');

      //delete room subscription
      console.log('game over, delete room, back to lobby');

      this.props.history.push('/');
    }
  }

  enterVotingPhase = () => {    
    this.setState({
      clock: 15,
      promptPhase: false,
      votingPhase: true,
    });
  }

  playerAnswered = () => {
    let { answerCount, promptPhase } = this.state;
    if (!promptPhase) {
      return null;
    }

    this.setState({
      answerCount: answerCount + 1
    });
    
    if (answerCount >= this.props.options.players.length - 1) {
      this.enterVotingPhase();
    }
  }

  enterPromptPhase = () => {    
    this.setState({
      currentRound: this.state.currentRound + 1,
      clock: 60,
      answerCount: 0,
      promptPhase: true,
      votingPhase: false,
    })
  }

  playerVoted = () => {
    if (!this.state.votingPhase) {
      return null;
    }
    this.enterPromptPhase();
  }
  
  render() {
    let { answerCount, currentRound, clock, promptPhase } = this.state;
    
    return (
      <div>
        <h3>Current Round: {currentRound} / {this.props.options.numRounds} </h3>
        <h3>{`Answers Collected: ${answerCount} / ${this.props.options.players.length}`}</h3>
        <h3>{promptPhase ? 'Prompt Phase' : 'Vote Phase'}: {clock}s</h3>
        <button onClick={this.playerAnswered}>
          Player Answer
        </button>
        <button onClick={this.playerVoted}>
          Vote Finish
        </button>
        {this.props.options.showPlayers}
      </div>
    );
  }
}

export default withRouter(HostScreen);