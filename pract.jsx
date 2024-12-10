import "./styles.css";
import { useState } from "react";

export default function App() {
  const [color, setcolor] = useState({
    button1: "yellow",
    button2: "yellow",
  });

  const handleclick = (button) => {
    setcolor((prev) => ({
      ...prev,
      [button]: "green",
    }));
    setTimeout(() => {
      setcolor((prev) => ({
        ...prev,
        [button]: "yellow",
      }));
    }, 4000);
  };

  return (
    <div>
      <button
        className="App"
        style={{ backgroundColor: `${color.button1}` }}
        onClick={() => handleclick("button1")}
      >
        1
      </button>
      <button
        className="App"
        style={{ backgroundColor: `${color.button2}` }}
        onClick={() => handleclick("button2")}
      >
        2
      </button>
    </div>
  );
}
