import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup"); // redirects to /signup
  };
  return (
    <div className="container mt-5 ">
      <div className="row text-center">
        <h1 className="mb-5 mt-5">The StatzHub Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-2 mt-5">
          <img src="\media\images\smallcaseLogo.png" />
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Thematic investing platform that
            <br />
            helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-2 mt-5">
          <img
            src="\media\images\StatzHub_Fund_House.png"
            style={{ width: "250px", height: "60px" }}
          />
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-2 mt-5">
          <img
            src="\media\images\sensibullLogo.svg"
            style={{ width: "250px", height: "60px" }}
          />
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-2 mt-5">
          <img
            src="\media\images\streakLogo.png"
            style={{ width: "250px", height: "60px" }}
          />
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-2 mt-5">
          <img
            src="\media\images\dittoLogo.png"
            style={{ width: "250px", height: "60px" }}
          />
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>
        <div className="col-4 p-2 mt-5">
          <img src="\media\images\tijori-logo.png" />
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Investment research platform <br /> that offers detailed insights on
            stocks,
            <br />
            sectors, supply chains, and more.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignup}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
