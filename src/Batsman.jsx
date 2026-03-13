import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const handleSingle = () => {
    const newSinRun = runs + 1;
    setRuns(newSinRun);
  };
  const handleFour = () => {
    const newFour = runs + 4;
    setRuns(newFour);
  };
  const handleSix = () => {
    const newSix = runs + 6;
    setRuns(newSix);
  };
  return (
    <div>
      <h2>Run : {runs} </h2>
      <button onClick={handleSingle}>single</button>
      <button onClick={handleFour}>four</button>
      <button onClick={handleSix}>six</button>
    </div>
  );
}
