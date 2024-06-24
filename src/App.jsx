import "./App.css";
import Navigation from "./components/Navigation";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Contacto from "./views/Contacto";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
