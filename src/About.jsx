import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"
import AboutExp from "./Component/AboutExp";
import { MdOutlineFileDownload } from "react-icons/md";
import ProgressBar from "./Component/ProgressBar";
import TimeLine from "./Component/TimeLine";

const About = () => {
  const AboutDiv = styled.section`
    .about-section {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    .about-div {
      width: 40vw;
      ${"" /* background-color: green; */}
    }
    .experiance {
      display: flex;
      ${"" /* background-color: green; */}
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      width: 40vw;
    }
    .exp-div {
      ${"" /* background-color:green; */};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px;
      ${'' /* padding: 10px; */}
      border: 2px solid ${({ theme }) => theme.color.dgBack};
      height: 250px;
      width:200px;
      text-align:center;
      transition: 0.5s ease-in-out;
    }
    .exp-div: hover {
      border: 2px solid ${({ theme }) => theme.color.dyBack};
      transform: scaleY(1.1);
    }
    .progress, .timeline {
      display: flex;
      flex-wrap:wrap;
      align-items: center;
      justify-content: center;
    }
    .timeline {
      margin-top: 4rem;
      margin-bottom:4rem;
    }
    .exp-topic{
      color:${({ theme }) => theme.color.lback};
      text-align: center;
    }
    @media only screen and (max-width: 767px) {
      .about-section {
        width:100vw;
      }
      .about-div
      {
        margin:20px;
        text-align:center;
        width:100%
         }
         .intro{
          font-size:18px;
         }
         .resumeBox
    {
     
       display: flex;
      align-items: center;
      justify-content: center;
    }
    .exp-div{
      height: 120px;
      width:80px;

    }
    .experiance {
      margin-top:20px;
      width:100%;
    }
    .exp-topic{
      font-size:10px;
    }

    
    }
  `;
  return (
    <AboutDiv>
      <motion.div className="project-div"
       initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
        <h1 className="name">About-me</h1>
        <div className="all-project">
          <div className="about-section">
            <div className="about-div">
             
              <p className="intro">
              As a highly skilled frontend developer, I am dedicated to crafting captivating user experiences through the seamless fusion of design and functionality. With an unwavering commitment to innovation, I strive to bring visions to life, pushing the boundaries of web development to create immersive digital journeys that captivate, engage, and inspire.
              </p>
              <div className="resumeBox">
              <a href="Abhinaw Ku Deonath.pdf" className="resume" download="Abhinaw Ku Deonath.pdf">
                  Download CV
                  <MdOutlineFileDownload />
                </a>
              </div>
            </div>
            <div className="experiance">
              <AboutExp />
            </div>
          </div>
          <div className="progress">
            <ProgressBar />
          </div>
          <div className="timeline">
            <TimeLine />
          </div>
        </div>
      </motion.div>
    </AboutDiv>
  );
};

export default About;
