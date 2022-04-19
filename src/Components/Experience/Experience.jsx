import "./Experience.css";
import React from "react";

function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="achievement">
        {/* darkMode */}
        <div className="circle">1+</div>
        <span>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">8+</div>
        <span>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">2+</div>
        <span>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
}

export default Experience;
