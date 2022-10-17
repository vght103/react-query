import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import RQSuperHeroes from "../components/RQSpuerHeroes";
import RQSuperHero from "../components/RQSuperHero";
import SuperHeroes from "../components/SuperHeroes";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/super-heros" element={<SuperHeroes />} />
      <Route path="/rqSuper-heros" element={<RQSuperHeroes />} />
      <Route path="/rqSuper-hero/:id" element={<RQSuperHero />} />
    </Routes>
  );
};

export default RouteList;
