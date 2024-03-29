import { useTranslation } from "react-i18next";
import "./LanguageSelector.scss";
import { useEffect } from "react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "Français" },
  { code: "es", lang: "Español" },
];

const LanguageSelector = () => {
  const [openLang, setOpenLang] = useState(false);
  const [arrow, setArrow] = useState(false);


  const handleOpenLang = () => {
    setOpenLang(!openLang);
    setArrow(!arrow);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <motion.div
      className="btn-container"
      initial={{ y: -100, opacity: 0 }}
      transition={{stiffness: 100}}
      animate={{ y: 0, opacity: 1 }}>
      <div className="drop-content" onClick={handleOpenLang}>
        <div className="drop-globe">
          <FaGlobe className="globe" />
          <a href="#" className="lang">
            Langues
          </a>
        </div>

        <div className="drop-icon">
          <FaChevronDown
            className={`chevron ${arrow ? "arrowTop" : ""}`}
            onClick={handleOpenLang}
          />
        </div>
      </div>

      {openLang && (
        <motion.ul
          className={`lang-container ${openLang ? "open" : ""}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 36,
            transition: { stiffness: 80, delayChildren: 0.5 },
          }}
          exit={{ y: -10, opacity: 0, transition: { duration: 0.5 } }}>
          {languages.map((lng) => (
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={lng.code}
              className={`drop-element ${
                lng.code === i18n.language ? "selected" : ""
              }`}
              onClick={() => changeLanguage(lng.code)}>
              {lng.lang}
            </motion.li>
          ))}
        </motion.ul>
      )}
      {/* <div className="drop-element"></div> */}
    </motion.div>
    // <div className={`btn-container ${openLang ? "open" : "close"}`}>
    //   <FaGlobe className="earth-icon" onClick={handleOpenLang} />

    //     {openLang && (
    //       <div className="lang-container">
    //         {languages.map((lng) => (
    //           <button
    //             key={lng.code}
    //             className={`btn-lang ${
    //               lng.code === i18n.language ? "selected" : ""
    //             }`}
    //             onClick={() => changeLanguage(lng.code)}>
    //             {lng.lang}
    //           </button>
    //         ))}
    //       </div>
    //     )}
    // </div>
  );
};

export default LanguageSelector;

{
  /* {languages.map((lng) => (
    //     <button
    //       key={lng.code}
    //       className={`btn-lang ${lng.code === i18n.language ? "selected" : ""}`}
    //       onClick={() => changeLanguage(lng.code)}>
    //       {lng.lang}
    //     </button>
    //   ))}
    </div> */
}
