// import React from "react";

// function Toggle() {
//   return <button>OFF</button>;
// }

// export default Toggle;

import React, { useState } from "react";

function Toggle() {
  
  const [isOn, setIsOn] = useState(false);

  
  function handleClick() {
    setIsOn((prevIsOn) => !prevIsOn);
  }


  const buttonStyle = {
    background: isOn ? "red" : "white",
    padding: "10px",
    margin: "10px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div>
      <h2>Toggle Component</h2>
      <button style={buttonStyle} onClick={handleClick}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Toggle;
