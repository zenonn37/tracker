import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTachometer } from "@fortawesome/pro-light-svg-icons";

const NavBar = () => {
  return (
    <div className="side-nav">
      <div className="logo">BT</div>
      <ul>
        <li>
          <Link to="/home">
            <FontAwesomeIcon icon={faTachometer} size="1x" />
          </Link>
        </li>
        <li>
          <Link to="/accounts">
            <FontAwesomeIcon icon={faTachometer} size="1x" />
          </Link>
        </li>
        <li>
          <Link to="/liabilties">
            <FontAwesomeIcon icon={faTachometer} size="1x" />
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faTachometer} size="1x" />
        </li>
        <li>
          <FontAwesomeIcon icon={faTachometer} size="1x" />
        </li>
        <li>
          <FontAwesomeIcon icon={faTachometer} size="1x" />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
