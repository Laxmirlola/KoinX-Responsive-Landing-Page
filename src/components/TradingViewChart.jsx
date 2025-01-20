import React, { useEffect, useRef } from "react";
import "./TradingViewChart.css"; // Add styling as needed

const TradingViewChart = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => {
        new window.TradingView.widget({
          container_id: "tradingview_widget",
          autosize: true,
          symbol: "BTCUSD",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "2",
          locale: "en",
          withdateranges: true,
          hide_top_toolbar: true,
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          save_image: false,
        });
      };

      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-chart">
      <div id="tradingview_widget" ref={containerRef}></div>
    </div>
  );
};

export default TradingViewChart;
