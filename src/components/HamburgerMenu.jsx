import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";


import Suitcases from "./DropDowns/Suitcases";
import Bags from "./DropDowns/Bags";
import Accessories from "./DropDowns/Accessories";
import Guides from "./DropDowns/Guides";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
      <div className={`hamburger ${isOpen ? "open" : ""}`}>
        <div className="menuButton" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div className="menuItems">
            <ul className="navBar">
                <li className="navList">
                  <NavLink to="/ShopAll" className="navLink">
                    NEW ARRIVALS
                  </NavLink>
                </li>
                <li className="navList">
                  <NavLink to="/ShopAll" className="navLink">
                    SUITCASES
                  </NavLink>
                  <Suitcases />
                </li>
                <li className="navList">
                  <NavLink to="/ShopAll" className="navLink">
                    BAGS
                  </NavLink>
                  <Bags />
                </li>
                <li className="navList">
                  <NavLink to="/ShopAll" className="navLink">
                    ACCESSORIES
                  </NavLink>
                  <Accessories />
                </li>
                <li className="navList">
                  <NavLink to="/ShopAll" className="navLink">
                    SHOP ALL
                  </NavLink>
                </li>
                <li className="navList">
                  <NavLink to="/ShopAll" className="navLink">
                    GUIDES & COLLECTIONS
                  </NavLink>
                  <Guides />
                </li>
            </ul>
        </div>
      </div>
  );
};

export default HamburgerMenu;
