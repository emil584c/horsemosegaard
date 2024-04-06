import "./styles/app.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/HomePage";
import AboutUs from "./components/pages/AboutUs";
import Prices from "./components/pages/Prices";
import Facilities from "./components/pages/Facilities";
import Agility from "./components/pages/Agility";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="hvem-er-vi"
          element={<AboutUs />}
        />
        <Route
          path="priser"
          element={<Prices />}
        />
        <Route
          path="faciliteter"
          element={<Facilities />}
        />
        <Route
          path="agility"
          element={<Agility />}
        />
      </Routes>
    </Router>
  );
}

export default App;
