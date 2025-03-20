import React from "react";
import "./ClickBtn.css";

function ClickBtn(props) {
  return (
    <div>
      <button
        style={{ backgroundColor: props.btnColor }}
        // onClick={handleClick}
        onClick={() => {props.handleClick(props.name);}}
      >
        {props.name}
      </button>
    </div>
  );
}

export default ClickBtn;
