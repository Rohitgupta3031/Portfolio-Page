import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/rohit_gupta_3031/" target="_blank" className="items" rel="noopener noreferrer">
            <FaInstagram className="icons" />
          </a>
          <a href="https://m.facebook.com" target="_blank" className="items" rel="noopener noreferrer">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/rohit-gupta-burhanpur3031/" target="_blank" className="items" rel="noopener noreferrer">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://x.com/20144Gupta" target="_blank" className="items" rel="noopener noreferrer">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/Rohitgupta3031" target="_blank" className="items" rel="noopener noreferrer">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:rohitgupta98270@gmail.com"
            target="_blank"
            className="items"
            rel="noopener noreferrer"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
