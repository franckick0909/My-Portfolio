// import "./ProjetCard.scss";
// import dataProjet from "../../data/dataProjets.json";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaRocket
// } from "react-icons/fa6";
// import { motion } from "framer-motion";

// const ProjetCard = () => {

//   const [filter, setFilter] = useState("all");
//   const [activeButton, setActiveButton] = useState("all");
//   const [Show, setShow] = useState(false);

//   const filteredProjects = dataProjet.filter((project) =>
//     filter === "all" ? true : project.category === filter
//   );

//   const handleButtonClick = (category) => {
//     setFilter(category);
//     setActiveButton(category);
//   };

//   useEffect(() => {
//     setShow(true);
//   }, []);


//   const animVariants = {
//     initial: {
//       scale: 0,
//       opacity: 0,
//     },
//     animate: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         stiffness: 100,
//         type: "spring",
//         damping: 20,
//         staggerChildren: 0.15,
//         delayChildren: 0.1,
//       },
//     },
//   };




//   return (
//     <div className="projetCard">
//       <nav className="projetCard__nav">
//         <button
//           className="btn-projetCard"
//           style={
//             activeButton === "all"
//               ? { backgroundColor: "#F21B3F", color: "#ffffff" }
//               : {}
//           }
//           onClick={() => handleButtonClick("all")}>
//           All
//         </button>
//         <button
//           className="btn-projetCard"
//           style={
//             activeButton === "cat1"
//               ? { backgroundColor: "#F21B3F", color: "#ffffff" }
//               : {}
//           }
//           onClick={() => handleButtonClick("cat1")}>
//           HTML / CSS
//         </button>
//         <button
//           className="btn-projetCard"
//           style={
//             activeButton === "cat2"
//               ? { backgroundColor: "#F21B3F", color: "#ffffff" }
//               : {}
//           }
//           onClick={() => handleButtonClick("cat2")}>
//           JavaScript
//         </button>
//         <button
//           className="btn-projetCard"
//           style={
//             activeButton === "cat3"
//               ? { backgroundColor: "#F21B3F", color: "#ffffff" }
//               : {}
//           }
//           onClick={() => handleButtonClick("cat3")}>
//           React
//         </button>
//       </nav>

//       <motion.div className="projetCard__container">
//         <motion.div
//           className="card"
//           variants={animVariants}
//           initial="initial"
//           whileInView="animate"
//           >
//           {filteredProjects.map((item) => (
//             <motion.div
//               className={`card__item ${Show ? "show" : ""}`}
//               key={item.id}
//               variants={animVariants}>
//               <img src={item.image} alt="Captures d'écrans de mes projets" />
//               <div className="card__item__content">
//                 <h3>{item.name}</h3>
//                 <div className="overlay">
//                   <div className="overlay__content">
//                     <h2 className="projetName">{item.name}</h2>
//                     <Link to={item.link} className="projetLink">
//                       Voir les projets <FaRocket />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProjetCard;
