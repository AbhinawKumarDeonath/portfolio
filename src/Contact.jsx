import React, { useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";

const Contact = () => {
  const ContactStyle = styled.section`
    .hide {
      display: none;
    }
    .show {
      display: block;
      position: fixed;
      top: 150px;
      ${"" /* background-color:green; */}
      color:white;
      ${"" /* width:200px; */}
      text-align:center;
      border-radius: 20px;
      text-transform: uppercase;
    }
    .not-submitted {
      position: fixed;
      top: 150px;
      display: block;
      ${"" /* background-color:red; */}
      border-radius:20px;
      color: white;
      width: 200px;
      text-align: center;
      text-transform: uppercase;
    }
    .form-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-item: center;
      ${"" /* background-color:orange; */}
      ${'' /* height:60vh; */}
    }
    .input-box {
      background-color: ${({ theme }) => theme.color.lback};
      width: 40rem;
      height: 2.9rem;
      border: 2px solid ${({ theme }) => theme.color.dyBack};
      text-align: center;
      font-size: 16px;
      border-radius: 20px;
      margin: 10px;
    }
    .input-box:focus {
      border: 2px solid ${({ theme }) => theme.color.dyBack};
    }
    .btn {
      background-color: ${({ theme }) => theme.color.dyBack};
      color: ${({ theme }) => theme.color.lback};
      text-transform: uppercase;
    }
    .btn:hover {
      background-color: #05afffd4;
    }
    .contact-box {
      display:flex;
      justify-content:center;
      align-item:center;
      ${'' /* background-color:green; */}
      margin-top:50px;
     
    }
    .contact-json {
      width:500px;
      height:500px;
    }
    @media only screen and (min-width: 767px) and (max-width:1023px) {
      .input-box {
        width: 20rem;
        height: 2.3rem;
      }
      .contact-json {
      width:350px;
      height:350px;
    }
      


    }
    @media only screen and (max-width: 767px) {
      .input-box {
        width: 20rem;
        height: 2.3rem;
      }
      .show {
        top:110px;
      }
      .contact-box {
      display:flex;
      justify-content:center;
      align-item:center;
      flex-direction:column;
      ${'' /* background-color:green; */}
      margin-top:50px
    }
    .contact-json {
      width:300px;
      height:300px;
    }
    }
  `;

  const [blankText, setBlankText] = useState("");
  const [display, setDisplay] = useState("hide");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qvss09b",
        "template_wk0znfj",
        form.current,
        "lcEUyg-jDjq7Xh3w-"
      )
      .then(
        (result) => {
          console.log(result.status);
          console.log("submitted");
          setDisplay("show");
          setBlankText(
            "https://assets2.lottiefiles.com/packages/lf20_v1rnvv8r.json"
          );
          setTimeout(() => {
            refreshPage();
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          console.log("not submitted");
          // refreshPage();
          setDisplay("not-submitted");
          setBlankText(
            "https://assets3.lottiefiles.com/packages/lf20_S228akbLFU.json"
          );
          setTimeout(() => {
            refreshPage();
          }, 3000);
        }
      );
    const refreshPage = () => {
      window.location.reload(false);
    };
  };
  return (
    <ContactStyle>
      <motion.div className="project-div">
        <h2 className="name">contact</h2>
        <div className={display}>
          <Player
            autoplay
            loop
            src={blankText}
            //  background="#091B2A"
            style={{ height: "100px", width: "100px" }}
          ></Player>
        </div>

        <div className="contact-box">

       

        <form ref={form} onSubmit={sendEmail} className="form-div">
          <input
            className="input-box"
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
          />

          <input
            className="input-box"
            type="email"
            name="user_email"
            placeholder="Email ID"
            required
          />

          <textarea
            className="input-box"
            name="message"
            placeholder="Message"
            required
          />
          <input className="input-box btn" type="submit" value="Send" />
        </form>

        <div className="contact">
          <Player
          autoplay
          loop
          src={"https://assets10.lottiefiles.com/packages/lf20_in4cufsz.json"}
         
          className="contact-json"
          >
          </Player>
        </div>
        </div>
      </motion.div>
    </ContactStyle>
  );
};

export default Contact;
