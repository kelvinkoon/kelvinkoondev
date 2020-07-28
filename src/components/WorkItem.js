import React from "react";

const WorkItem = ({ work }) => {
  return (
    <div className="pt-1 pb-3">
      <h4>
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="worktitle"
        >
          {work.company}
        </a>
      </h4>
      <p>
        <b>{work.position}</b>
        <br /> <span className="label">{work.date}</span>
        <br />
        {work.description}
      </p>
    </div>
  );
};

export default WorkItem;
