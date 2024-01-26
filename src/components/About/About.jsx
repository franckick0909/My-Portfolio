import "./About.scss";
import hero from "../../assets/img/images/hero.png";
import CV from "../../assets/pdf/CV Franck Chapelon.pdf";
import { motion } from "framer-motion";
import Social from "../Social/Social";

const About = () => {
  const variantsLeft = {
    hidden: {
      opacity: 0,
      x: -300,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 10,
        delay: 0.1,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  const variantsRight = {
    hidden: {
      opacity: 0,
      x: 300,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 15,
        delay: 0.1,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.section id="About" className="About">
      <motion.div className="container">
        <h1>About Me</h1>
        <motion.div
          className="left"
          variants={variantsLeft}
          initial="hidden"
          whileInView="visible">
          <motion.div
            className="imgContainer"
            whileInView={{
              scale: [0.9, 0.5, 1, 0.9],
              rotate: [0, 0, 45, 0, -45, 0],
              borderRadius: [
                "10%",
                "20%",
                "50%",
                "50%",
                "100%",
                "50%",
                "30%",
                "10%",
              ],
            }}
            transition={{ duration: 10, repeatType: "mirror" }}>
            <motion.img
              src={hero}
              alt="hero"
              className="hero"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>
          <motion.h2>
            Hi, {"I'm"} <span className="name">Franck</span>
          </motion.h2>

          <Social />
        </motion.div>
        <motion.div
          className="right"
          variants={variantsRight}
          initial="hidden"
          whileInView="visible">
          <motion.div className="wrapper">
            <motion.h3 variants={variantsRight}>Frontend developer</motion.h3>

            <motion.div className="description" variants={variantsRight}>
              <motion.p variants={variantsRight}>
                I am a frontend developer with 9 months of experience, building
                websites, and web applications. I specialize in JavaScript and
                ReactJS, which for me are the best tools for a Frontend
                developer.
              </motion.p>

              <motion.p variants={variantsRight}>
                I am currently looking for a job as a frontend developer.
              </motion.p>
              <motion.p variants={variantsRight}>
                Passionate about the IT sector for years, and the creation of
                websites, I retrained in order to flourish professionally in the
                field of web developer. I like building from scratch, and making
                beautiful, fluid animations with current new technologies.
              </motion.p>
            </motion.div>

            <motion.div className="information" variants={variantsRight}>
              <motion.table variants={variantsRight}>
                <motion.tr variants={variantsRight}>
                  <motion.td variants={variantsRight}>
                    <motion.b variants={variantsRight}>&#10003;</motion.b>
                    <motion.p>
                      <motion.span>Name</motion.span>
                    </motion.p>
                  </motion.td>
                  <motion.td>
                    <motion.p>
                      <motion.span>:</motion.span> Franck
                    </motion.p>
                  </motion.td>
                </motion.tr>

                <motion.tr variants={variantsRight}>
                  <motion.td variants={variantsRight}>
                    <motion.b>&#10003;</motion.b>
                    <motion.p variants={variantsRight}>
                      <motion.span>Last Name</motion.span>
                    </motion.p>
                  </motion.td>
                  <motion.td>
                    <motion.p>
                      <motion.span>:</motion.span> Chapelon
                    </motion.p>
                  </motion.td>
                </motion.tr>

                <motion.tr variants={variantsRight}>
                  <motion.td variants={variantsRight}>
                    <motion.b>&#10003;</motion.b>
                    <motion.p variants={variantsRight}>
                      <motion.span>Age</motion.span>
                    </motion.p>
                  </motion.td>
                  <motion.td>
                    <motion.p>
                      <motion.span>:</motion.span> 48 years
                    </motion.p>
                  </motion.td>
                </motion.tr>

                <motion.tr variants={variantsRight}>
                  <motion.td variants={variantsRight}>
                    <motion.b>&#10003;</motion.b>
                    <motion.p variants={variantsRight}>
                      <motion.span>Nationnality</motion.span>
                    </motion.p>
                  </motion.td>
                  <motion.td>
                    <motion.p>
                      <motion.span>:</motion.span> French
                    </motion.p>
                  </motion.td>
                </motion.tr>

                <motion.tr variants={variantsRight}>
                  <motion.td variants={variantsRight}>
                    <motion.b>&#10003;</motion.b>
                    <motion.p variants={variantsRight}>
                      <motion.span>Langages</motion.span>
                    </motion.p>
                  </motion.td>
                  <motion.td>
                    <motion.p>
                      <motion.span>:</motion.span> French, English
                    </motion.p>
                  </motion.td>
                </motion.tr>

                <motion.tr variants={variantsRight}>
                  <motion.td variants={variantsRight}>
                    <motion.b>&#10003;</motion.b>
                    <motion.p variants={variantsRight}>
                      <motion.span>Location</motion.span>
                    </motion.p>
                  </motion.td>
                  <motion.td>
                    <motion.p>
                      <motion.span>:</motion.span> Dordogne, France
                    </motion.p>
                  </motion.td>
                </motion.tr>

                <motion.tr variants={variantsRight}>
                  <motion.td variants={variantsRight}>
                    <motion.b>&#10003;</motion.b>
                    <motion.p variants={variantsRight}>
                      <motion.span>Freelance</motion.span>
                    </motion.p>
                  </motion.td>
                  <motion.td>
                    <motion.p>
                      <motion.span>:</motion.span> Available
                    </motion.p>
                  </motion.td>
                </motion.tr>
              </motion.table>
            </motion.div>
            <motion.div className="buttons" variants={variantsRight}>
              <motion.a href="#contact" className="btn btn-1">
                Contact Me
              </motion.a>
              <motion.a href={CV} download className="btn btn-2">
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
