import "./Projet.scss";
import img1 from "../../assets/img/projects/sophie bluel/sophie bluel1.png";
import img2 from "../../assets/img/projects/sophie bluel/sophie bluel2.png";
import img3 from "../../assets/img/projects/sophie bluel/sophie bluel3.png";
import img4 from "../../assets/icons/sophie_Logo.png";
import icons from "../../data/dataIcons.json";
import { FaCalendarCheck, FaArrowLeft, FaArrowRight, FaLink, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import dataProjet from "../../data/dataProjets.json";
const Projet1 = () => {

const dataImage = [img1, img2, img3];



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
            <Link to="/Projet2" className="btn btn-2 btn-suivant">
              Projet 2
              <span>
                <FaArrowRight />
              </span>
            </Link>
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
              {icons
                .filter((item) => item.category === "Front-end")
                .map((item, index) => {
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
                    <div key={index}>
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
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-2 btn-projet">
                        Voir le site
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
    </section>
  );
};

export default Projet1;
