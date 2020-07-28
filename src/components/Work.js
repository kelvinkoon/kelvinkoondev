import React, { Component } from "react";
import WorkItem from "../components/WorkItem";

import WorkData from "../data/work.json";

class Work extends Component {
  render() {
    return (
      <div>
        <p className="title">Work</p>
        {WorkData.map((workDetail, index) => {
          return <WorkItem work={workDetail}></WorkItem>;
        })}
      </div>
    );
  }
}

export default Work;
