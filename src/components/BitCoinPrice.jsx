import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainContent.css";
import bitcoinLogo from "../../Bitcoin-Logo.png";
// import "./BitcoinPrice.css"; // Add styles specific to the component

const BitcoinPrice = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin",
              vs_currencies: "usd,inr",
              include_24hr_change: "true",
            },
          }
        );
        setBitcoinData(response.data.bitcoin);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch Bitcoin price");
        setIsLoading(false);
      }
    };

    fetchBitcoinPrice();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const { usd, inr, usd_24h_change } = bitcoinData;

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
        <div style={{ display: "flex", flexDirection: "column" }}>
          {" "}
          <h1 style={{ margin: "0" }}>${usd.toLocaleString()}</h1>
          <h3 style={{ margin: "0" }}> ₹{inr.toLocaleString()}</h3>
        </div>
        <span
          style={{
            color: usd_24h_change > 0 ? "green" : "red",
            backgroundColor:
              usd_24h_change > 0
                ? "rgba(205, 243, 220, 0.655)"
                : "rgba(243, 214, 205, 0.66)",
          }}
          className="positive"
        >
          {usd_24h_change.toFixed(2)}%{" "}
        </span>
        <div
          style={{ alignSelf: "center", color: "#888", marginLeft: "0.6rem" }}
        >
          (24H)
        </div>
      </div>
      <hr className="divider" />
    </div>

    // <div className="bitcoin-price">
    //   <h2>Bitcoin BTC</h2>
    //   <p>
    //     <strong>Price (USD): </strong> ${usd.toLocaleString()}
    //   </p>
    //   <p>
    //     <strong>Price (INR): </strong> ₹{inr.toLocaleString()}
    //   </p>
    //   <p>
    //     <strong>24H Change (USD): </strong>
    //     <span style={{ color: usd_24h_change > 0 ? "green" : "red" }}>
    //       {usd_24h_change.toFixed(2)}%
    //     </span>
    //   </p>
    // </div>
  );
};

export default BitcoinPrice;
