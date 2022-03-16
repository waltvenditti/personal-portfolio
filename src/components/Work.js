import "../styles/Work.css";
import WorkCard from "./WorkCard";
import React, { useState } from "react";

function Work() {
  const [projInfo1, setProjInfo1] = useState(
    {
      projTitle: "Project 1",
      githubLink: "https://www.zerohedge.com",
      githubLive: "https://www.economist.com",
      projDesc: "description of the project goes here."
    }
  );
  const [projInfo2, setProjInfo2] = useState(
    {
      projTitle: "Project 2",
      githubLink: "https://www.zerohedge.com",
      githubLive: "https://www.economist.com",
      projDesc: "description of the project goes here."
    }
  );
  const [projInfo3, setProjInfo3] = useState(
    {
      projTitle: "Project 3",
      githubLink: "https://www.zerohedge.com",
      githubLive: "https://www.economist.com",
      projDesc: "description of the project goes here."
    }
  );
  const [projInfo4, setProjInfo4] = useState(
    {
      projTitle: "Project 4",
      githubLink: "https://www.zerohedge.com",
      githubLive: "https://www.economist.com",
      projDesc: "description of the project goes here."
    }
  );
  const [projInfo5, setProjInfo5] = useState(
    {
      projTitle: "Project 5",
      githubLink: "https://www.zerohedge.com",
      githubLive: "https://www.economist.com",
      projDesc: "description of the project goes here."
    }
  );
  const [projInfo6, setProjInfo6] = useState(
    {
      projTitle: "Project 6",
      githubLink: "https://www.zerohedge.com",
      githubLive: "https://www.economist.com",
      projDesc: "description of the project goes here."
    }
  );

  return (
    <div className="workDiv">
      <WorkCard cardInfo={projInfo1} />
      <WorkCard cardInfo={projInfo2} />
      <WorkCard cardInfo={projInfo3} />
      <WorkCard cardInfo={projInfo4} />
      <WorkCard cardInfo={projInfo5} />
      <WorkCard cardInfo={projInfo6} />
    </div>
  );
}

export default Work;
