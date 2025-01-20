import React from "react";
import "./SentimentAnalysis.css";

const SentimentAnalysis = () => {
  // Mock data
  const keyEvents = [
    {
      icon: "📄",
      title: "Lorem ipsum dolor sit amet consectetur.sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.",
      backgroundColor: "#E8F4FF",
    },
    {
      icon: "📈",
      title: "Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac consectetur et pretium in a bibendum in.Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.",
      backgroundColor: "#DFF8E9",
    },
  ];

  const analystEstimates = {
    buy: 76,
    hold: 8,
    sell: 16,
  };

  return (
    <div className="sentiment-analysis">
      <div style={{ fontSize: "1.5rem" }}>Sentiment</div>
      {/* Key Events Section */}
      <div className="key-events">
        <h3>
          Key Events <span className="info-icon">ℹ️</span>
        </h3>
        <div className="events-carousel">
          {keyEvents.map((event, index) => (
            <div
              key={index}
              className="event-card"
              style={{ backgroundColor: event.backgroundColor }}
            >
              <div className="event-icon">
                <b>{event.icon}</b>
              </div>
              <div className="event-content">
                <div style={{ fontSize: "1rem" }}>{event.title}</div>
                <br />
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div className="analyst-estimates">
        <h3>
          Analyst Estimates <span className="info-icon">ℹ️</span>
        </h3>
        <div className="estimates-container">
          {/* Circular Buy Percentage */}
          <div className="circular-buy">
            <div className="circle">
              <div className="circle-text">{analystEstimates.buy}%</div>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="progress-bars">
            <div className="progress-row">
              <span>Buy</span>
              <div className="progress-bar">
                <div
                  className="progress-fill buy"
                  style={{ width: `${analystEstimates.buy}%` }}
                ></div>
              </div>
              <span>{analystEstimates.buy}%</span>
            </div>
            <div className="progress-row">
              <span>Hold</span>
              <div className="progress-bar">
                <div
                  className="progress-fill hold"
                  style={{ width: `${analystEstimates.hold}%` }}
                ></div>
              </div>
              <span>{analystEstimates.hold}%</span>
            </div>
            <div className="progress-row">
              <span>Sell</span>
              <div className="progress-bar">
                <div
                  className="progress-fill sell"
                  style={{ width: `${analystEstimates.sell}%` }}
                ></div>
              </div>
              <span>{analystEstimates.sell}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
