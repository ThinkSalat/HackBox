import React from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';

import { FindRoomQuery } from '../gql/gql_query';
import { findRoomOptions } from '../gql_actions/query_actions';
import { updateStatus } from '../gql_actions/mutation_actions';

import { subscribeToRoomStatus } from '../gql_actions/subscription_actions';

import { 
  UpdateStatusMutation,
  RetrieveAndAssignPromptsMutation,
} from '../gql/gql_mutation';

import { showPlayers } from '../util/util';

class HostScreen extends React.Component {
  
  componentDidMount() {
    this.clock();
    let {code} = this.props.match.params;
    subscribeToRoomStatus(this.props.findRoomQuery, code);

    if (!this.room.prompts.length) {
      this.retrieveAndAssignPrompts();
    }
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  componentDidUpdate = (prev) => {
    this.updateProgress();
  }

  retrieveAndAssignPrompts = () => {
    let { code, gameType } = this.room;
    let cardType = gameType;
    this.props.retrieveAndAssignPrompts({
      variables: {
        code,
        cardType
      }
    });
  }

  clock = () => {
    this.clock = setInterval(() => {
      updateStatus(this.props, this.room.code, { timer: this.room.status.timer - 1 });
    }, 1000);
  }


  updateProgress = () => {
    let { 
      currentRound, 
      timer, 
      answerPhase,
      votePhase,
    } = this.room.status;

    if (timer === 0) {
      if (answerPhase) this.allAnswered();
      if (votePhase) this.allVoted();
    }

    if (currentRound > this.room.numRounds) {
      updateStatus(this.props, this.room.code, { 
        gameOver: true, 
        gameStarted: false 
      });

      this.props.history.push('/');
    }
  }

  allVoted = () => {
    if (this.room.status.allVoted) {
      updateStatus(this.props, this.room.code, {
        votePhase: false,
        answerPhase: true,
        currentRound: this.room.status.currentRound + 1,
        timer: 60,
      });
    }
  }

  allAnswered = () => {
    if (this.room.status.allAnswered) {
      updateStatus(this.props, this.room.code, {
        answerPhase: false,
        votePhase: true,
        timer: 15,
      }); 
    }
  }
  
  render() {

    this.room = this.props.findRoomQuery.findRoom;
    if (!this.room) {
      return null;
    }

    let {  
      currentRound, 
      timer,
      allAnswered,
      allVoted,
    } = this.room.status;
    
    return (
      <div>
        <h3>Current Round: {currentRound} / {this.room.numRounds} </h3>
        <h3>Timer: {timer}s</h3>
        <h3>Prompts in room: {this.room.prompts.length}</h3>
        <h3>All Answered: {allAnswered.toString()}</h3>
        <h3>All Voted: {allVoted.toString()}</h3>
        {showPlayers(this.room.players)}
      </div>
    );
  }
}

export default compose (
  graphql(FindRoomQuery, findRoomOptions()),
  graphql(UpdateStatusMutation, {name: 'updateStatus'}),
  graphql(RetrieveAndAssignPromptsMutation, {name: 'retrieveAndAssignPrompts'})
)(withRouter(HostScreen));