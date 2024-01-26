import "./Slider.scss";
import img1 from "../../assets/img/images/img1.jpg";
import img2 from "../../assets/img/images/img2.jpg";
import img3 from "../../assets/img/images/img3.jpg";
import img4 from "../../assets/img/images/img4.jpeg";
import scroll from "../../assets/img/images/scroll.png";
import { motion } from "framer-motion";
import Social from "../Social/Social";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/scss";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/autoplay";

const Slider = () => {

    const buttonVariants = {
      animate: {
        opacity: 0,
        y: 10,
        transition: {
          duration: 2,
          repeat: Infinity,
        },
      },
    };

    const textVariants = {
      initial: {
        opacity: 0,
        y: "-50%",
        x: "-20%",         // changé de 60% à -30%
      },
      animate: {
        opacity: 1,
        y: "-50%",
        x: "-50%",

        transition: {
          type: "spring",
          stiffness: 100,
          duration: 1,
          delay: 0.4,
          staggerChildren: 0.15,
          delayChildren: 0.15,
        },
      },
    };

    const textItemVariants = {
      initial: {
        opacity: 0,
        y: "-100%",
        x: "-50%",
      },
      animate: {
        opacity: 1,
        y: "-50%",
        x: "-50%",
        transition: {
          type: "spring",
          stiffness: 100,
          duration: 1,
          delay: 0.4,
          staggerChildren: 0.15,
          delayChildren: 0.15,
        },
      },
    };

    return (
      <div>
        <Swiper
          className="mySwiper"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}>
          <SwiperSlide className="swiperSlide">
            <motion.img
              src={img1}
              alt="coffee drink"
              className="img-swiper"
              initial={{ scale: 1, rotate: 0 }}
              whileInView={{ scale: 1.1, rotate: "2deg" }}
              transition={{ duration: 5 }}
            />
            <motion.div
              className="text"
              variants={textVariants}
              initial="initial"
              whileInView="animate">
              <Social />
              <motion.h2 className="name">FRANCK CHAPELON</motion.h2>
              <motion.img
                src={scroll}
                alt="image scroll"
                className="scroll"
                variants={buttonVariants}
                initial="initial"
                animate="animate"
              />
            </motion.div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <motion.img
              src={img2}
              alt="portable computer"
              className="img-swiper"
              initial={{ scale: 1, rotate: 0 }}
              whileInView={{ scale: 1.1, rotate: "2deg" }}
              transition={{ duration: 5 }}
            />
            <motion.div
              className="text"
              variants={textVariants}
              initial="initial"
              whileInView="animate">
              <motion.h2 className="title1">
                FRONTEND
                <motion.span> Web</motion.span>
                <motion.span> Developer</motion.span>
              </motion.h2>
              <motion.div className="buttons" variants={textVariants}>
                <motion.a href="#Contact" className="btn btn-1">
                  Hire Me
                </motion.a>
                <motion.a href="#Portfolio" className="btn btn-2">
                  See My Work
                </motion.a>
              </motion.div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <motion.img
              src={img3}
              alt="portable computer"
              className="img-swiper"
              initial={{ scale: 1, rotate: 0 }}
              whileInView={{ scale: 1.1, rotate: "2deg" }}
              transition={{ duration: 5 }}
            />
            <motion.div
              className="text"
              variants={textItemVariants}
              initial="initial"
              whileInView="animate">
              <motion.h2 className="title2">
                I Build & Design Web Interfaces.
              </motion.h2>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <motion.img
              src={img4}
              alt="earth planet code"
              className="img-swiper"
              initial={{ scale: 1, rotate: 0 }}
              whileInView={{ scale: 1.1, rotate: "2deg" }}
              transition={{ duration: 5 }}
            />
            <div className="text">
              <motion.h3
                initial={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.4,
                }}
                whileInView={{ opacity: 1, scale: 1.4 }}>
                Im a web developer based in Dordogne, France. I have a passion
                for web design and love to create for web and mobile devices.
              </motion.h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Slider;