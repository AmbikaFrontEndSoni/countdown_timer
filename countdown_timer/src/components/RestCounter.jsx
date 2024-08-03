import React, { useState } from "react";

const RestCounter = () => {
  const [isStart, setisStart] = useState(false);
  const handleStart = ()=>{
    setisStart(true)
  }
  return (
    <div>
      <h1>Counter timer</h1>
      <div style={{ display: "flex" }}>
        <button>HH</button>:<button>MM</button>:<button>SS</button>:
        <button onClick={handleStart}>Start</button>
      </div>
    </div>
  );
};

export default RestCounter;
