import React from "react";
import Darkmode from "./Darkmode";
// react icons-start
import { FaUserCircle } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { TiHome } from "react-icons/ti";

// react icons-end

import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Footer = () => {
  const Nav = styled.section`
  
  .navBar
  {
    width:100vw;
    background-color:${({theme})=> theme.color.dBack};
    position:fixed;
    bottom:0; 
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .navBar-link
  {

    display:flex;
    ${'' /* background-color:white; */}
  }
  .navlink {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    font-size: 25px;
    margin: 10px;
    background-color:${({theme})=> theme.color.dyBack};
    border-radius: 50%;
    color: #212226;
    border:3px solid #191D2B;
    transition: 0.4s ease-in-out;
}
a.navlink.active
{
  border:3px solid ${({theme})=> theme.color.lback};
  color: ${({theme})=> theme.color.lback};
}

  `
  return (
    <Nav>
      <div className="navBar">
        <div className="navBar-link">
          <div className="navlinks">
            <NavLink to="/" className="navlink">
              <TiHome />
            </NavLink>
          </div>
          <div className="navlinks">
            <NavLink to="/about"  className="navlink">
              <FaUserCircle />
            </NavLink>
          </div>
          <div className="navlinks">
            <NavLink to="/project"  className="navlink">
              <MdWork />
            </NavLink>
          </div>
          <div className="navlinks">
            <NavLink to="/contact"  className="navlink">
              <HiMail />
            </NavLink>
          </div>
        </div>
      </div>
      <Darkmode/>
    </Nav>
  );
  
};


export default Footer;
