import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import RQSuperHeros from "../components/RQSpuerHeros";
import SuperHeros from "../components/SuperHeros";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/super-heros" element={<SuperHeros />} />
      <Route path="/rqSuper-heros" element={<RQSuperHeros />} />
    </Routes>
  );
};

export default RouteList;
