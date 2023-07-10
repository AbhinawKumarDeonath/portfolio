import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
const Home = () => {

  // const resume =()=>{

  // }
  const HomeStyle = styled.section`
   .name 
   {
    font-family: 'Bruno Ace', cursive;
    font-size:30px;
   }
   .hello
   {
    width:200px;
    object-fit:cover;
   }
   
    .home {
      display: flex;
      ${'' /* background: linear-gradient(
        75deg,
        ${({ theme }) => theme.color.dyBack} 0%,
        ${({ theme }) => theme.color.dyBack} 25%,
        transparent 25%,
        transparent 100%
      ); */}
      background-repeat: no-repeat;
      justify-content: center;
      align-items: center;
      height: 80vh;
    }
    .photoDiv {
      transition: 0.4s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
     background: linear-gradient(
        75deg,
        ${({ theme }) => theme.color.dyBack} 0%,
        ${({ theme }) => theme.color.dyBack} 40%,
        transparent 25%,
        transparent 100%
      );
      ${'' /* background-color:red; */}
      height: 100vh;
    }
    .homePhoto {
      display: flex;
      align-items: center;
      justify-content: center;
      ${"" /* background-color:purple; */}
    }
    .proimg {
      width: 80%;
    }
    .homeDetail {
      width: 60vw;
    }
    .detailIntro {
      padding: 30px;
      margin:80px;
    }
    .spanName {
      font-size: ${({theme})=>theme.fontSize.h1font};
      font-weight:${({theme})=>theme.fontWeight.h1weight};
    }

    ${'' /* tablet responsive */}
    @media only screen and (min-width: 767px) and (max-width: 1023px) {
      
      .homeDetail {
      width: 100%;
    
    }
    .detailIntro{
      margin:0;
    }


    }

    ${'' /* mobile responsive */}
    @media only screen and (max-width: 767px) {
      .name {
        font-size:22px;
      }
      .home{
        flex-direction:column-reverse;
        background: none;
        height:100%;
      }
      .photoDiv {
      height: 100%;
      width:100vw;
      background: linear-gradient(
        0deg,
        ${({ theme }) => theme.color.dyBack} 0%,
        ${({ theme }) => theme.color.dyBack} 50%,
        transparent 25%,
        transparent 100%
      );
    }
    .intro{
      font-size:15px;
    }
    .homePhoto{
      margin-top:20px;
    }
    .proimg {
     height:280px;
     width:280px
    }
      .homeDetail {
      width: 100vw;
      text-align:center;
    }
    .detailIntro {
      padding: 0px;
      margin:30px;
    }
    .resumeBox
    {
     
       display: flex;
      align-items: center;
      justify-content: center;
     
    }
    .spanName , .name{
      font-size:25px;
    }
}
   

    
  `;
  return (
    <HomeStyle>
      <motion.div className="home"
      initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}

      >
        <div className="photoDiv">
          <motion.div className="homePhoto">
            <img className="proimg" src="./images/abhinaw profile.png" alt="" 

            />
          </motion.div>
        </div>
        <div className="homeDetail">
          <div className="detailIntro">
          
            <p className="intro">
            
              <span className="spanName">
             
              Hi &#128075;, <br /> I'm Abhinaw Deonath <br /><span className="name">Frontend Devloper</span>.{" "}
              </span>
              <br />  with a flair for creating stunning and intuitive user interfaces. With a keen eye for design and expertise in HTML, CSS, JavaScript and React. I specialize in bringing websites to life, ensuring seamless user experiences and captivating visuals. Let's collaborate and make the web a more beautiful and engaging place together!
              <br />
              <div className="resumeBox">
                <a href="Abhinaw Ku Deonath.pdf" className="resume" download="Abhinaw Ku Deonath.pdf">
                  Download CV
                  <MdOutlineFileDownload />
                </a>
                
              </div>
            </p>
          </div>
        </div>
      </motion.div>
    </HomeStyle>
  );
};

export default Home;
