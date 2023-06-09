import React from 'react'
import styled from 'styled-components'
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

function SocialMedia() {
   

    const Socialmedia = styled.section`
     .social-box{

        background-color: ${({ theme }) => theme.color.dyBack};
        display:flex;
        justify-content:center;
        align-item:center;
        
    }
    .social-link
    {
        display:flex;
        justify-content:center;
        align-item:center;
        font-size:30px;
        margin:5px;
        padding:3px;
        border-radius:50%;
        background-color: ${({ theme }) => theme.color.lback};;
        ${'' /* color:${({theme}) => theme.color.dBack}; */}
        transition:0.3s ease-in-out;
    }
    .social-link:hover
    {
        background-color: ${({ theme }) => theme.color.dBack};;
        color:${({theme}) => theme.color.dyBack}
            }
    .git {
      color:#8B268F;
    }
    .insta {
      color:#BD027E;
    }
    .whats {
      color: #128C7E;
    }
    .linkd {
      color: #0072b1;
    }
    `
  return (
    <Socialmedia>
    <div className="social-box">
        <a href="https://github.com/AbhinawKumarDeonath" target="_blank" rel="noreferrer" className="social-link git"><AiFillGithub /></a>
        <a href="https://www.instagram.com/heyabhinaw/" target="_blank" rel="noreferrer" className="social-link insta"><AiFillInstagram/></a>
        <a href="https://wa.me/918319054189/" target="_blank" rel="noreferrer" className="social-link whats"><IoLogoWhatsapp/></a>
        <a href="https://www.linkedin.com/in/abhinawdeonath/" rel="noreferrer" target="_blank" className="social-link linkd"><IoLogoLinkedin/></a>
    </div>

    </Socialmedia>
  )
}

export default SocialMedia
