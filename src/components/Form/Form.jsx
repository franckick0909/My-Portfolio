import "./Form.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "../Modal/Modal";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_kbq1e8s";
    const templateID = "template_l8qdthm";
    const publicKey = "GGEp8YuEf9tv4MtGV";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Franck",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        if (response.status === 200) {
            alert("Message sent successfully", response);
            <Modal succes="Message sent successfully" />;
            setShowModal(true);
        }

        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Something went wrong, please try again later", error);
        <Modal error="Something went wrong, please try again later" />;
      });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="formulaire"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}>
      <div className="input-wrapper">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="message">Message</label>
        <textarea
          rows={8}
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-1">
        Send
      </button>
    </motion.form>
  );
};

export default Form;
