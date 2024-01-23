import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import "./Index.scss";

const Index = () => {
  return (
    <>
      <Header />

      <section id="Hero" className="Hero">
        <Hero />
      </section>
      <section id="About" className="About">
        <About />
      </section>
      <section id="Skills" className="Skills">
        <Skills />
      </section>
      <section id="Portfolio" className="Portfolio">
        <Portfolio />
      </section>
      <section id="Experience" className="Experience">
        <Experience />
      </section>
      <section id="Contact" className="Contact">
        <Contact />
        <Footer />
      </section>
    </>
  );
};

export default Index;

// import dataProjetc from "../../data/dataProjets.json"
// import { Link } from "react-router-dom";

{
  /* <ul>
                {dataProjetc.map((item, index) => {
                    return (
                        <li key={index}>
                            <h2>{item.name}</h2>
                            <p>{item.category}</p>
                            <img src={item.image} alt="image" />
                            <Link to={item.link}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul> */
}
