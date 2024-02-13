import "./styles/app.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </Router>
  );
}

export default App;
