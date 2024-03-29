import "./NavbarMobile.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import Links from "../Links/Links";
import Togglenav from "../Togglenav/Togglenav";

const NavbarMobile = () => {

  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    open: {
      clipPath: "circle(1200px at 100% -10%)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    close: {
      clipPath: "circle(10px at 100% -10%)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 100,
        damping: 30,
      },
    },
  };

  return (
    <motion.div className="navbarMobile" animate={isOpen ? "open" : "close"}>
      <motion.div className="bg" variants={circleVariants}>
        <Links />
      </motion.div>

      <Togglenav setIsOpen={setIsOpen} />
    </motion.div>
  );
};

export default NavbarMobile;