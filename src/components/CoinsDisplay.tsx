import React from "react";
import { Denominations } from "../utils/coins";

const coinsForDisplay = [
  {
    value: 0,
    id: "1c",
    label: "1¢",
    img: "img/1c.jpg",
    alt: "One cent",
  },
  {
    value: 0,
    id: "2c",
    label: "2¢",
    img: "img/2c.jpg",
    alt: "Two cents",
  },
  {
    value: 0,
    id: "5c",
    label: "5¢",
    img: "img/5c.jpg",
    alt: "Five cents",
  },
  {
    value: 0,
    id: "10c",
    label: "10¢",
    img: "img/10c.jpg",
    alt: "Ten cents",
  },
  {
    value: 0,
    id: "20c",
    label: "20¢",
    img: "img/20c.jpg",
    alt: "One cent",
  },
  {
    value: 0,
    id: "50c",
    label: "50¢",
    img: "img/50c.jpg",
    alt: "Fifty cents",
  },
  {
    value: 0,
    id: "1d",
    label: "1$",
    img: "img/1s.jpg",
    alt: "One dollar",
  },

  {
    value: 0,
    id: "2d",
    label: "2$",
    img: "img/2s.jpg",
    alt: "Two dollar",
  },
] as const;

type DisplayCoin = {
  value: number;
  id: keyof Denominations;
  label: string;
  img: string;
  alt: string;
};
const Coin = ({ coin }: { coin: DisplayCoin }) => (
  <div className="col-sm-6 col-md-4 col-lg-3">
    <h2 className="text-center">{coin.label}</h2>
    <img
      src={coin.img}
      alt={coin.alt}
      className="coinImg img-fluid img-thumbnail"
    />
    <p className="coin lead text-center" id="1c-output">
      {coin.value}
    </p>
  </div>
);

const CoinsDisplay = ({ coins }: { coins: Denominations }) => {
  console.log({ coins, coinsForDisplay }, "coinsdisplay");
  return (
    <div>
      <div>
        <div className="row">
          {coinsForDisplay
            .filter((c) => coins[c.id] > 0)
            .map((coin) => (
              <Coin coin={{ ...coin, value: coins[coin.id] }} key={coin.id} />
            ))}
          {/* <div className="col-sm-6 col-md-4 col-lg-3">
            <h2 className="text-center">1&#162;</h2>
            <img
              src="img/1c.jpg"
              alt="One cent"
              className="coinImg img-fluid img-thumbnail"
            />
            <p className="coin lead text-center" id="1c-output"></p>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <h2 className="text-center">2&#162;</h2>
            <img
              src="img/2c.jpg"
              alt="Two cents"
              className="coinImg img-fluid img-thumbnail"
            />
            <p className="coin lead text-center" id="2c-output"></p>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <h2 className="text-center">5&#162;</h2>
            <img
              src="img/5c.jpg"
              alt="Five cents"
              className="coinImg img-fluid img-thumbnail"
            />
            <p className="coin lead text-center" id="5c-output"></p>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <h2 className="text-center">10&#162;</h2>
            <img
              src="img/10c.jpg"
              alt="10 cents"
              className="coinImg img-fluid img-thumbnail"
            />
            <p className="coin lead text-center" id="10c-output"></p>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <h2 className="text-center">20&#162;</h2>
            <img
              src="img/20c.jpg"
              alt="Twenty cents"
              className="coinImg img-fluid img-thumbnail"
            />
            <p className="coin lead text-center" id="20c-output"></p>
          </div> */}

          {/* <div className="col-sm-6 col-md-4 col-lg-3">
            <h2 className="text-center">50&#162;</h2>
            <img
              src="img/50c.jpg"
              alt="Fifty cents"
              className="coinImg img-fluid img-thumbnail"
            />
            <p className="coin lead text-center" id="50c-output"></p>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <h2 className="text-center">1 &#36;</h2>
            <img
              src="img/1S.jpg"
              alt="One dollar"
              className="coinImg img-fluid img-thumbnail"
            />
            <p className="coin lead text-center" id="1s-output"></p>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <h2 className="text-center">2 &#36;</h2>
            <img
              src="img/2s.jpg"
              alt="Two dollar"
              className="coinImg img-fluid img-thumbnail"
            />
            <p className="coin lead text-center" id="2s-output"></p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CoinsDisplay;
