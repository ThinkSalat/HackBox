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
      allAnswered,
      allVoted,
    } = this.room.status;

    if ((allAnswered || timer <= 0) && answerPhase) {
      this.enterVotePhase();
    }
    if ((allVoted || timer <= 0) && votePhase) {
      this.enterAnswerPhase();
    }

    if (currentRound > this.room.numRounds) {
      updateStatus(this.props, this.room.code, { 
        gameOver: true, 
        gameStarted: false 
      });

      this.props.history.push('/');
    }
  }

  enterAnswerPhase = () => {
    updateStatus(this.props, this.room.code, {
      votePhase: false,
      answerPhase: true,
      currentRound: this.room.status.currentRound + 1,
      timer: 10,
    });
  }

  enterVotePhase = () => {
    updateStatus(this.props, this.room.code, {
      answerPhase: false,
      votePhase: true,
      timer: 10,
    }); 
  }

  gameStats = room => {
    let {  
      currentRound, 
      timer,
      allAnswered,
      allVoted,
      status
    } = room.status;
    
    return(
    <div>
      <h3>Current Round: {currentRound} / {room.numRounds} </h3>
      <h3>Timer: {timer}s</h3>
      <h3>Prompts in room: {room.prompts.length}</h3>
      <h3>All Answered: {allAnswered.toString()}</h3>
      <h3>All Voted: {allVoted.toString()}</h3>
      {showPlayers(room.players)}
    </div>
  )}

  voting = room => {
    return(
      'ji'
    )
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
      status
    } = this.room.status;
    
    switch (status) {
      case 'Lobby':
        return this.gameStats(this.room);
      default:
        return this.gameStats(this.room);
    }
  }
}

export default compose (
  graphql(FindRoomQuery, findRoomOptions()),
  graphql(UpdateStatusMutation, {name: 'updateStatus'}),
  graphql(RetrieveAndAssignPromptsMutation, {name: 'retrieveAndAssignPrompts'})
)(withRouter(HostScreen));