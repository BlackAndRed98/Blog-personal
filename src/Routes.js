import { Route, Routes, useLocation } from "react-router-dom";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import RedSocial from "containers/pages/RedSocial";
import Blog from "containers/pages/Blog";
import Ajustes from "containers/pages/Ajustes";
import Privacidad from "containers/pages/Privacidad";
import Login from "containers/pages/Login";
import Noticias from "containers/pages/Noticias";
import Portafolio from "containers/pages/Portafolio";
import Soporte from "containers/pages/Soporte";
import User from "containers/pages/User";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* ERROR DISPLAY */}
        <Route path="*" element={<Error404 />} />

        {/* User DISPLAY */}
        <Route path="/User" element={<User />} />

        {/* HOME DISPLAY */}
        <Route path="/" element={<Home />} />

        {/* RedSocial DISPLAY */}
        <Route path="/RedSocial" element={<RedSocial />} />

        {/* Blog DISPLAY */}
        <Route path="/Blog" element={<Blog />} />

        {/* Portafolio DISPLAY */}
        <Route path="/Portafolio" element={<Portafolio />} />

        {/* Noticias DISPLAY */}
        <Route path="/Noticias" element={<Noticias />} />

        {/* Login DISPLAY */}
        <Route path="/Login" element={<Login />} />

        {/* Ajustes DISPLAY */}
        <Route path="/Ajustes" element={<Ajustes />} />

        {/* Soporte DISPLAY */}
        <Route path="/Soporte" element={<Soporte />} />

        {/* Privacidad DISPLAY */}
        <Route path="/Privacidad" element={<Privacidad />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
