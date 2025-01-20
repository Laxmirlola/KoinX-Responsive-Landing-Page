import Slider from "react-slick";

const YouMayAlsoLike = ({ coins }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="you-may-also-like">
      <h3>You May Also Like</h3>
      <Slider {...settings}>
        {coins.map((coin) => (
          <div key={coin.item.id} className="coin-card">
            <img src={coin.item.thumb} alt={coin.item.name} />
            <p>{coin.item.name}</p>
            <p>Price: ${coin.item.price_btc.toFixed(8)} BTC</p>
            <img src={coin.item.sparkline} alt="Price Graph" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default YouMayAlsoLike;
