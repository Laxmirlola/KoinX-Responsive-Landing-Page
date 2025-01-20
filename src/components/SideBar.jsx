import React from "react";
import "./Sidebar.css";
import TrendingCoins from "./TrendingCoins";
import womenImage from "../assets/woman.webp"; // Adjust the path as necessary

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="promo">
        <h3>Get Started with KoinX for FREE</h3>
        <p>
          With our range of features, you can be more educated and aware of your
          tax reports.
        </p>
        <img
          style={{ width: "18rem", height: "16rem" }}
          src={womenImage}
          alt="women"
          className="promo-image"
        />
        <button className="promo-button">
          <b>Get Started for FREE</b>
        </button>
      </div>
      {/* <div className="trending-coins">
        <h4>Trending Coins (24h)</h4>
        <ul>
          <li>
            Ethereum (ETH) <span className="positive">8.21%</span>
          </li>
          <li>
            Bitcoin (BTC) <span className="positive">5.26%</span>
          </li>
          <li>
            Polygon (MATIC) <span className="positive">4.32%</span>
          </li>
        </ul>
      </div> */}
      <TrendingCoins />
    </aside>
  );
};

export default Sidebar;
