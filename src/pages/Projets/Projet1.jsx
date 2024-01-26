import "./Projet.scss";
import img1 from "../../assets/img/projects/sophie bluel/sophie bluel5.png";
import img2 from "../../assets/img/projects/sophie bluel/sophie bluel6.png";
import img3 from "../../assets/img/projects/sophie bluel/sophie bluel7.png";
import img4 from "../../assets/img/projects/sophie bluel/sophie bluel8.png";
import img5 from "../../assets/img/projects/sophie bluel/sophie bluel9.png";
import img6 from "../../assets/img/projects/sophie bluel/sophie bluel10.png";
import img7 from "../../assets/img/projects/sophie bluel/sophie bluel11.png";
import logo from "../../assets/icons/sophie_Logo.png";

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
import { Link, NavLink } from "react-router-dom";
import dataProjet from "../../data/dataProjets.json";
import { useState } from "react";
import { motion } from "framer-motion";

const Projet1 = () => {
  const dataImage = [img1, img2, img3, img4, img5, img6, img7];

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

  const [activeLink, setActiveLink] = useState(null);
  
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


  return (
    <motion.section id="Projet1" className="Projet">
      <motion.div
        className="title"
        variants={yVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={yVariants}>
          Projet <span>Sophie Bluel</span>
        </motion.h1>
        <motion.img
          src={logo}
          alt="logo de Sophie Bluel"
          variants={yVariants}
        />
      </motion.div>
      <hr />

      <motion.div className="container">
        <motion.div
          className="image"
          variants={xVariantsLeft}
          initial="initial"
          animate="animate"
          >
          <motion.div className="bouton" variants={xVariantsLeft}>
            <Link
              to="/"
              className="btn btn-1 btn-retour"
              >
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
                  loading="lazy"
                  key={index}
                  src={item}
                  alt="images du projet Sophie Bluel"
                  variants={xVariantsLeft}
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
                  onClick={() => setActiveLink(item.id)}
                  >
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
              Vous travaillez comme développeur front-end pour {"l'"}agence
              ArchiWebos qui comprend 50 salariés. Ayant terminé votre dernier
              projet avec un peu {"d'"}avance, vous êtes envoyé en renfort comme
              développeur front-end {"d'"}une équipe qui travaille sur la
              conception du site portfolio {"d'"}une architecte {"d'"}intérieur.
            </p>

            <motion.h3 variants={xVariantsRight}>Objectifs</motion.h3>

            <motion.ul className="objectifs" variants={xVariantsRight}>
              <li>
                <p>
                  Développer la page de présentation des travaux de {"l'a"}
                  rchitecte (à partir du HTML fourni).
                </p>
              </li>
              <li>
                <p>
                  {`Développer la page de connexion de 
                  l'administrateur du site (le client) (code à créer de
                  zéro).`}
                </p>
              </li>
              <li>
                <p>
                  Développer les modales permettant {"d'"}uploader et de
                  supprimer de nouveaux médias.
                </p>
              </li>
            </motion.ul>

            <motion.h3 variants={xVariantsRight}>Infos Projet</motion.h3>

            <motion.ul className="infos" variants={xVariantsRight}>
              <li>
                <p>
                  <span>&#10003; </span> Intégration Web, HTML -
                  CSS.
                </p>
              </li>
              <li>
                <p>
                  <span>&#10003; </span> Dynamisme / Animation par
                  JavaScript.
                </p>
              </li>
              <li>
                <p>
                  <span>&#10003; </span> Utiliser des API REST
                  dans ce projet.
                </p>
              </li>
              <li>
                <p>
                  <span>&#10003; </span> Référencement naturel
                  SEO.
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
                .filter((item) => item.id === 1)
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
                        className="btn btn-1 btn-code"
                        >
                        Github
                        <span>
                          <FaGithub />
                        </span>
                      </a>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-2 btn-projet"
                        >
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
    </motion.section>
  );
};

export default Projet1;
