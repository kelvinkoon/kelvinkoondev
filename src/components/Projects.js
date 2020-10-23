import React, { Component } from "react";
import ProjectItem from "../components/ProjectItem";

import ProjectData from "../data/projects.json";

class Projects extends Component {
  render() {
    return (
      <div>
        <p className="title">Projects</p>
        {ProjectData.map((projectDetail, index) => {
          return <ProjectItem project={projectDetail}></ProjectItem>;
        })}
        <i>
          <p>
            Also see: py-VPN,{" "}
            <a
              href="https://github.com/kelvinkoon/go-skate"
              target="_blank"
              rel="noopener noreferrer"
            >
              go-skate
            </a>
            ,{" "}
            <a
              href="https://github.com/kelvinkoon/rps-cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              rpsCV
            </a>
          </p>
        </i>
      </div>
    );
  }
}

export default Projects;
