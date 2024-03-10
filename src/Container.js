import "./Container.css";
import React, { useState } from "react";

function Container() {
  const [count, setCount] = useState(0);

  function countMinus() {
    setCount(count - 1);
  }

  function countPlus() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="container">
      <div className="main">
        <div>
          <button onClick={countMinus} className="click">
            -
          </button>
        </div>
        <div id="changenumber" className="count">
          {count}
        </div>
        <div>
          <button onClick={countPlus} className="click">
            +
          </button>
        </div>
      </div>
      <div className="reset">
        <button onClick={reset} id="clear" className="clickReset">
          RESET
        </button>
      </div>
    </div>
  );
}

export default Container;
