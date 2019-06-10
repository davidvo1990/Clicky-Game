import React from "react";
import "./style.css";

function Title(props) {
  return <div className="title">
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">{props.children}</a>
      <span className="navbar-brand mb-0 h1 message">{props.message}</span>
      <span className="navbar-brand mb-0 h1 score">Score: {props.score} | Top Score: {props.topscore}</span>
    </nav>
    <div className="instructions">
      <p><strong>Clicky Game!</strong></p>
      <p className="mss">Click on an image to earn points, but don't click on any more than once!</p>
    </div>
  </div>
}

export default Title;
