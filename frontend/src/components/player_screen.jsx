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

import {
  updateStatus
} from '../gql_actions/mutation_actions';

class PlayerScreen extends React.Component {

  state = {
    answer: '',
    answerCount: 0
  }

  async componentDidMount() {

    subscribeToRoomStatus(this.props.findRoomQuery, this.room.code);
    await subscribeToReceivePrompts(this.props.retrievePromptsQuery, this.room.code, localStorage.username);
    
    updateStatus(this.props, this.room.code, {currentRound: this.room.status.currentRound});

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

  submit = e => {
    e.preventDefault();
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
        <br />
        <form onSubmit={e => this.submit(e)}>
          <input 
            onChange={this.updateAnswer}
            value={this.state.answer}
            placeholder='Answer here'/>
        </form>
      </div>
    );
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

  vote = () => {
    let voteForms = [];
    
   this.currentRoundPrompts().forEach( res => {
      if (!this.isPlayerPrompt(res)){
       voteForms.push(this.voteForm(res))
      }
    });

    return (
      <ul className="voting-form">
        {voteForms.map( (vf, i) => <li key={i}>{vf}</li>)}
      </ul>
    );
  }

  isPlayerPrompt = res => (
    // res.answers.some( ans => ans.player.id === localStorage.playerId)
    res.players.map(p=>p.id).includes(localStorage.playerId)
  )

  currentRoundPrompts = () => (
    this.room.prompts.filter(resp => resp.roundNumber === this.room.status.currentRound)
  )

  voteForm = ( res ) => { 
    return(
    <div>
      <h3>Vote your favorite answer!</h3>
      <button onClick={e => this.voted(e, res.answers[0].id, res.id )}>
        {res.answers[0].answers[0]}
      </button>
      <button onClick={e => this.voted(e, res.answers[1].id, res.id )}>
        {res.answers[0].answers[1]}
      </button>
    </div>
  )}

  voted = (e, answerId, responseId) => {
    e.preventDefault();
    this.addVote(answerId, responseId);
  }

  waiting = () => {
    return <h3>Sit back and relax, waiting for other players...</h3>;
  }

  updatePhase = () => {
    let { 
      answerPhase,
      votePhase,
    } = this.room.status;

    if (answerPhase) {
      return this.answer(this.cards);
    }
    if (votePhase) {
      return this.vote();
    }

  }

  render() {
    this.room = this.props.findRoomQuery.findRoom;
    let responses = this.props.retrievePromptsQuery.retrievePlayerPrompts
    
    if (!this.room || !responses) {
      return null;
    }

    let { 
      currentRound, 
      timer, 
    } = this.room.status;

    this.resIds = responses.map(res => res.id)

    let cards = responses.map(res => {
      return <li key={res.id}>{res.prompt.prompt}</li>
    });
    this.cards = <ul className='prompt-list'>{cards}</ul>;

    return (
      <div>
        <h3>Current Round: {currentRound} / {this.room.numRounds} </h3>
        <h3>Timer: {timer}s</h3>
        {this.updatePhase()}
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