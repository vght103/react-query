import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="my10">
      <ul className="justify-center">
        <li className="mx10">
          <Link to="/">Home</Link>
        </li>
        <li className="mx10">
          <Link to="/super-heros">Super Heros</Link>
        </li>
        <li className="mx10">
          <Link to="/rqSuper-heros">RQ Super Heros</Link>
        </li>
        <li className="mx10">
          <Link to="/rq-parallel">RQ parallel</Link>
        </li>
        <li className="mx10">
          <Link to="/rq-dynamic-parallel">RQ DynamicParallel</Link>
        </li>
        <li className="mx10">
          <Link to="/rq-dependent">RQ dependent</Link>
        </li>
        <li className="mx10">
          <Link to="/rq-paginate">RQ paginate</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
