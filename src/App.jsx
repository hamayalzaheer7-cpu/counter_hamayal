import { useState, useEffect } from "react";
import { getSavedData, saveData } from "./storage";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => getSavedData());
  const [showInfo, setShowInfo] = useState(false);

  // Dark mode false ka matlab Light Theme hai
  const [darkMode, setDarkMode] = useState(false);

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

  // Information show/hide
  function toggleInfo() {
    setShowInfo(!showInfo);
  }

  // Light aur Dark theme change
  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
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

          <button className="info-btn" onClick={toggleInfo}>
            {showInfo ? "Hide Information" : "Show Information"}
          </button>

          {showInfo && (
            <div className="info-box">
              <p>This is a counter app!</p>
            </div>
          )}
        </section>
      </main>

      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? "☀ Light Mode" : "☾ Dark Mode"}
      </button>

      <footer>Hamayal Zaheer</footer>
    </div>
  );
}

export default App;
