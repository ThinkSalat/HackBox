import React from 'react';
export const Modal = ({handleClose, show}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName} onClick={handleClose}>
      <div className="modal-main">
        <h1 className="howtoplay">HOW TO PLAY</h1>
        <ul>
          <br/>
          <li>Each round, you will be given TWO prompts.</li>
          <br/>
          <li>Answer before time is up!</li>
          <br />
          <li>Your annonymous answers will be pitted against another player’s answer</li>
          <br />
          <li>Other players will vote on their favorite answer.</li>
          <br />
          <li>Player with the most points at the end of the game wins!</li>
        </ul>
      </div>

    </div>
  );
};