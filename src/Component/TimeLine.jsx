import React from "react";
import styled from "styled-components";
import { TbSchool } from "react-icons/tb";
// import Fade from 'react-reveal/Fade';

const TimeLine = () => {
  const myTimeLine = [
    {
      year: "2017",
      degree: "high school",
      college: "loyola English medium school",
      percentage: "Score: 65%",
    },
    {
      year: "2019",
      degree: "higher secondary",
      college: "DAV public School kansabel",
      percentage: "Score: 67%",
    },
    {
      year: "2022",
      degree: "BSc (Cs)",
      college: "loyola college kunkuri",
      percentage: "Score: 81%",
    },
    {
      year: "Current",
      degree: "mca",
      college: "Rungta College of Eng BHilai",
      percentage: "pending....",
    },
  ];

  const Timeline = styled.section`
    .timeline-div {
      width: 300px;
      height: 120px;
      display: flex;
      color: white;
      justify-content: space-evenly;
      align-items: center;
      margin: 10px;
      ${"" /* background-color:red; */}
      border: 2px solid ${({ theme }) => theme.color.dgBack};
      padding: 10px;
      border-radius: 20px;
    }
    .timeline-logo {
      font-size: 30px;
      background-color: ${({ theme }) => theme.color.dgBack};
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      margin: 10px;
    }
    .common {
      font-size: 20px;
    }
    .degree {
      text-transform: uppercase;
      text-decoration: underline;
    }
    .college {
      text-transform: capitalize;
      font-size: 15px;
    }
    .year {
      font-size: 10px;
      font-weight: 600;
      background-color: ${({ theme }) => theme.color.dgBack};
      padding: 3px 8px;
      border-radius: 5px;
    }
    .percentage {
      width: 100px;
      text-align: center;
      background: ${({ theme }) => theme.color.dyBack};
      border-radius: 5px;
      font-size: 12px;
      color: ${({ theme }) => theme.color.dBack};
    }
  `;
  return (
    <Timeline>
      <h1 style={{ textAlign: "center" }} className="name">
        MY-TIMELINE
      </h1>
      <div className="timeline">
{/* 
      <Fade right> */}
      <>

    
        {myTimeLine.map((item, i) => (

          <div

            className="timeline-div"
          >
            <div className="timeline-logo">
              <TbSchool />
            </div>
            <div className="timeline-detail">
              <span className="year">{item.year}</span>
              <h2 className="common degree">{item.degree}</h2>
              <h2 className="common college">{item.college}</h2>
              <h2 className="common percentage">{item.percentage}</h2>
            </div>
          </div>
        ))}
        {/* </Fade> */}
        </>
      </div>
    </Timeline>
  );
};

export default TimeLine;
