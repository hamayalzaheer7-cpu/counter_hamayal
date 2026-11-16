import { useState, useEffect } from "react";
import { getSavedData, saveData } from "./storage";
import "./App.css";

function App() {
  // Get previously saved counter and theme
  const savedData = getSavedData();

  // Store counter and settings
  const [count, setCount] = useState(savedData.count);
  const [darkMode, setDarkMode] = useState(savedData.darkMode);
  const [showInfo, setShowInfo] = useState(false);

  // Save data whenever counter or theme changes
  useEffect(() => {
    saveData({ count, darkMode });
  }, [count, darkMode]);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="counter">
        <p className="tag">MY COUNTER</p>

        <h2>Daily Counter</h2>
        <p className="subtitle">Keep track of your progress.</p>

        {/* Display counter value */}
        <div className="number">{count}</div>

        {/* Counter buttons */}
        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>Increase</button>

          <button onClick={() => setCount(Math.max(0, count - 1))}>
            Decrease
          </button>

          <button onClick={() => setCount(0)}>Reset</button>
        </div>

        <div className="line"></div>

        {/* Show or hide information */}
        <div className="setting">
          <span>Information</span>

          <button className="small-btn" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? "Hide" : "Show"}
          </button>
        </div>

        {showInfo && (
          <p className="info">
            Your counter value is saved automatically. You can continue from
            where you left.
          </p>
        )}

        {/* Change display theme */}
        <div className="setting">
          <span>Display Theme</span>

          <button className="small-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <p className="footer">Simple things, steady progress.</p>
      </div>
    </div>
  );
}

export default App;
