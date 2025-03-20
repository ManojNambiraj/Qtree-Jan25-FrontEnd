import React, { useState } from "react";

const LocalState = () => {
  const [state, setState] = useState(0);

  const [color, setColor] = useState("aqua");

  const handleLike = () => {
    setState(state + 1);
    setColor("white");
  };

  const handleDislike = () => {
    if (state <= 1) {
      setState(0);
    } else {
      setState(state - 1);
    }

    // setState((prevState) => (prevState <= 1 ? 0 : state - 1));
    setColor("red");
  };

  return (
    <div className="main_div" style={{ backgroundColor: color }}>
      <h2>{state}</h2>

      <button onClick={handleLike}>Like 👍</button>
      <button onClick={handleDislike}>Dislike 👎</button>
    </div>
  );
};

export default LocalState;
