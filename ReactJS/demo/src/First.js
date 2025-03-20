import React from 'react'
import ClickBtn from "./ClickBtn";

function First() {
   const handleClick = (str) => {
     alert(str);
   };

  return (
    <div className="App">
      <ClickBtn name={"Okay"} btnColor={"red"} handleClick={handleClick} />
      <ClickBtn name={"Music"} btnColor={"blue"} handleClick={handleClick} />
      <ClickBtn name={"Books"} btnColor={"Yellow"} handleClick={handleClick} />
      <ClickBtn name={"Sports"} btnColor={"Green"} handleClick={handleClick} />
      <ClickBtn name={"AC"} btnColor={"pink"} handleClick={handleClick} />
      <ClickBtn name={"DC"} btnColor={"crimson"} handleClick={handleClick} />
      <ClickBtn
        name={"XYZ"}
        btnColor={"yellowGreen"}
        handleClick={handleClick}
      />
    </div>
  );
}

export default First
