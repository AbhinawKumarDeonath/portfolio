import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import MyProject from "./Component/MyProject";

const Project = () => {
  const ProjectStyle = styled.section`

    .project-json
    {
      width:300px;
      
    }
    .intro 
    {
    
      text-align:center;
    }
    .all-projects {
      display: flex;
      justify-content: center;
      align-items: center;
      ${"" /* background-color: red; */}
      margin-top:30px;
      flex-wrap: wrap;
      width: 100vw;
      ${"" /* background-color:orange; */}
    }
    .projectBack {
      margin: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
      height: 250px;
      object-fit: contain;
      border-radius: 20px;
      transition: 0.4s ease-in-out;
    }
    .projectBack:hover .projectBox {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.color.dyBack};
      width: inherit;
      height: inherit;
      border-radius: inherit;
    }
    .projectBox {
      display: none;
    }
    .projectLink {
      color: ${({ theme }) => theme.color.dBack};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.color.lback};
      padding: 5px;
      font-size: 40px;
      margin: 5px;
      border-radius: 50%;
    }
    .projectLink:hover {
      background-color: ${({ theme }) => theme.color.dBack};
      transition: 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      color: ${({ theme }) => theme.color.lback};
    }
    .project-div {
      margin:30px 20px;

    }

  `;
  return (
    <ProjectStyle>
      <motion.div
        className="project-div"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="name">my projects</h1>
        <Player
        className="project-json"
       
        autoplay
        loop
        src={"https://assets4.lottiefiles.com/packages/lf20_apg1cx0v.json"}>

        </Player>
        <p className="intro">
        Embarking on an exhilarating journey, I have crafted a series of awe-inspiring projects, each a testament to relentless innovation and unwavering passion. Along this transformative path, I have unlocked boundless knowledge, fueling my growth and enabling me to create projects that surpass all previous achievements in brilliance and impact.
        </p>
        <div className="all-projects">
          <MyProject />
        </div>
      </motion.div>
    </ProjectStyle>
  );
};

export default Project;
