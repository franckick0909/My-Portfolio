import "./Projet.scss";
import img1 from "../../assets/img/projects/sophie bluel/sophie bluel1.png";
import img2 from "../../assets/img/projects/sophie bluel/sophie bluel2.png";
import img3 from "../../assets/img/projects/sophie bluel/sophie bluel3.png";
import img4 from "../../assets/icons/sophie_Logo.png";


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
import { FaCalendarCheck, FaArrowLeft, FaLink, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import dataProjet from "../../data/dataProjets.json";

const Projet1 = () => {

  const dataImage = [img1, img2, img3];
  
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
      category: "Front-end",
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
      category: "React",
    },
    {
      icon: icon9,
      title: "NodeJS",
      href: "https://nodejs.org/en/",
      category: "Back-end",
    },
  ];



  return (
    <section id="Projet1" className="Projet">
      <div className="container">
        <div className="image">
          <div className="image__content">
            {dataImage.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  alt="images du projet Sophie Bluel"
                />
              );
            })}
          </div>

          <div className="boutons">
            <Link to="/" className="btn btn-1 btn-retour">
              <span>
                <FaArrowLeft />
              </span>
              Retour Home
            </Link>

            <div className="boutons">
            {
              dataProjet.map((item, index) => {
                return (
                  <Link to={item.link} key={index} className="btn btn-2 btn-suivant">
                    {item.id}
                  </Link>
                );
              })
            }
            </div>

          </div>
        </div>

        <div className="texte">
          <div className="texte__content">
            <h2>
              Projet Sophie Bluel <img src={img4} alt="logo de Sophie Bluel" />
            </h2>

            <p className="icon">
              <span>
                <FaCalendarCheck />
              </span>
              Année : 2023
            </p>

            <h3>Scénario</h3>
            <p>
              Vous travaillez comme développeur front-end pour {"l'"}agence
              ArchiWebos qui comprend 50 salariés. Ayant terminé votre dernier
              projet avec un peu {"d'"}avance, vous êtes envoyé en renfort comme
              développeur front-end {"d'"}une équipe qui travaille sur la
              conception du site portfolio {"d'"}une architecte {"d'"}intérieur.
            </p>

            <h3>Objectifs</h3>

            <ul>
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
            </ul>

            <h3>Infos Projet</h3>

            <ul className="infos">
              <li>
                <p>
                  <span>&#10003; </span> Intégration Web, HTML - CSS.
                </p>
              </li>
              <li>
                <p>
                  <span>&#10003; </span> Dynamisme / Animation par JavaScript.
                </p>
              </li>
              <li>
                <p>
                  <span>&#10003; </span> Référencement naturel SEO.
                </p>
              </li>
            </ul>

            <hr />

            <h3>Technologies utilisées</h3>

            <ul className="technologies">
              {dataIcons.filter((item) => item.category === "Front-end").map((item, index) => {
                return (
                  <li key={index}>
                    <img src={item.icon} alt={item.title} />
                  </li>
                );
              })}
            </ul>

            <hr />

            <div className="boutons">
              {dataProjet
                .filter((item) => item.id === 1)
                .map((item, index) => {
                  return (
                    <div key={index} className="boutons">
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
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>

    
  );
};

export default Projet1;
