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
    answer: ''
  }

  componentDidMount() {
    subscribeToRoomStatus(this.props.findRoomQuery, this.room.code);
    subscribeToReceivePrompts(this.props.retrievePromptsQuery, this.room.code, localStorage.username);
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
    let answers = this.state.answer;
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

  submit = e => {
    e.preventDefault();
    // this.addAnswer(responseId);
    this.setState({ answer: ''});
  }

  updateAnswer = e => {
    this.setState({ answer: e.currentTarget.value });
  }

  answer = () => { 
    return (
      <div>
        <form onSubmit={this.submit}>
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

  render() {
    this.room = this.props.findRoomQuery.findRoom;
    let prompts = this.props.retrievePromptsQuery.retrievePlayerPrompts;
    
    debugger;
    if (!this.room || !this.prompts) {
      return null;
    }
    // let {data: {retrievePlayerPrompts}} = this.props;

    let { 
      currentRound, 
      timer, 
    } = this.room.status;

    // let prompts = retrievePlayerPrompts;
    prompts = prompts.map(card => {
      return <li key={card.id}>{card.prompt}</li>
    });

    // let num = this.room.players.length;
    // let prompts = this.room.prompts.slice((currentRound-1)*num, num * currentRound);
    // prompts = prompts.map(res => {
    //   return <li key={res.id}>{res.prompt.prompt}</li>;
    // });
    prompts = <ul className='prompt-list'>{prompts}</ul>;

    return (
      <div>
        <h3>Current Round: {currentRound} / {this.room.numRounds} </h3>
        <h3>Timer: {timer}s</h3>
        {prompts}
        {this.answer()}
        {this.vote()}
      </div>
    );
  }
}

export default compose (
  graphql(FindRoomQuery, findRoomOptions()),
  graphql(RetrievePromptsQuery, retrievePromptsOptions()),
  // graphql(RetrievePromptsQuery, {
  //   options: {
  //     variables: {
  //       code: localStorage.roomId,
  //       username: localStorage.username
  //     }
  //   }
  // }),
  graphql(UpdateStatusMutation, {name: 'updateStatus'}),
  graphql(AddAnswerToResponseMutation, {name: 'addAnswer'}),
  graphql(AddVoteToAnswerMutation, {name: 'addVote'}),
)(withRouter(PlayerScreen));