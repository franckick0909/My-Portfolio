import "./Modal.scss";
import { useState } from "react";
import { FaRocket } from "react-icons/fa6";
import { motion } from "framer-motion";
import propeTypes from "prop-types";

const Modal = ({ succes, error }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <motion.div
          className="modal"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}>
          <div className="modal-content">
            <div className="fuse">
              <FaRocket className="rocket" />
            </div>

            <div className="fuse">
        
              <FaRocket className="rocketcasse" />
            </div>
            <h2 className="succes">{succes}</h2>
            <h2 className="error">{error}</h2>
            <button onClick={toggleModal} className="btn btn-1 btn-modal">
              Close Modal
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

Modal.propTypes = {
  succes: propeTypes.string,
  error: propeTypes.string,
};

export default Modal;
