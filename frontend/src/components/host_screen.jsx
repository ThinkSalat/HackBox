import React from 'react';
import { withRouter } from 'react-router-dom';
//need to bind with component
import {graphql, compose} from 'react-apollo';

import { UpdateStatusMutation } from '../gql/gql_mutation';

class HostScreen extends React.Component {

  state = {
    answerCount: 0,
    promptPhase: true,
    votingPhase: false,
  }
  
  updateStatus = (options) => {
    let code = this.props.code;
    this.props.updateStatus({
      variables: {
        code,
        options
      }
    });
  }

  clock = () => {
    this.clock = setInterval(() => {
      this.updateStatus({
        gameStarted: true,
        currentRound: this.props.status.currentRound + 1,
        timer: this.props.status.timer - 1
      });
    }, 1000);
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

    if (currentRound > this.props.numRounds) {
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
    
    if (answerCount >= this.props.players.length - 1) {
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
    let { 
      // allResponsesReceived, 
      currentRound, 
      // gameOver, 
      timer, 
      // votingFinished 
    } = this.props.status;
    
    return (
      <div>
        <h3>Current Round: {currentRound} / {this.props.numRounds} </h3>
        <h3>{`Answers Collected: ${this.state.answerCount} / ${this.props.players.length}`}</h3>
        <h3>Timer: {timer}s</h3>
        <button onClick={this.playerAnswered}>
          Player Answer
        </button>
        <button onClick={this.playerVoted}>
          Vote Finish
        </button>
        {this.props.showPlayers}
      </div>
    );
  }
}

export default compose (
  graphql(UpdateStatusMutation, {name: 'updateStatus'}),
)(withRouter(HostScreen));
