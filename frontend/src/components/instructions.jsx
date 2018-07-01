import React from "react";

export default class Instructions extends React.Component {

  render() {
    return(
      <div>
        Hi <span className="instruction-greeting">{localStorage.username.toLowerCase()}</span>
        <br/>
        Instructions go here hi
      </div>
    );
  }
}