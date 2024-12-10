import "./styles.css";
import { useState } from "react";

export default function App() {
  const [color, setcolor] = useState("yellow");

  const handleclick = () => {
    setcolor("green");
    setTimeout(() => {
      setcolor("yellow");
    }, 4000);
  };
  return (
    <div>
      <button
        className="App"
        style={{ backgroundColor: `${color}` }}
        onClick={handleclick}
      ></button>
    </div>
  );
}
