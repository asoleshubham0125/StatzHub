import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
  openSellWindow: () => {},
  closeSellWindow: () => {},
  refreshHoldings: () => {},
  reloadHoldings: false,
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  const [selectedStockUID, setSelectedStockUID] = useState("");

  const [reloadHoldings, setReloadHoldings] = useState(false);

  const [reloadOrders, setReloadOrders] = useState(false);

  const refreshOrders = () => {
    setReloadOrders((p) => !p);
  };

  const refreshHoldings = () => {
    setReloadHoldings((prev) => !prev);
  };

  const openBuyWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsSellWindowOpen(false);
    setIsBuyWindowOpen(true);
  };

  const closeBuyWindow = () => setIsBuyWindowOpen(false);

  const openSellWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(true);
  };

  const closeSellWindow = () => setIsSellWindowOpen(false);

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow,
        refreshHoldings,
        reloadHoldings,
        refreshOrders,
        reloadOrders,
      }}
    >
      {props.children}

      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
