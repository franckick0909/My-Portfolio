import "./Skills.scss";
import { motion } from "framer-motion";
import dataIcons from "../../data/dataIcons.json";
import { FaLink } from "react-icons/fa6";

const Skills = () => {

  const headingVariants = {
    initial: {
      opacity: 0.7,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 50,
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  const imgVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (

      <motion.div className="container">


        <motion.h2 className="title">Skills</motion.h2>
        <motion.h3 className="subtitle">My current skills</motion.h3>

        <motion.div
          className="content"
          variants={headingVariants}
          initial="initial"
          animate="animate">
          <motion.div
          className="content-skills"
          variants={imgVariants}
          initial="hidden"
          whileInView="visible">
            {dataIcons.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  className="content__item"
                  variants={imgVariants}>
                      <motion.img src={item.icon} alt={item.title} whileHover={{ scale: 1.3 }} />
                  <motion.a
                    href={item.href}
                    className="url"
                    target="_blank"
                    rel="noopener noreferrer">
                          {item.title}
                          <span><FaLink /></span>         
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
  );
};

export default Skills;
