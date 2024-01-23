import "./Portfolio.scss";
import { motion } from "framer-motion";

import dataProjet from "../../data/dataProjets.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa6";

const Portfolio = () => {

  const [filter, setFilter] = useState("all");
  const [activeButton, setActiveButton] = useState("all");
  const [Show, setShow] = useState(false);

  const filteredProjects = dataProjet.filter((project) =>
    filter === "all" ? true : project.category === filter
  );

  const handleButtonClick = (category) => {
    setFilter(category);
    setActiveButton(category);
  };

  useEffect(() => {
    setShow(true);
  }, []);
  
  const animVariants = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 20,
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

      const variants = {
        initial: {
          x: 200,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            stiffness: 100,
            damping: 100,
            duration: 0.5,
            staggerChildren: 0.1,
            delayChildren: 0.1,
          },
        },
      };

    const textVariants = {
      initial: {
        x: 100,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          stiffness: 100,
          type: "spring",
          damping: 20,
          staggerChildren: 0.15,
          delayChildren: 0.1,
        },
      },
    };

    return (
      <motion.div className="container">
        <motion.div
          className="text"
          variants={animVariants}
          initial="initial"
          whileInView="animate">
          <motion.h2 variants={animVariants}>My latest work</motion.h2>
          <motion.p className="subtitle" variants={animVariants}>
            Here are a few design projects ve worked on recently. Want to see
            more? Email me.
          </motion.p>
        </motion.div>

        <motion.div className="projetCard">
          <motion.nav
            className="projetCard__nav"
            variants={textVariants}
            initial="initial"
            whileInView="animate">
            <motion.button
              className="btn-projetCard"
              style={
                activeButton === "all"
                  ? { backgroundColor: "#F21B3F", color: "#ffffff" }
                  : {}
              }
              onClick={() => handleButtonClick("all")}
              variants={textVariants}>
              All
            </motion.button>
            <motion.button
              className="btn-projetCard"
              style={
                activeButton === "cat1"
                  ? { backgroundColor: "#F21B3F", color: "#ffffff" }
                  : {}
              }
              onClick={() => handleButtonClick("cat1")}
              variants={textVariants}>
              HTML / CSS
            </motion.button>
            <motion.button
              className="btn-projetCard"
              style={
                activeButton === "cat2"
                  ? { backgroundColor: "#F21B3F", color: "#ffffff" }
                  : {}
              }
              onClick={() => handleButtonClick("cat2")}
              variants={textVariants}>
              JavaScript
            </motion.button>
            <motion.button
              className="btn-projetCard"
              style={
                activeButton === "cat3"
                  ? { backgroundColor: "#F21B3F", color: "#ffffff" }
                  : {}
              }
              onClick={() => handleButtonClick("cat3")}
              variants={textVariants}>
              React
            </motion.button>
          </motion.nav>

          <motion.div
            className="projetCard__container"
            variants={variants}
            initial="initial"
            whileInView="animate">
            <motion.div className="card" variants={variants}>
              {filteredProjects.map((item, id) => (
                <motion.div
                  className={`card__item ${Show ? "show" : ""}`}
                  key={id}
                  variants={variants}>
                  <img
                    src={item.image}
                    alt="Captures d'écrans de mes projets"
                  />
                  <div className="card__item__content">
                    <h3>{item.name}</h3>
                    <div className="overlay">
                      <div className="overlay__content">
                        <h2 className="projetName">{item.name}</h2>
                        <Link to={item.link} className="projetLink btn btn-1">
                          Voir les projets <FaRocket />
                        </Link>
                        <Link to="/Error"/>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
};

export default Portfolio;