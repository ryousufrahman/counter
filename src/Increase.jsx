import { useState } from "react";

export default function Increase() {
  const [number, setNumber] = useState(0);
  const handleIncrease = () => {
    const increased = number + 1;
    setNumber(increased);
  };
  const handleDecrease =()=>{
    const decreased = number - 1;
    setNumber(decreased)
  }
  const handleReset =()=>{
    const reset =0
    setNumber(reset)

  }
  return (
    <div className="card-div">
      <h2>Count : {number} </h2>
      <button onClick={handleIncrease}>click to + 1</button>
      <button onClick={handleDecrease}> click to - 1</button>
      <button onClick={handleReset}>click to reset</button>
    </div>
  );
}
