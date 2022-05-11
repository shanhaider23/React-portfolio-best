import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-linkedin";
import { Link } from "react-router-dom";

import Gitub from "@iconscout/react-unicons/icons/uil-github";

function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>shan.haider@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/shan-e-haider-bukhari-66316526/">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/shanhaider23">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
