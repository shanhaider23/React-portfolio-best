import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

function Intro() {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className=" intro">
      <div className="i-left">
        <div className="i-name">
          {" "}
          <span style={{ color: darkMode ? "white" : "" }}>Hi, I Am</span>
          <span> Shan-e-Haider</span>{" "}
          <span>
            {" "}
            Full-stack Developer with good understanding of React, React Native,
            <br />
            Next.js, Typescript, JavaScript, Node.js, C#/.NET, HTML/CSS, MySQL,{" "}
            <br /> MongoDB, AWS, and Git.{" "}
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/shanhaider23">
            <img src={Github} alt="Git" />
          </a>
          <a href="https://www.linkedin.com/in/shan-e-haider-bukhari-66316526/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <div className="f-crown">
            <FloatinDiv img={crown} text1="Web" text2="Developer" />
          </div>
        </motion.div>
        <motion.div
          initial={{ left: "23rem", top: "20rem" }}
          whileInView={{ left: "6rem" }}
          transition={transition}
          className="floating-div"
        >
          <div className="f-thum">
            {" "}
            <FloatinDiv img={thumbup} text1="App" text2="Developer" />
          </div>
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
