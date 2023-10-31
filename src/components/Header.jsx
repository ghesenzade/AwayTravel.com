import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// -------------------------------ICONS-------------------------------------------
import { FaSistrix } from "react-icons/fa6";
import { CiRollingSuitcase } from "react-icons/ci";

// --------------------------------DROPDOWNS---------------------------------------------------
import Suitcases from "./DropDowns/Suitcases";
import Bags from "./DropDowns/Bags";
import Accessories from "./DropDowns/Accessories";
import Guides from "./DropDowns/Guides";
import Searching from "./DropDowns/Searching";
import HamburgerMenu from "./HamburgerMenu";

// -------------------------------------------CONTEXTS---------------------------------
import { CartContext } from "../utils/CartContext";
import { useContext} from "react";
import { Auth } from "../utils/AuthContext";


export const Header = () => {
  const { t } = useTranslation();
  const { count } = useContext(CartContext);

  const { userIn } = useContext(Auth);

  const [isSearchingOpen, setIsSearchingOpen] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const toggleSearching = () => {
    setIsSearchingOpen(!isSearchingOpen);
  };


  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  return (
    <header>
      <div className="headerContent">
        <div className="container">
          <div className="row">
            {/* <div className="hamburgerMenu" onClick={toggleHamburgerMenu}>
              <HamburgerMenu/>
            </div> */}

{/* ---------------------------------------LOGO--------------------------------------------------- */}
            <div className="logo">
              <Link to="/" className="logoLink">
                AWAY
              </Link>
            </div>

{/* ----------------------------------------NAV-------------------------------------------------------- */}
            <nav>
              <ul className="navBar">
                <li className="navList">
                  <NavLink to="/ShopAll" className="navLink">
                    {t("header.navbar.new_arrivals")}
                  </NavLink>
                </li>
                <li className="navList">
                  <NavLink to="/ShopAll" className="navLink">
                    {t("header.navbar.suitcases")}
                  </NavLink>
                  <Suitcases />
                </li>
                <li className="navList">
                  <NavLink to="/ShopAll" className="navLink">
                    {t("header.navbar.bags")}
                  </NavLink>
                  <Bags />
                </li>
                <li className="navList">
                  <NavLink to="/ShopAll" className="navLink">
                    {t("header.navbar.accessories")}
                  </NavLink>
                  <Accessories />
                </li>
                <li className="navList">
                  <NavLink to="/ShopAll" className="navLink">
                    {t("header.navbar.shop_all")}
                  </NavLink>
                </li>
                <li className="navList">
                  <NavLink to="/ShopAll" className="navLink">
                    {t("header.navbar.guides_and_collections")}
                  </NavLink>
                  <Guides />
                </li>
              </ul>
            </nav>

            <div className="headerRight">
{/* -----------------------------------LOGIN, ACCOUNT----------------------------------------- */}
              {userIn && (
                  <Link to="/Account" className="logOut">{t("header.header_right.hi")}</Link>
              )}
              {!userIn && (
                <Link to="/LogIn" className="logIn">
                    {t("header.header_right.login")}
                </Link>
              )}
{/* -----------------------------------------SEARCH----------------------------------------------- */}
              <ul>
                <li>
                  <button className="search" onClick={toggleSearching}>
                    <FaSistrix />
                  </button>
                  {isSearchingOpen && <Searching />}
                </li>
{/* -------------------------------------BASKET-------------------------------------------------- */}
                <li>
                  {userIn && (
                  <button className="cart">
                    <Link className="cartIcon" to="/Cart">
                      <CiRollingSuitcase />
                      <span>{count}</span>
                    </Link>
                  </button>
                  )}
                  {!userIn && (
                  <button className="cart">
                    <Link className="cartIcon" to="/LogIn">
                      <CiRollingSuitcase />
                      <span>{count}</span>
                    </Link>
                  </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
