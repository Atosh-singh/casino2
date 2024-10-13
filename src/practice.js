import React, { useEffect, useState } from "react";
import "./App.css"; // Import CSS styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faApple,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const [walletValue, setWalletValue] = useState(0);

  // Load wallet value from localStorage on mount
  useEffect(() => {
    const storedValue = localStorage.getItem("walletValue");
    if (storedValue) {
      setWalletValue(parseFloat(storedValue));
    }
  }, []);

  // Increment wallet value every second
  useEffect(() => {
    const interval = setInterval(() => {
      setWalletValue((prevValue) => {
        const newValue = prevValue + 1;
        localStorage.setItem("walletValue", newValue); // Store in localStorage
        return newValue;
      });
    }, 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Stake</div>
        <div className="header-buttons">
          <div className="wallet">Wallet: ${walletValue.toFixed(2)}</div>
          <button className="sign-in-btn">Sign In</button>
          <button className="register-btn">Register</button>
        </div>
      </header>

      {/* Side Navbar */}
      <aside className="side-navbar">
        <div className="icon">🏠</div>
        <div className="icon">🎰</div>
        <div className="icon">🎲</div>
        <div className="icon">🏆</div>
        <div className="icon">🎮</div>
        <div className="icon">⚙️</div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>An unrivalled Online Casino & Sportsbook</h1>
        <button className="sign-up-btn">Sign up</button>
        <p>Or sign up with:</p>
        <div className="social-buttons">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          <FontAwesomeIcon icon={faGoogle} className="social-icon" />
          <FontAwesomeIcon icon={faApple} className="social-icon" />
          <FontAwesomeIcon icon={faTwitch} className="social-icon" />
        </div>

        {/* Cards Section */}
        <div className="cards-container">
          <div className="card">
            <img src="https://via.placeholder.com/300x400" alt="Game 1" />
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300x400" alt="Game 2" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
