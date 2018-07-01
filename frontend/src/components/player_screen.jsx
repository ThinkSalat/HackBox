import React from 'react';
import { withRouter } from 'react-router-dom';
import {graphql, compose} from 'react-apollo';

import { FindRoomQuery, RetrievePromptsQuery } from '../gql/gql_query';
import { findRoomOptions } from '../gql_actions/query_actions';
import { subscribeToRoomStatus } from '../gql_actions/subscription_actions';

import { 
  UpdateStatusMutation,
} from '../gql/gql_mutation';

class PlayerScreen extends React.Component {

  state = {
    answered: false,
    voted: true,
    currentRound: 1,
  }

  componentDidMount() {
    subscribeToRoomStatus(this.props.findRoomQuery, this.room.code);
  }

  answered = () => {
    this.setState({ answered: true, voted: false });
  }

  voted = () => {
    this.setState({ voted: true, answered: false });
  }

  answer = () => { 
    return (
      <div>
        <h3>Answer the prompt!</h3>
        <button onClick={this.answered}>Answer</button>
      </div>
    );
  }

  vote = () => {
    return (
      <div>
        <h3>Vote your favorite response!</h3>
        <button onClick={this.voted}>Response A</button>
        <button onClick={this.voted}>Response B</button>
      </div>
    );
  }

  updatePhase = () => {
    if (this.state.answered) {
      return this.vote();
    } 
    if (this.state.voted) {
      return this.answer();
    } 
  }

  render() {
    let {data: {loading, retrievePlayerPrompts}} = this.props;
    this.room = this.props.findRoomQuery.findRoom;
    if (loading) {
      return null;
    }

    let { 
      currentRound, 
      timer, 
    } = this.room.status;

    // debugger
    
    let prompts = retrievePlayerPrompts.slice((currentRound-1)*2, currentRound*2);
    prompts = prompts.map(card => {
      return <li key={card.id}>{card.prompt}</li>;
    });
    prompts = <ul className='prompt-list'>{prompts}</ul>;

    return (
      <div>
        <h3>Current Round: {currentRound} / {this.room.numRounds} </h3>
        <h3>Timer: {timer}s</h3>
        {prompts}
        {this.updatePhase()}
      </div>
    );
  }
}

export default compose (
  graphql(FindRoomQuery, findRoomOptions()),
  graphql(RetrievePromptsQuery, {
    options: { 
      variables: {
        code: localStorage.roomId, 
        id: localStorage.playerId
      }
    }
  }),
  graphql(UpdateStatusMutation, {name: 'updateStatus'}),
)(withRouter(PlayerScreen));