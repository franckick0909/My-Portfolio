import { useTranslation } from "react-i18next";
import "./LanguageSelector.scss";
import { useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import { useState } from "react";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "Français" },
  { code: "es", lang: "Español" },
];

const LanguageSelector = () => {
  const [openLang, setOpenLang] = useState(false);

  const handleOpenLang = () => {
    setOpenLang(!openLang);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className={`btn-container ${openLang ? "open" : "close"}`}>
      <FaGlobe className="earth-icon" onClick={handleOpenLang} />

        {openLang && (
          <div className="lang-container">
            {languages.map((lng) => (
              <button
                key={lng.code}
                className={`btn-lang ${
                  lng.code === i18n.language ? "selected" : ""
                }`}
                onClick={() => changeLanguage(lng.code)}>
                {lng.lang}
              </button>
            ))}
          </div>
        )}
    </div>
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
