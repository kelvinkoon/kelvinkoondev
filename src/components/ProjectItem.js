import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <div className="pt-1 pb-3">
      <h4>{project.name}</h4>
      <p>
        <span className="label">{project.date}</span>
        <br />
        {project.description1}
        <br />
        {project.description2}
        <br />
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          github
        </a>{" "}
        |{" "}
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.demo_type}
        </a>
      </p>
    </div>
  );
};

export default ProjectItem;
