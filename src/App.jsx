// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import MainContent from "./components/MainContent";
import "./styles/App.css";
import BitCoinPrice from "./components/BitCoinPrice";
import TradingViewChart from "./components/TradingViewChart";
import TrendingCoins from "./components/TrendingCoins";
import Performance from "./components/Performance";
import SentimentComponent from "./components/Sentiment";
import SentimentAnalysis from "./components/Sentiment";
import AboutBitcoin from "./components/AboutBitcoin";
import HoldingBitcoin from "./components/HoldingBitcoin";

const App = () => {
  const mockData = {
    todaysLow: 46930.22,
    todaysHigh: 49343.83,
    currentPrice: 48637.83,
    marketCap: 323507290047,
    volume: 23249202782,
    allTimeHigh: { value: 69044.77, change: -75.6 },
    allTimeLow: { value: 67.81, change: 24729.1 },
    marketCapRank: 1,
    week52High: 49743.83,
    week52Low: 16930.22,
  };

  return (
    <div className="app">
      <Navbar />
      <div className="app-container">
        <div className="app-body">
          <BitCoinPrice />
          <TradingViewChart />
          <Performance data={mockData} />
          <SentimentAnalysis />
          <AboutBitcoin />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
