import "./Modal.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import propeTypes from "prop-types";

const Modal = ({ imageSrc, titleSrc, close }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">{open}</button>
      {isOpen && (
        <motion.div
          className="modal"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}>
          <div className="modal-content">

            <img src={imageSrc} alt={titleSrc} />

            <button onClick={toggleModal} className="btn btn-1 btn-modal">
              {close}
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

Modal.propTypes = {
  imageSrc: propeTypes.string.isRequired,
  titleSrc: propeTypes.string.isRequired,
  close: propeTypes.string.isRequired,
  open: propeTypes.string.isRequired,
};

export default Modal;
