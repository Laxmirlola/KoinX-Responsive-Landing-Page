import React, { useEffect, useState } from "react";
import "./TrendingCoins.css"; // Update styles as per the design

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        const topThreeCoins = data.coins.slice(0, 3); // Get the top 3 trending coins
        setTrendingCoins(topThreeCoins);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  if (loading) {
    return <div className="trending-coins">Loading trending coins...</div>;
  }

  return (
    <div className="trending-section">
      {/* You May Also Like Section */}
      <div className="you-may-also-like">
        <h3 style={{ margin: "0 " }}>Trending Coins (24H)</h3>
        <div className="carousel">
          {trendingCoins.map((coin) => (
            <div key={coin.item.id} className="carousel-item">
              <img
                src={coin.item.thumb}
                alt={coin.item.name}
                className="coin-logo"
              />
              <div className="coin-details">
                <span className="coin-name">{coin.item.name}</span>
                <span className="coin-symbol">
                  ({coin.item.symbol.toUpperCase()})
                </span>
                <span className="coin-price">
                  ${coin.item.price_btc.toFixed(8)} BTC
                </span>
                {/* Sparkline Graph
                <img
                  src={coin.item.sparkline}
                  alt={`${coin.item.name} sparkline`}
                  className="coin-sparkline"
                /> */}
              </div>
            </div>
          ))}
        </div>
        {/* Repeat Carousel */}
        <h3 style={{ margin: "1rem 0 0 0" }}>You may also like</h3>
        <div className="carousel">
          {trendingCoins.map((coin) => (
            <div key={coin.item.id + "_2"} className="carousel-item">
              <img
                src={coin.item.thumb}
                alt={coin.item.name}
                className="coin-logo"
              />
              <div className="coin-details">
                <span className="coin-name">{coin.item.name}</span>
                <span className="coin-symbol">
                  ({coin.item.symbol.toUpperCase()})
                </span>
                <span className="coin-price">
                  ${coin.item.price_btc.toFixed(8)} BTC
                </span>
                {/* Sparkline Graph
                <img
                  src={coin.item.sparkline}
                  alt={`${coin.item.name} sparkline`}
                  className="coin-sparkline"
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
