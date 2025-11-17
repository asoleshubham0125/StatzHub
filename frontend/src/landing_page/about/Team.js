import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mb-5 mt-5 border-top">
        <h1 className="text-center mt-5">People</h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="/media/images/shubhamasole.jpeg"
            alt="Shubham Asole"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className="mt-5">Shubham Asole</h4>
          <h6>Developer – StatzHub</h6>
          <h6>Contact</h6>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8em" }}>
            <li>
              <i class="fa-regular fa-envelope"></i>{" "}
              <a
                href="mailto:asoleshubham01@gmail.com"
                style={{ textDecoration: "none" }}
                className="custom-link"
              >
                asoleshubham01@gmail.com
              </a>
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>{" "}
              <a
                href="https://www.linkedin.com/in/shubham-asole"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                className="custom-link"
              >
                linkedin.com/in/shubham-asole
              </a>
            </li>

            <li>
              <i className="fa-brands fa-github"></i>{" "}
              <a
                href="https://github.com/asoleshubham0125"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                className="custom-link"
              >
                github.com/asoleshubham0125
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 p-3 fs-5 text-muted">
          <p>
            Shubham is the creator of <b>StatzHub</b>, a platform he is building
            to simplify analytics, trading insights, and modern web experiences.
            Currently pursuing his B.Tech in Electronics and Communication
            Engineering at IIITDM Kancheepuram, he has a strong foundation in{" "}
            <b>
              software development, backend engineering, and data-driven
              applications
            </b>
            .
          </p>
          <p>
            Before starting StatzHub, Shubham worked on full-stack projects like
            <b> GoBnB, Weather Widgets</b>, and several real-time JavaScript
            applications. His technical expertise includes{" "}
            <b>
              Java, JavaScript, Python, Node.js, Express.js, React, MongoDB{" "}
            </b>
            and hands-on work in <b>Embedded Systems, and data visualization</b>
            .
          </p>
          <p>
            He previously interned as an <b>Embedded Systems Developer</b>,
            where he built automation modules, integrated sensor-driven systems,
            and worked on robotic prototypes using Python, C, and Raspberry Pi.
            Shubham also served as the<b> Hostel Affairs Coordinator </b>at
            IIITDM, managing logistics and leading operations for 1000+
            students. .
          </p>
          <p>
            Building scalable products, solving real-world problems with clean
            code, and continuous learning are what fuel him every day.
          </p>
          <p>
            When not coding, he enjoys exploring tech, creating side projects,
            and improving his development workflow.
          </p>

          <p style={{ fontSize: "14px", color: "gray" }}>
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
    </div>
  );
}

export default Team;
