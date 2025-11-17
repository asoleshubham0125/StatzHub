import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { reloadOrders } = useContext(GeneralContext);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setOrders(res.data);
    });
  }, [reloadOrders]);

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => {
              const isBuy = order.mode === "BUY";
              const modeClass = isBuy ? "profit" : "loss";

              return (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price.toFixed(2)}</td>

                  <td className={modeClass} style={{ fontWeight: "600" }}>
                    {order.mode}
                  </td>

                  <td>
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleString()
                      : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
