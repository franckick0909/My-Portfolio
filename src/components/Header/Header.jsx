import Logo from "../Logo/Logo";
import "./Header.scss";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import { motion } from "framer-motion";

const Header = () => {

    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 68) {
                setBg(true);
            } else {
                setBg(false);
            }
        });
    });

    return (
      <header className={bg ? "header active" : "header"}>
        <Logo />
        <Navbar />
        <motion.a
          href="#Contact"
          className="btn btn-1 linkContact"
          initial={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", delay: 1, stiffness: 100, damping: 20 }}
          animate={{ x: 0, opacity: 1 }}>
          Contact Me
        </motion.a>
        <NavbarMobile />
      </header>
    );
};

export default Header;