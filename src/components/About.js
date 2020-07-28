import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <div className="left">
          <p>
            A 4th year Electrical Engineering student at the University of
            British Columbia. I am currently an Undergraduate Research Assistant
            at UBC NetSysLab. Previously, I was an intern at Huawei and Netgear.
          </p>
          <p>
            I'm experienced with computer networking and security, and am
            learning more about distributed computing. I also love working with
            robotics through working on the student team, UBC Thunderbots.
          </p>
          <p>
            In my free time, I enjoy photography, figure skating, and
            competitive gaming. I'm always looking for opportunities to
            volunteer with STEM outreach programs.
          </p>
        </div>
        <div className="right">
          <p className="title">About Me</p>
          <div className="external">
            <p>
              <a
                href="https://drive.google.com/file/d/12ChUf7j2rYTNrbZdDzAE9C3ZLugc_maz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume
              </a>
            </p>
            <p>
              <a
                href="https://github.com/kelvinkoon"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </p>
            <p>
              {" "}
              <a
                href="https://www.linkedin.com/in/kelvinkoon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedIn
              </a>
            </p>
          </div>
          <br />
          <p className="title">Education</p>
          <p>
            BASc. Electrical Engineering at UBC
            <br />
            <span className="label">Anticipated Graduation: May 2021</span>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
