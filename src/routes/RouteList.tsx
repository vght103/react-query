import React from "react";
import { Route, Routes } from "react-router-dom";
import DependentQueries from "../components/DependentQueries";
import DynamicParallel from "../components/DynamicParallel";
import Home from "../components/Home";
import PaginatedQueries from "../components/PaginatedQueries";
import ParallelQueries from "../components/ParallelQueries";
import RQSuperHeroes from "../components/RQSpuerHeroes";
import RQSuperHero from "../components/RQSuperHeroDetail";
import SuperHeroes from "../components/SuperHeroes";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/super-heros" element={<SuperHeroes />} />
      <Route path="/rqSuper-heros" element={<RQSuperHeroes />} />
      <Route path="/rqSuper-hero/:id" element={<RQSuperHero />} />
      <Route path="/rq-parallel" element={<ParallelQueries />} />
      <Route path="/rq-dynamic-parallel" element={<DynamicParallel heroIds={[1, 2]} />} />
      <Route path="/rq-dependent" element={<DependentQueries email={"vishwas@example.com"} />} />
      <Route path="/rq-paginate" element={<PaginatedQueries />} />
    </Routes>
  );
};

export default RouteList;
