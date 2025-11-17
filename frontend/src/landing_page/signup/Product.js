import React from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const handleProductTab = () => {
    navigate("/product");
  };
  return (
    <>
      <div className="container text-center mb-5 ml-5">
        <h2 className="mt-5">Investment options with StatzHub account</h2>

        <div className="row mt-5 justify-content-center">
          <div className="col-5 d-flex p-4">
            <img
              src="\media\images\stocks-acop.svg"
              alt="stocks"
              className="me-3"
            />
            <div className="text-start">
              <h4>Stocks</h4>
              <p className="text-muted">
                Invest in all exchange-listed securities
              </p>
            </div>
          </div>

          <div className="col-5 d-flex p-4 mb-5">
            <img
              src="\media\images\mf-acop.svg"
              alt="mutual"
              className="me-3"
            />
            <div className="text-start">
              <h4>Mutual funds</h4>
              <p className="text-muted">
                Invest in commission-free direct mutual funds
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-3 justify-content-center mb-5">
          <div className="col-5 d-flex p-4">
            <img src="\media\images\ipo-acop.svg" alt="ipo" className="me-3" />
            <div className="text-start">
              <h4>IPO</h4>
              <p className="text-muted">
                Apply to the latest IPOs instantly via UPI
              </p>
            </div>
          </div>

          <div className="col-5 d-flex p-4">
            <img src="\media\images\fo-acop.svg" alt="fno" className="me-3" />
            <div className="text-start">
              <h4>Futures & options</h4>
              <p className="text-muted">
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleProductTab}
        >
          Explore Products
        </button>
      </div>
    </>
  );
}

export default Product;
