import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import p1 from "../../img/p1.png";
import p2 from "../../img/p2.png";
import p3 from "../../img/p3.png";
import p4 from "../../img/p4.png";
const Portfolio = () => {

  return (
    <div className="portfolio" id="portfolio">
   
      <span style={{color: 'white'}}>Recent Projects</span>
      <span>Portfolio</span>

     
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={p1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p3}   alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
