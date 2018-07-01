import React from 'react';
import { withRouter } from 'react-router-dom';
//need to bind with component
import {graphql, compose} from 'react-apollo';

import { UpdateStatusMutation } from '../gql/gql_mutation';

class HostScreen extends React.Component {
  
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
      this.updateStatus({ timer: this.props.status.timer - 1 });
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
    let { 
      currentRound, 
      timer, 
      answerPhase,
      votePhase,
    } = this.props.status;

    if (timer === 0) {
      if (answerPhase) this.enterVotePhase();
      if (votePhase) this.enterAnswerPhase();
    }

    if (currentRound > this.props.numRounds) {
      this.updateStatus({ 
        gameOver: true, 
        gameStarted: false 
      });
      this.props.history.push('/');
    }
  }

  allVoted = () => {
    if (this.props.status.votePhase) {
      this.updateStatus({
        votePhase: false,
        answerPhase: true,
        currentRound: this.props.status.currentRound + 1,
        timer: 60,
      });
    }
  }

  allAnswered = () => {
    if (this.props.status.answerPhase) {
      this.updateStatus({
        answerPhase: false,
        votePhase: true,
        timer: 15,
      }); 
    }
  }
  
  render() {
    let {  
      currentRound, 
      timer,
    } = this.props.status;
    
    return (
      <div>
        <h3>Current Round: {currentRound} / {this.props.numRounds} </h3>
        <h3>Timer: {timer}s</h3>
        <button onClick={this.allAnswered}>
          All Answered
        </button>
        <button onClick={this.allVoted}>
          All Voted
        </button>
        {this.props.showPlayers}
      </div>
    );
  }
}

export default compose (
  graphql(UpdateStatusMutation, {name: 'updateStatus'}),
)(withRouter(HostScreen));
