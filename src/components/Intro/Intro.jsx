import "./Intro.css";
import my2 from "../../img/my2.png";
import react from "../../img/react.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {

  const transition = { duration: 2, type: "spring" };




  return (
    <div className="Intro" id="Intro">
     
      <div className="i-left">
        <div className="i-name">
          <span style={{ color:"white" }}>Hi! I Am</span>
          <span>Jahid Hasan Emon</span>
          <span>
          Frontend Developer with a passion for web design and development. Dedicated to delivering high-quality work and creating exceptional user experiences. Proficient in leveraging cutting-edge technologies to bring innovative ideas to life
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/0emon0"target="_blank"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/jahidhasan00/"target="_blank"> <img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/realjahidhasan/"target="_blank"><img src={Instagram} alt="" /></a>
          
         
          
        </div>
      </div>
      {/* right image  */}
      <div className="i-right">
       
        <img src={my2} width="800px" alt="" />
    
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={react}
          alt=""
        />


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
};

export default Intro;
