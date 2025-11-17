import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <Link to="/">
              <img
                src="media/images/statzhub_logo.png"
                style={{ width: "50%" }}
                alt="StatzHublogo"
              />
            </Link>
            <p style={{ fontSize: "14px" }}>
              &copy; 2010 - 2025, StatzHub Broking Ltd.
              <br></br>All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>
              <b>Company</b>
            </p>
            <a href="" className="custom-link">
              About
            </a>
            <br />
            <a href="" className="custom-link">
              Products
            </a>
            <br />
            <a href="" className="custom-link">
              Pricing
            </a>
            <br />
            <a href="" className="custom-link">
              Referral programme
            </a>
            <br />
            <a href="" className="custom-link">
              Careers
            </a>
            <br />
            <a href="" className="custom-link">
              StatzHub.tech
            </a>
            <br />
            <a href="" className="custom-link">
              Press & media
            </a>
            <br />
            <a href="" className="custom-link">
              StatzHub cares (CSR)
            </a>
            <br />
          </div>
          <div className="col">
            <p>
              <b>Support</b>
            </p>
            <a href="" className="custom-link">
              Contact
            </a>
            <br />
            <a href="" className="custom-link">
              Support portal
            </a>
            <br />
            <a href="" className="custom-link">
              Z-Connect blog
            </a>
            <br />
            <a href="" className="custom-link">
              List of charges
            </a>
            <br />
            <a href="" className="custom-link">
              Downloads & resources
            </a>
            <br />
          </div>
          <div className="col">
            <p>
              <b>Account</b>
            </p>
            <a href="" className="custom-link">
              Open an account
            </a>
            <br />
            <a href="" className="custom-link">
              Fund transfer
            </a>
            <br />
            <a href="" className="custom-link">
              60 day challenge
            </a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            StatzHub Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through StatzHub Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019 Registered Address: StatzHub Broking Ltd., #153/154,
            4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
            4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to
            complaints@StatzHub.com, for DP related to dp@StatzHub.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of StatzHub and offering such services, please
            create a ticket here.
          </p>
          <p
            className="text-center"
            style={{ fontSize: "14px", color: "gray" }}
          >
            <em>
              This is a student-built clone of{" "}
              <a href="https://zerodha.com/" style={{ textDecoration: "none" }}>
                Zerodha
              </a>{" "}
              for learning and portfolio purposes.
            </em>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
