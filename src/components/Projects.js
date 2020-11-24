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
      </div>
    );
  }
}

export default Projects;
