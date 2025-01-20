import React from "react";
import "./Tokenomics.css"; // Import external CSS file

const Tokenomics = () => {
  return (
    <div className="tokenomics">
      <h2 className="section-title">Tokenomics</h2>
      <h3>Initial distribution</h3>
      <div className="tokenomics-content">
        <div className="chart-container">
          <svg
            className="pie-chart"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="16"
              cx="16"
              cy="16"
              className="pie-chart-background"
            ></circle>
            <circle
              r="16"
              cx="16"
              cy="16"
              className="pie-chart-segment crowdsale"
              style={{ strokeDasharray: "80 20" }}
            ></circle>
          </svg>
          <div className="legend">
            <div className="legend-item">
              <span className="legend-color blue"></span>Crowdsale investors:
              80%
            </div>
            <div className="legend-item">
              <span className="legend-color orange"></span>Foundation: 20%
            </div>
          </div>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
