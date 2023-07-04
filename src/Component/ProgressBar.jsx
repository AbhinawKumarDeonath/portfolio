import React from "react";
import styled from "styled-components";
// import Fade from 'react-reveal/Fade';

const ProgressBar = () => {
  const mySkills = [
    {
      title: "HTML",
      percentage: "90%",
    },
    
    {
      title: "CSS",
      percentage: "90%",
    },
    {
      title: "TAILWIND CSS",
      percentage: "70%",
    },
    {
      title: "JAVASCRIPT",
      percentage: "80%",
    },
    
    {
      title: "REACT",
      percentage: "70%",
    },
    {
      title: "GIT & GITHUB",
      percentage: "75%",
    },
    {
      title: "BOOTSTRAP",
      percentage: "80%",
    },
    {
      title: "CANVA",
      percentage: "90%",
    },
    {
      title: "WORDPRESS",
      percentage: "70%",
    },
    
   
    
   
  ];

  const Skills = styled.section`
    .skill-set {
      margin-top:30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-item: center;
      ${'' /* background-color:green; */}
    }
    .skill-bar {
        ${'' /* background-color: red; */}
        width:60vw;
      display: flex;
      justify-content: center;
      align-item: center;
      flex-wrap:wrap;
    }
    .skill {
     ${'' /* background-color: blue; */}
      display:flex;
      padding:1.5rem;
      flex-direction: column;
      justify-content: center;
      align-item: center;
    }
    .bar {
      background-color:${({ theme }) => theme.color.dgBack};
      width: 300px;
      border-radius: 15px;
    }
    .progress {
      background-color: ${({ theme }) => theme.color.dyBack};
      color: ${({ theme }) => theme.color.lback};
      font-weight:600;
      padding:1%;
      height:20px;
      text-align: right;
      font-size: 15px;
      border-radius: 15px;

    }
  `;
  return (
    <Skills>
      
        <div className="skill-set">
          <h3 style={{textAlign:"center"}} className="name">MY SKILLS</h3>
          <div className="skill-bar">
          

         
            {mySkills.map((item, i) => (
              <>
              {/* <Fade left> */}
              <div className="skill">
                <h3 className="about-h3">{item.title}</h3>
                <div className="bar">
                  <div className="progress" style={{ width:`${item.percentage}` }}>
                    {item.percentage}
                  </div>
                </div>
              </div>
              {/* </Fade> */}
              </>
              ))}
             
          </div>
        </div>
    </Skills>
  );
};

export default ProgressBar;
