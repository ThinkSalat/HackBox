import React from 'react';
import { withRouter } from 'react-router-dom';
//need to bind with component
import {graphql, compose} from 'react-apollo';

import { UpdateStatusMutation } from '../gql/gql_mutation';

import { FindRoomQuery } from '../gql/gql_query';
import { findRoomOptions } from '../gql_actions/query_actions';

import {
  subscribeToRoomStatus
} from '../gql_actions/subscription_actions';

class PlayerScreen extends React.Component {

  state = {
    answer: '',
    answered: false,
    voted: false,
    currentRound: 1,
    promptPhase: true,
    votingPhase: false,
  }

  componentDidMount() {
    // debugger;
    let {code} = this.props.match.params;
    subscribeToRoomStatus(this.props.findRoomQuery, code)
  }

  

  updateAnswer = e => {
    this.setState({ answer: e.currentTarget.value });
  }

  submit = field => {
    return e => this.setState({ [field]: true });
  }

  showPrompt = () => {
    let prompt = this.prompts.slice(-1)[0];
    if (this.state.currentRound <= this.room.numRounds) {

      return (
        <div>
          <h3>{prompt}</h3>
          <input 
            style={{fontSize: '20px'}} 
            placeholder='Your answer is...'
            onChange={this.updateAnswer}
            value={this.state.answer}
          />
          <button onClick={this.submit('answered')}>OK</button>
        </div>
      );
    }
  }

  waiting = () => {
    return (
      <h3>Sit back and relax.</h3>
    );
  }

  promptPhase = () => {
    return this.state.answered ? this.waiting() : this.showPrompt();
  }

  enterPromptPhase = () => {
    if (this.state.voted && this.state.currentRound < this.room.numRounds) {
      this.prompts.pop();

      this.setState({
        currentRound: this.state.currentRound + 1,
        answer: '',
        answered: false,
        voted: false, 
        promptPhase: true,
        votingPhase: false,
      });
    } 
  }

  enterVotingPhase = () => {
    if (this.state.answered) {
      this.setState({
        answered: false,
        promptPhase: false,
        votingPhase: true
      });
    } 
  }

  votingPhase = () => {
    return this.state.voted ? this.waiting() : this.voteAnswer();
  }

  voteAnswer = () => {
    return (
      <div>
        <h3>Which one is better?</h3>
        <button onClick={this.submit('voted')}>Answer A</button>
        <button onClick={this.submit('voted')}>Answer B</button>
      </div>
    );
  }

  updatePhase = () => {
    let { promptPhase, votingPhase } = this.state;
    if (promptPhase) {
      return this.promptPhase();
    }
    if (votingPhase) {
      return this.votingPhase();
    }
  }

  render() {

    this.room = this.props.findRoomQuery.findRoom;
    if (!this.room) {
      return null;
    }

    this.prompts = this.room.discard.map(card => card.prompt);

    // debugger;

    let { 
      // allResponsesReceived, 
      currentRound, 
      // gameOver, 
      timer, 
      // votingFinished 
    } = this.room.status;

    let { promptPhase } = this.state;

    return (
      <div>
        <h3>Timer: {timer}s</h3>
        <h3>Current Round: {currentRound} / {this.room.numRounds} </h3>
        <h3>{promptPhase ? 'Prompt Phase' : 'Vote Phase'}</h3>
        {this.updatePhase()}
        <button onClick={this.enterPromptPhase}>Prompt Phase</button>
        <button onClick={this.enterVotingPhase}>Vote Phase</button>
      </div>
    );
  }
}

export default compose (
  graphql(FindRoomQuery, findRoomOptions()),
  graphql(UpdateStatusMutation, {name: 'updateStatus'}),
)(withRouter(PlayerScreen));