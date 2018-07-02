import React from 'react';
import { withRouter } from 'react-router-dom';
import {graphql, compose} from 'react-apollo';

import { 
  FindRoomQuery, 
  RetrievePromptsQuery 
} from '../gql/gql_query';
import { 
  findRoomOptions,
  retrievePromptsOptions
 } from '../gql_actions/query_actions';

import { 
  subscribeToRoomStatus,
  subscribeToReceivePrompts
 } from '../gql_actions/subscription_actions';

import { 
  UpdateStatusMutation,
  AddAnswerToResponseMutation,
  AddVoteToAnswerMutation,
} from '../gql/gql_mutation';

class PlayerScreen extends React.Component {

  state = {
    answer: '',
    answerCount: 0
  }

  componentDidMount() {
    subscribeToRoomStatus(this.props.findRoomQuery, this.room.code);
    subscribeToReceivePrompts(this.props.retrievePromptsQuery, this.room.code, localStorage.username);
    // this.showModal();
  }

  updateStatus = (options) => {
    let code = this.room.code;
    this.props.updateStatus({
      variables: {
        code,
        options
      }
    });
  }
  
  addAnswer = (responseId) => {
    let code = this.room.code;
    let username = localStorage.username;
    let answers = [this.state.answer];
    this.props.addAnswer({
      variables: {
        responseId, code, username, answers
      }
    });
  }
  
  addVote = (answerId, responseId) => {
    let code = this.room.code;
    let username = localStorage.username;
    this.props.addVote({
      variables: {
        code, username, answerId, responseId
      }
    });
  }

  submit = () => {
    let {answerCount} = this.state;
    let responseId = this.resIds[answerCount];
    this.addAnswer(responseId);
    this.setState({ answer: '', answerCount: answerCount + 1 });
  }

  updateAnswer = e => {
    this.setState({ answer: e.currentTarget.value });
  }

  answer = (cards) => { 
    if (this.state.answerCount >= 2) {
      return this.waiting();
    }

    return (
      <div>
        {cards}
        <form onSubmit={() => this.submit()}>
          <input 
            onChange={this.updateAnswer}
            value={this.state.answer}
            placeholder='Answer here'/>
        </form>
      </div>
    );
  }

  vote = () => {
    return (
      <div>
        <h3>Vote your favorite answer!</h3>
        <button onClick={this.voted}>Answer A</button>
        <button onClick={this.voted}>Answer B</button>
      </div>
    );
  }

  voted = e => {
    e.preventDefault();
    // this.addVote(answerId, responseId);
  }

  waiting = () => {
    return <h3>Sit back and relax, waiting for other players...</h3>;
  }

  render() {
    this.room = this.props.findRoomQuery.findRoom;
    // let prompts = this.props.findRoomQuery.findRoom.prompts;
    let cards = this.props.retrievePromptsQuery.retrievePlayerPrompts;
    
    if (!this.room || !cards) {
      return null;
    }
    
    // debugger;

    let { 
      currentRound, 
      timer, 
    } = this.room.status;

    this.resIds = cards.map(card => this.room.prompts.find(res => res.prompt.prompt === card.prompt).id)

    cards = cards.map(card => {
      return <li key={card.id}>{card.prompt}</li>
    });
    cards = <ul className='prompt-list'>{cards}</ul>;

    return (
      <div>
        <h3>Current Round: {currentRound} / {this.room.numRounds} </h3>
        <h3>Timer: {timer}s</h3>
        {this.answer(cards)}
      </div>
    );
  }
}

export default compose (
  graphql(FindRoomQuery, findRoomOptions()),
  graphql(RetrievePromptsQuery, retrievePromptsOptions()),
  graphql(UpdateStatusMutation, {name: 'updateStatus'}),
  graphql(AddAnswerToResponseMutation, {name: 'addAnswer'}),
  graphql(AddVoteToAnswerMutation, {name: 'addVote'}),
)(withRouter(PlayerScreen));