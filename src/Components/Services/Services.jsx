import React, { useContext } from "react";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import "./Services.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import Resume from "./resume.pdf";

function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Skills</span>
        <span></span>
        <spane>
          Full-stack Developer with experience in React, Next.js, JavaScript,
          Node.js, <br /> C#/.NET, HTML/CSS, React Native, TypeScript, WordPress
          <br />
          MySQL, MongoDB, AWS, Azure, CI/CD, Docker and Git.
          <br />
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Web Development"}
            detail={"HTML, CSS, JavaScript, React"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"App Development"}
            detail={"React Native"}
          />{" "}
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          {" "}
          <Card
            emoji={Humble}
            heading={"Backend and Database"}
            detail={
              "C#/.NET, Node.js, Express.js, MySQL, MongoDB and REST APIs  "
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
