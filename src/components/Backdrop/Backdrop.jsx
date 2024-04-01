import "./Backdrop.scss";
import { motion } from "framer-motion"

const Backdrop = () => {
    return (
      <motion.div
        className="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    );
};

export default Backdrop;