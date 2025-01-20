# KoinX Responsive Landing Page 🪙 

This project is a responsive landing page for **KoinX**, a platform that provides tools for crypto tax calculation, portfolio tracking, and accounting. The landing page displays real-time cryptocurrency data and features several interactive components to enhance user experience.


## Features

### 1. Real-Time Bitcoin Price

- **Data Source**: Coingecko’s `/simple/price` API.
- Displays the current price of Bitcoin in **USD** and **INR**.
- Shows the 24-hour price change in **USD**.

### 2. Trending Coins (24h)

- **Data Source**: Coingecko’s `/search/trending` API.
- Displays the top 3 trending cryptocurrencies in a dedicated component on the right.

### 3. You May Also Like Section

- Shows the following details for trending coins:
  - Coin logo
  - Symbol
  - Current price
  - Price change
  - Price graph (using the `sparkline` property from the API response).
- Horizontally scrollable carousel displaying trending coins.
- Includes a duplicate row with the same data for better visual engagement.



## Technologies Used

- **Frontend Framework**: React.js
- **Styling**: CSS only
- **API Integration**: Coingecko APIs for cryptocurrency data



## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone [<repository-url>](https://github.com/Laxmirlola/KoinX-Responsive-Landing-Page)
   ```

2. Open terminal and install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```


## API Usage

### 1. `/simple/price` API

- **Endpoint**: `https://api.coingecko.com/api/v3/simple/price`
- **Parameters**:
  - `ids=bitcoin`
  - `vs_currencies=usd,inr`
  - `include_24hr_change=true`
- **Example Response**:
  ```json
  {
    "bitcoin": {
      "usd": 43435,
      "inr": 3545232,
      "usd_24h_change": -2.35
    }
  }
  ```

### 2. `/search/trending` API

- **Endpoint**: `https://api.coingecko.com/api/v3/search/trending`
- **Example Response**: [Sample API Response](https://www.notion.so/Sample-API-Response-search-trending-e85623b447e94deb9da67d3b112b8761?pvs=21)

## Project Structure

```
.
├── public
├── src
│   ├── components
│   │   ├── BitcoinPrice.js
│   │   ├── TrendingCoins.js
│   │   └── YouMayAlsoLike.js
│   │   └── Other components
│   ├── styles
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```


## Future Improvements

- Add user authentication and personalized portfolio tracking.
- Integrate additional cryptocurrencies.
- Improve accessibility and performance.



## Acknowledgements

- [Coingecko API Documentation](https://www.coingecko.com/en/api)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

