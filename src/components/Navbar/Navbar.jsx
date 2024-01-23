import "./Navbar.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import linkTop from "../../data/data.json";

const Navbar = () => {

    const [bg, setBg] = useState(false);

    useEffect(() => {
    window.addEventListener("scroll", () => {
        return window.scrollY > 60 ? setBg(true) : setBg(false);
    });
    });

  const animVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 10,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

    return (
      <motion.div
        className="navbar"
        variants={animVariants}
        initial="initial"
        animate="animate">
        {linkTop.map((link, idx) => (
          <motion.a
            href={link.link}
            key={idx}
            className={bg ? "linktop ok" : "linktop"}
            variants={animVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}>
            {link.name}
          </motion.a>
        ))}
      </motion.div>
    );
};

export default Navbar;