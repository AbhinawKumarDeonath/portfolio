import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { CgDarkMode } from "react-icons/cg";


function Darkmode(){
  const [myTheme,setMyTheme]= useState("light-mode");
  const[myName , setMyName]= useState("name");

  const toggleTheme = () =>{
       myTheme=="light-mode"  ? setMyTheme("dark-mode") : setMyTheme("light-mode");
       myName=="name" ? setMyName("dark-name") : setMyName("name");
      
    };

    useEffect(() =>{
      document.body.classList=myTheme;
      document.getElementsByClassName('name').classList=myName;
 

     });
    
 

  const Darkmode = styled.section` 
  .bottonDl
  {
    
    cursor: pointer;
    height:50px;
    width:50px;
    background-color:#ffff;
    display:none;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    font-size:35px;
    position:fixed;
    top:20px;
    right:20px;
  }`
  return (
    <Darkmode>
    <div className="bottonDl" onClick={toggleTheme}>
      <CgDarkMode />
      </div>
      </Darkmode>
  )
}

export default Darkmode

