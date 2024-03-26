import "./Experience.scss";
import icon1 from "../../assets/icons/mortier.png";
import icon2 from "../../assets/icons/pinceau.png";
import icon3 from "../../assets/icons/OpenClassrooms.png";
import icon4 from "../../assets/icons/cropped-logo.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Experience = () => {

  const variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

      const { t } = useTranslation();

  return (
    <motion.div className="container">
      <h1>{t("experience")}</h1>

      <motion.div
        className="timeline"
        variants={variants}
        initial="initial"
        whileInView="animate">
        <motion.div
          className="timeline__container left-container"
          variants={variants}>
          <img src={icon1} alt="" />
          <div className="text">
            <h2>BAC PRO Mécanique Auto</h2>
            <small>1994 - 1996</small>
            <p>Lycée Professionnel Gaspard Monge - Savigny/Orge (91)</p>
            <span className="left-container-arrow"></span>
          </div>
        </motion.div>
        <motion.div
          className="timeline__container right-container"
          variants={variants}>
          <img src={icon2} alt="" />
          <div className="text">
            <h2>Taglio Application</h2>
            <small>2003 - 2010</small>
            <p>
              Traitement de surface et Thermo laquage - Technicien de contrôle
              qualité
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </motion.div>
        <motion.div
          className="timeline__container left-container"
          variants={variants}>
          <img src={icon3} alt="" />
          <div className="text">
            <h2>Formation OpenClassrooms</h2>
            <small>2023 - 2024</small>
            <p>
              Intégrateur Web - Développeur Front-End -{" "}
              <span>Reconversion professionnelle</span>
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </motion.div>
        <motion.div
          className="timeline__container right-container"
          variants={variants}>
          <img src={icon4} alt="" />
          <div className="text">
            <h2>Les Ateliers du goût</h2>
            <small>2010 - 2022</small>
            <p>Agroalimentaire - Magasinier Cariste</p>
            <span className="right-container-arrow"></span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
