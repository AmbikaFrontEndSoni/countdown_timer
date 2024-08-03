import React, { useState } from "react";
import RestCounter from "./RestCounter";
import ActiveCounter from "./ActiveCounter";

const Counter = () => {
 
  return (
    <div>
      {!isStart && <RestCounter />}
      {isStart && <ActiveCounter />}
    </div>
  );
};

export default Counter;
