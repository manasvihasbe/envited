import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./Events";
import Create from "./Create";
import LandingPage from "./LandingPage";

function btn() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/Create" exact element={<Create />} />
        <Route path="/Events" exact element={<Events />} />
      </Routes>
    </Router>
  );
}

export default btn;
