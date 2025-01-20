// components/MainContent.js
import React from "react";
import Chart from "./Chart";
import "./MainContent.css";
import bitcoinLogo from "../../Bitcoin-Logo.png"; // Adjust the path as necessary

const MainContent = () => {
  return (
    <div className="main-content">
      <header className="crypto-header">
        <img src={bitcoinLogo} alt="Bitcoin Logo" className="crypto-logo" />
        <h1>Bitcoin </h1>{" "}
        <div style={{ color: "#888" }}>
          <b>BTC</b>
        </div>
        <button className="rank">Rank #1</button>
      </header>

      <div className="crypto-price">
        <h1>$46,953.04</h1>
        <span className="positive">+2.51% </span>
        <div
          style={{ alignSelf: "center", color: "#888", marginLeft: "0.6rem" }}
        >
          (24H)
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
};

export default MainContent;
