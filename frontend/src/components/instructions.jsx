import React from "react";

export default class Instructions extends React.Component {

  render() {
    let name = localStorage.username ? localStorage.username : 'Host';
    return(
      <div>
        Hi <span className="instruction-greeting">{name.toLowerCase()}</span>
        <br/>
        Instructions...
      </div>
    );
  }
}