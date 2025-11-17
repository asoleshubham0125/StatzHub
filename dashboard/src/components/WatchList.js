import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
  SubdirectoryArrowLeft,
  WbTwighlight,
} from "@mui/icons-material";
import { fromJSON } from "postcss";
import { space } from "postcss/lib/list";
import { DoughnutChart } from "./DoughnutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setWshowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setWshowWatchListActions(true);
  };

  const handleMouseLeave = (e) => {
    setWshowWatchListActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
        </div>
        <span className="price">{stock.price}</span>
      </div>
      {showWatchListActions && <WatchListAction uid={stock.name} />}
    </li>
  );
};

const WatchListAction = ({ uid }) => {
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);
  const trySell = async () => {
    try {
      const res = await fetch("http://localhost:3002/allHoldings");
      const holdings = await res.json();

      // calculate total qty for this stock
      const total = holdings
        .filter((h) => h.name === uid)
        .reduce((sum, h) => sum + h.qty, 0);

      if (total <= 0) {
        alert("You don't own this stock to sell.");
        return;
      }

      // open sell window
      openSellWindow(uid);
    } catch (err) {
      console.error(err);
      alert("Error checking holdings!");
    }
  };
  return (
    <samp className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          onTransitionComponent={Grow}
        >
          <button className="buy" onClick={() => openBuyWindow(uid)}>
            Buy
          </button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          onTransitionComponent={Grow}
        >
          <button className="sell" onClick={trySell}>
            Sell
          </button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          onTransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip
          title="More"
          placement="top"
          arrow
          onTransitionComponent={Grow}
        >
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </samp>
  );
};
