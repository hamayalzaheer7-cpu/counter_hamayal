
import { useState, useEffect } from "react";
import { getSavedData, saveData } from "./storage";
import "./App.css";

function App() {

  const [count, setCount] = useState(() => getSavedData());

  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    saveData(count);
  }, [count]);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  function toggleInfo() {
    setShowInfo(!showInfo);
  }

  return (
    <div className="app">
      <nav>
        <h2>Click</h2>
        <p>MY LITTLE COUNTER</p>
      </nav>

      <main>
        <div className="intro">
          <h1>One step at a time.</h1>
          <p className="subtitle">A simple space for counter.</p>
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

          {/* Information show/hide button */}
          <button className="info-btn" onClick={toggleInfo}>
            {showInfo ? "Hide Information" : "Show Information"}
          </button>

          {/* Information sirf tab show hogi jab showInfo true hoga */}
          {showInfo && (
            <div className="info-box">
              <p>
                This is a counter app!
              </p>
            </div>
          )}
        </section>
      </main>

      <footer>Hamayal Zaheer</footer>
    </div>
  );
}

export default App;
