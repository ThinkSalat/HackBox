import React from 'react';
export const Modal = ({handleClose, show}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName} onClick={handleClose}>
      <div className="modal-main">
        <h1>HOW TO PLAY</h1>
        <ul>
          <br/>
          <li>Each round you will be given TWO prompts to answer before the time is up</li>
          <br />
          <li>There is no right answers, so just say anything!</li>
          <br />
          <li>Everyone's annonymous answers for the round will be pitted against another player’s answer in head-to-head battles</li>
          <br />
          <li>Other players will vote on their favorite answer.</li>
          <br />
          <li>Player with the most points at the end of the game wins!</li>
        </ul>
      </div>

    </div>
  );
};