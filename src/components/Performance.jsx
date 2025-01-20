import React from "react";
import "./PerformanceFundamentals.css";

const PerformanceFundamentals = ({ data }) => {
  const {
    todaysLow,
    todaysHigh,
    currentPrice,
    marketCap,
    volume,
    allTimeHigh,
    allTimeLow,
    marketCapRank,
    week52High,
    week52Low,
  } = data;

  return (
    <div className="performance-fundamentals">
      {/* Performance Section */}
      <div className="performance-section">
        <div style={{ fontSize: "1.5rem" }}>Performance</div>
        <div className="performance-range">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <span>Today&apos;s Low</span>
            <span className="low">{todaysLow}</span>
          </div>
          <div className="range-bar">
            <div
              className="current-position"
              style={{
                left: `${
                  ((currentPrice - todaysLow) / (todaysHigh - todaysLow)) * 100
                }%`,
              }}
            ></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Today&apos;s High</span>
            <span className="high">{todaysHigh}</span>
          </div>
        </div>
        <div className="range-labels">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>52W Low</span>
            <span>{week52Low}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>52W High</span>
            <span>{week52High}</span>
          </div>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div className="fundamentals-section">
        <div style={{ fontSize: "1.5rem" }}>Fundamentals</div>
        <div className="fundamentals-grid">
          <div className="fundamentals-left">
            <div className="left" style={{ padding: "0 0 1rem 0" }}>
              <div>Bitcoin Price</div>
              <div>${currentPrice.toFixed(2)}</div>
            </div>
            <hr className="divider" />
            <div className="left" style={{ padding: "0 0  1rem 0" }}>
              <div>Market Cap</div>
              <div>${marketCap.toLocaleString()}</div>
            </div>
            <hr className="divider" />
            <div className="left" style={{ padding: "0 0 1rem 0" }}>
              <div>Market Cap Rank</div>
              <div>#{marketCapRank}</div>
            </div>
          </div>
          <div className="fundamentals-right">
            <div className="right" style={{ padding: "0 0 1rem 0" }}>
              <div>Trading Volume</div>
              <div>${volume.toLocaleString()}</div>
            </div>
            <hr className="divider" />
            <div className="right">
              <div style={{ alignSelf: "center" }}>All-Time High</div>
              <div>
                ${allTimeHigh.value.toFixed(2)}{" "}
                <div className="red">({allTimeHigh.change}%)</div>
              </div>
            </div>
            <hr className="divider" />
            <div className="right">
              <div style={{ alignSelf: "center" }}>All-Time Low</div>
              <div>
                ${allTimeLow.value.toFixed(2)}{" "}
                <div className="green">({allTimeLow.change}%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceFundamentals;
