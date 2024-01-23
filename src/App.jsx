import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index/Index";
// import Error from "./pages/Error/Error";
import Projet1 from "./pages/Projets/Projet1";
import Projet2 from "./pages/Projets/Projet2";
import Projet3 from "./pages/Projets/Projet3";
import Projet4 from "./pages/Projets/Projet4";
import Projet5 from "./pages/Projets/Projet5";
import Projet6 from "./pages/Projets/Projet6";

const App = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="projet1" element={<Projet1 />} />
        <Route path="projet2" element={<Projet2 />} />
        <Route path="projet3" element={<Projet3 />} />
        <Route path="projet4" element={<Projet4 />} />
        <Route path="projet5" element={<Projet5 />} />
        <Route path="projet6" element={<Projet6 />} />

        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;