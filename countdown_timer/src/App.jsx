import react, { useState } from "react";
// import Counter from "./components/Counter";

const App = () => {
  const [isStart, setisStart] = useState(false);
  const [hrs, setHrs] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const handleStart = () => {
    setisStart(true);
  };
  const handleEvent = (e) => {
    console.log(e.target.id, e.target.value);
    if (id == hrs) {
      setHrs(e.target.value);
    } else if (id == min) {
      setMin(e.target.value);
    } else {
      setSec(e.target.value);
    }
  };
  return (
    <>
      <h1>Counter timer</h1>
      {/* <Counter /> */}

      {!isStart && (
        <div style={{ display: "flex" }}>
          <input id="hrs" placeholder="HH" onChange={handleEvent} />:
          <input id="min" placeholder="MM" onChange={handleEvent} />:
          <input id="sec" placeholder="SS" onChange={handleEvent} />
          <br />
          <button
            onClick={handleStart}
            style={{ backgroundColor: "black", color: "white" }}
          >
            Start
          </button>
        </div>
      )}

      {isStart && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <button>HH</button>:<button>MM</button>:<button>SS</button>
          </div>
          <div>
            <button style={{ backgroundColor: "black", color: "white" }}>
              Pause
            </button>
            <button style={{ backgroundColor: "black", color: "white" }}>
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default App;
