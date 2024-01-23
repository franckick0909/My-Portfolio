import "./Heading.scss";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Heading = ({ text }) => {
  const headingVariants = {
    initial: {
      opacity: 0.1,
      x: -100,
    },
    animate: {
      x: 50,
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <motion.div
      className="heading"
      variants={headingVariants}
      initial="initial"
      animate="animate">
      {text}
    </motion.div>
  );
};
Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
