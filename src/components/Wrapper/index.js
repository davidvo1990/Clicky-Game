import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}
  <footer className="footer">
    <div className="bottom bg-dark">
      Clicky Game!
    </div>
  </footer>
  </div>;
}

export default Wrapper;
