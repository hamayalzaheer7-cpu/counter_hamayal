import { useState, useEffect } from "react";
import { getSavedData, saveData } from "./storage";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => getSavedData());

  // Count change hone par localStorage mein save hoga
  useEffect(() => {
    saveData(count);
  }, [count]);

  // Counter increase
  function increase() {
    setCount(count + 1);
  }

  // Counter decrease, zero se neeche nahi jayega
  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  // Counter reset
  function reset() {
    setCount(0);
  }

  return (
    <div className="app">
      <nav>
        <h2>
          Countly<span>.</span>
        </h2>
        <p>MY LITTLE COUNTER</p>
      </nav>

      <main>
        <div className="intro">
          <p className="small-heading">KEEP IT SIMPLE</p>
          <h1>One step at a time.</h1>
          <p className="subtitle">A simple space to track your progress.</p>
        </div>

        <section className="counter-area">
          <div className="count-label">CURRENT COUNT</div>

          <h2>{count}</h2>

          <p className="count-message">Every step counts.</p>

          <div className="buttons">
            <button onClick={decrease}>−</button>
            <button onClick={increase}>+</button>
          </div>

          <button className="reset-btn" onClick={reset}>
            Reset Counter
          </button>
        </section>

        <div className="bottom-text">
          <span>01</span>
          <p>Small progress is still progress.</p>
          <span>♡</span>
        </div>
      </main>

      <footer>MADE WITH REACT</footer>
    </div>
  );
}

export default App;
