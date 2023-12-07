import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import devLogo from "../../img/devlogo.png";
import uxLogo from "../../img/uxlogo.png";
import designLogo from "../../img/designlogo.png";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const serviceCards = [
  {
    logo: designLogo,
    heading: "Design",
    detail: "Adobe Illustrator, Photoshop"
  },
  {
    logo: devLogo,
    heading: "Developer",
    detail: "Html, Css, JavaScript, React"
  },
  {
    logo: uxLogo,
    heading: "UI/UX",
    detail: "Figma, Adobe XD",
    color: "rgba(252, 166, 31, 0.45)"
  }
];

const transition = {
  duration: 1,
  type: "spring",
};

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="awesome">
        <span style={{ color: "white" }}>My</span>
        <span>services</span>
        <span>
          Let's discuss how we can collaborate to bring your vision to life. Whether you're launching a new project
          <br />
          or seeking to enhance an existing one, I'm here to turn your ideas into reality
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        {serviceCards.map((card, index) => (
          <motion.div
            key={index}
            initial={index === 0 ? { left: "25rem" } : index === 1 ? { left: "-11rem", top: "12rem" } : { top: "19rem", left: "25rem" }}
            whileInView={{ left: index === 0 ? "14rem" : index === 1 ? "-4rem" : "12rem" }}
            transition={transition}
          >
            <Card {...card} />
          </motion.div>
        ))}
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;
