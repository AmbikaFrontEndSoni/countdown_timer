import React from "react";

const ActiveCounter = () => {
  return (
    <div>
      <h1>Counter timer</h1>
      <div style={{ display: "flex" }}>
        <button>HH</button>:<button>MM</button>:<button>SS</button>:
        <button>Pause</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default ActiveCounter;
