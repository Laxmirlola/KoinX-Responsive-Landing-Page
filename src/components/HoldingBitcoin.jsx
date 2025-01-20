import React from "react";
import "./HoldingBitcoin.css"; // Link to the external CSS file

const HoldingBitcoin = () => {
  const cards = [
    {
      title: "Calculate your Profits",
      description: "Check Now",
      image:
        "https://images.unsplash.com/photo-1554260570-e9689a3418b8?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
      bgColor: "gradient-blue", // Custom class for background gradient
    },
    {
      title: "Calculate your tax liability",
      description: "Check Now",
      image:
        "https://images.unsplash.com/photo-1583752028088-91e3e9880b46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
      bgColor: "gradient-red", // Custom class for background gradient
    },
  ];

  return (
    <div className="holding-bitcoin">
      <h2 className="section-title">Already Holding Bitcoin?</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className={`card ${card.bgColor}`}>
            <div className="img-container">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="card-content">
              <div className="card-title">{card.title}</div>
              <button className="card-button">{card.description} →</button>
            </div>
          </div>
        ))}
      </div>
      <p className="info-text">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui.
      </p>
    </div>
  );
};

export default HoldingBitcoin;
