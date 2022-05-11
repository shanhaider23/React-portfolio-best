import React, { useContext } from "react";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./Work.css";
import { Link } from "react-scroll";

function Work() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works on All these
          </span>
          <span>Stacks</span>
          <spane>
            I have worked with a range of technologies in the web development
            world. From back-end to front-end.
          </spane>
          <span>FRONTEND DEVELOPMENT</span>
          <span>
            React/Native, Next.js, JavaScript, Typescript, Redux HTML/CSS, SCSS,
            Bootstrap
          </span>
          <span>BACKEND DEVELOPMENT</span>
          <span>Node.js, C#/.Net</span>
          <span>DATABASE MANAGEMENT</span>
          <span>MongoDB, MySQL</span>
          <span>BACKEND DEVELOPMENT</span>
          <span>GitHub, Action, Docker, Heroku, CI/CD pipeline</span>
          <span>CLOUD SERVICES</span>
          <span>AWS, AZURE </span>
          <span>OTHERS</span>
          <span>Figma, WordPress</span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Contact</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Work;
