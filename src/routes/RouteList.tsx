import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import RQSuperHeroes from "../components/RQSpuerHeroes";
import SuperHeroes from "../components/SuperHeroes";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/super-heros" element={<SuperHeroes />} />
      <Route path="/rqSuper-heros" element={<RQSuperHeroes />} />
    </Routes>
  );
};

export default RouteList;
