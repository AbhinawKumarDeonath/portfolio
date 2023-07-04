import React from "react";
import { BiLink } from "react-icons/bi";
// import Fade from 'react-reveal/Fade';

function MyProject() {
  const projectDetail = [
    {
      backImage: "./images/abhi.png",
      webSite: "https://abhinawblog.netlify.app/",
    },
    {
      backImage: "./images/blog.png",
      webSite: "https://abhinawblog.netlify.app/",
    },
    {
      backImage: "./images/portfolio.png",
      webSite: "https://abhinawdeonath.netlify.app/",
    },
    {
      backImage: "./images/zip.png",
      webSite: "https://zipconverter.netlify.app/",
    },
  
   
   
  ];
  return (
    <>
    <>
    {/* <Fade left> */}
      {projectDetail.map((items, i) => (
        <div className="projectBack" style={{backgroundImage:`url(${items.backImage})` , backgroundRepeat:'no-repeat',backgroundSize: "cover"}}>
          <div className="projectBox">
            <a href={items.webSite} className="projectLink" target="_blank">
              <BiLink />
            </a>
          </div>
        </div>
      ))}
      {/* </Fade> */}
      </>
    </>
  );
}

export default MyProject;
