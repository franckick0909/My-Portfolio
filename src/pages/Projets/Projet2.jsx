import "./Projet.scss";
import img1 from "../../assets/img/projects/kasa/kasa1.webp";
import img2 from "../../assets/img/projects/kasa/kasa2.webp";
import img3 from "../../assets/img/projects/kasa/kasa3.webp";
import img4 from "../../assets/img/projects/kasa/kasa4.webp";
import logo from "../../assets/img/projects/kasa/LOGO.svg";

import icon1 from "../../assets/icons/html5.png";
import icon2 from "../../assets/icons/css3.png";
import icon3 from "../../assets/icons/sass.png";
import icon4 from "../../assets/icons/js.png";
import icon5 from "../../assets/icons/reactjs.png";
import icon6 from "../../assets/icons/figma.png";
import icon7 from "../../assets/icons/git.png";
import icon8 from "../../assets/icons/nextjs.png";
import icon9 from "../../assets/icons/nodejs.png";

import Footer from "../../components/Footer/Footer";
import {
  FaCalendarCheck,
  FaArrowLeft,
  FaLink,
  FaGithub,
} from "react-icons/fa6";
import dataProjet from "../../data/dataProjets.json";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Projet2 = () => {

    const dataImage = [img1, img2, img3, img4];

    const dataIcons = [
      {
        icon: icon1,
        title: "HTML5",
        href: "https://www.w3schools.com/html/",
        category: "Front-end",
      },
      {
        icon: icon2,
        title: "CSS3",
        href: "https://www.w3schools.com/css/",
        category: "Front-end",
      },
      {
        icon: icon3,
        title: "SASS",
        href: "https://sass-lang.com/",
        category: "Front-end",
      },
      {
        icon: icon4,
        title: "Javascript",
        href: "https://www.w3schools.com/js/",
        category: "Javascript",
      },
      {
        icon: icon5,
        title: "ReactJS",
        href: "https://fr.reactjs.org/",
        category: "React",
      },
      {
        icon: icon6,
        title: "Figma",
        href: "https://www.figma.com/",
        category: "Design",
      },
      {
        icon: icon7,
        title: "Git",
        href: "https://git-scm.com/",
        category: "Front-end",
      },
      {
        icon: icon8,
        title: "NextJS",
        href: "https://nextjs.org/",
        category: "NextJS",
      },
      {
        icon: icon9,
        title: "NodeJS",
        href: "https://nodejs.org/en/",
        category: "Back-end",
      },
  ];

    const yVariants = {
      initial: {
        opacity: 0,
        y: 100,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          stiffness: 100,
          type: "spring",
          damping: 30,
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    };

    const xVariantsLeft = {
      initial: {
        opacity: 0,
        x: -100,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          stiffness: 100,
          type: "spring",
          damping: 22,
          staggerChildren: 0.14,
          delayChildren: 0.1,
        },
      },
    };

    const xVariantsRight = {
      initial: {
        opacity: 0,
        x: 100,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          stiffness: 100,
          type: "spring",
          damping: 22,
          staggerChildren: 0.14,
          delayChildren: 0.1,
        },
      },
    };

   const [activeLink, setActiveLink] = useState(null);
  
  return (
    <section id="Projet2" className="Projet">
      <motion.div
        className="title"
        variants={yVariants}
        initial="initial"
        animate="animate">
        <motion.h1 variants={yVariants}>
          Projet <span>Kasa</span>
        </motion.h1>
        <motion.img src={logo} alt="logo de Kasa" variants={yVariants} />
      </motion.div>

      <hr />

      <motion.div className="container">
        <motion.div
          className="image"
          variants={xVariantsLeft}
          initial="initial"
          animate="animate">
          <motion.div className="bouton">
            <Link to="/" className="btn btn-1 btn-retour">
              <span>
                <FaArrowLeft />
              </span>
              Retour Home
            </Link>
          </motion.div>

          <motion.div className="image__content" variants={xVariantsLeft}>
            {dataImage.map((item, index) => {
              return (
                <motion.img
                  key={index}
                  src={item}
                  alt="images du projet Kasa"
                  variants={xVariantsLeft}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.2 }}
                />
              );
            })}
          </motion.div>

          <motion.div className="boutons" variants={xVariantsLeft}>
            {dataProjet.map((item, index) => {
              return (
                <NavLink
                  to={item.link}
                  key={index}
                  className={`btn btn-2 btn-suivant ${
                    activeLink === item.id ? "active" : ""
                  }`}
                  onClick={() => setActiveLink(item.id)}>
                  {item.id}
                </NavLink>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="texte"
          variants={xVariantsRight}
          initial="initial"
          animate="animate">
          <motion.div className="texte__content" variants={xVariantsRight}>
            <p className="icon">
              <span>
                <FaCalendarCheck />
              </span>
              Année : 2023
            </p>

            <motion.h3 variants={xVariantsRight}>Scénario</motion.h3>
            <p>
              Kasa vous recrute en tant que développeur front-end en freelance
              pour développer sa nouvelle plateforme web. Kasa est dans le
              métier de la location d{"'"}appartements entre particuliers depuis
              près de 10 ans maintenant. Avec plus de 500 annonces postées
              chaque jour, Kasa fait partie des leaders de la location d{"'"}
              appartements entre particuliers en France. L{"'"}occasion parfaite
              pour vous d{"'"}ajouter une belle référence à votre portfolio de
              freelance !
              <br />
              <br />
              Le site de Kasa a été codé il y a maintenant plus de 10 ans en
              ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé
              une refonte totale pour passer à une stack complète en JavaScript
              avec NodeJS côté back-end, et React côté front-end. Kasa en a
              également profité pour commander de nouvelles maquettes auprès de
              son designer habituel, qui est en freelance. Un gros chantier pour
              cette année !
            </p>

            <motion.h3 variants={xVariantsRight}>Objectifs</motion.h3>

            <motion.ul className="objectifs" variants={xVariantsRight}>
              <li>
                <p>
                  Démarrer le projet React et développer l{"'"}ensemble de l
                  {"'"}application, les composants React, les routes React
                  Router, en suivant les maquettes Figma (responsives !). Et ce
                  avec un code de qualité !
                </p>
              </li>
              <li>
                <p>
                  Le recrutement de la personne en charge du back-end n{"'"}est
                  pas terminé et va prendre plus de temps que prévu. Du coup, il
                  va falloir que tu fasses sans pour le moment. Je t{"'"}ai
                  extrait les 20 dernières annonces de logements dans ce fichier
                  JSON pour que tu puisses construire le Front qui correspond.
                </p>
              </li>
              <li>
                <p>
                  Développer avec Create React App ou Vite et utiliser SASS.
                </p>
              </li>
            </motion.ul>

            <motion.h3 variants={xVariantsRight}>Infos Projet</motion.h3>

            <motion.ul className="infos" variants={xVariantsRight}>
              <li>
                <p>
                  <span>&#10003; </span> Intégration Web, React avec Vitejs.
                </p>
              </li>
              <li>
                <p>
                  <span>&#10003; </span> Dynamisme / Animation en React - SASS.
                </p>
              </li>
              <li>
                <p>
                  <span>&#10003; </span> Utilisation du fichier Json pour toutes
                  les données.
                </p>
              </li>
              <li>
                <p>
                  <span>&#10003; </span> Référencement naturel SEO.
                </p>
              </li>
            </motion.ul>

            <hr />

            <motion.h3 variants={xVariantsRight}>
              Technologies utilisées
            </motion.h3>

            <motion.ul className="technologies" variants={xVariantsRight}>
              {dataIcons
                .filter(
                  (item) =>
                    item.category === "Front-end" ||
                    item.category === "React" ||
                    item.category === "Design" ||
                    item.category === "Back-end" ||
                    item.category === "Javascript"
                )
                .map((item, index) => {
                  return (
                    <motion.li key={index} variants={xVariantsRight}>
                      <motion.img
                        src={item.icon}
                        alt={item.title}
                        variants={xVariantsRight}
                      />
                    </motion.li>
                  );
                })}
            </motion.ul>

            <hr />

            <motion.div className="boutons" variants={xVariantsRight}>
              {dataProjet
                .filter((item) => item.id === 2)
                .map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="boutons"
                      variants={xVariantsRight}>
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-1 btn-code">
                        Github
                        <span>
                          <FaGithub />
                        </span>
                      </a>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-2 btn-projet">
                        Le site
                        <span>
                          <FaLink />
                        </span>
                      </a>
                    </motion.div>
                  );
                })}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </section>
  );
};

export default Projet2;
