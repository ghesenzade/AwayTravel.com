import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

import { useTranslation } from "react-i18next";

// ----------------icons---------------------------------
import { AiOutlineMenu, AiOutlineClose, AiOutlineRight, AiOutlineDown} from "react-icons/ai";
import { FaSistrix } from "react-icons/fa6";

// ----------------------------------DROPDOWNS------------------------------------------
import Suitcases from "./DropDowns/Suitcases";
import Bags from "./DropDowns/Bags";
import Accessories from "./DropDowns/Accessories";
import Guides from "./DropDowns/Guides";

// --------------------------------------Contexts----------------------------------
import { Auth } from "../utils/AuthContext";
import { useContext} from "react";


const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  const { t } = useTranslation();

  const { userIn } = useContext(Auth);

  // ---------------------------------OPEN DROPDOWNS------------------------------
  const [isSuitcasesDropdownOpen, setIsSuitcasesDropdownOpen] = useState(false);
  const [isBagsDropdownOpen, setIsBagsDropdownOpen] = useState(false);
  const [isAccessoriesDropdownOpen, setIsAccessoriesDropdownOpen] = useState(false);
  const [isGuidesDropdownOpen, setIsGuidesDropdownOpen] = useState(false);


  const toggleSuitcasesDropdown = () => {
    setIsSuitcasesDropdownOpen(!isSuitcasesDropdownOpen);

    // closing other dropdowns-------------------------------
    setIsBagsDropdownOpen(false);
    setIsAccessoriesDropdownOpen(false);
    setIsGuidesDropdownOpen(false);
  };

  const toggleBagsDropdown = () => {
    setIsBagsDropdownOpen(!isBagsDropdownOpen);

    // closing other dropdowns-----------------------------------
    setIsSuitcasesDropdownOpen(false);
    setIsAccessoriesDropdownOpen(false);
    setIsGuidesDropdownOpen(false);
  };
  
  const toggleAccessoriesDropdown = () => {
    setIsAccessoriesDropdownOpen(!isAccessoriesDropdownOpen);

    // closing other dropdowns-------------------------------------
    setIsSuitcasesDropdownOpen(false);
    setIsBagsDropdownOpen(false);
    setIsGuidesDropdownOpen(false);
  };

  const toggleGuidesDropdown = () => {
    setIsGuidesDropdownOpen(!isGuidesDropdownOpen);
    
    // closing other dropdowns---------------------------------
    setIsSuitcasesDropdownOpen(false);
    setIsBagsDropdownOpen(false);
    setIsAccessoriesDropdownOpen(false);
  };

// ------------------------------------------searching-------------------------
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const performSearch = (searchQuery) => {
    setIsSearching(true);
  
    const apiUrl = `http://localhost:5000/away/products?name=${searchQuery}`;
  
    axios.get(apiUrl)
      .then(res => {
        const filteredResults = res.data.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
  
        setResults(filteredResults);
        setIsSearching(false);
      })
      .catch(err => {
        console.log(err);
        setIsSearching(false);
      });
  };

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    setIsSearching(true);
    performSearch(query);
  };

  const handleInputClear = () => {
    setResults([]);
  };
// --------------------------------finish search function---------------


  return (
      <div className={`hamburger ${isOpen ? "open" : ""}`}>
        <div className="menuButton" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div className="menuItems">
            <ul className="navBar">
{/* -------------------------------SEARCH-------------------------------------------------- */}
                <li className="search">
                  <FaSistrix className="icon"/>
                  <input type="search"
                    placeholder="Search products, feature"
                    value={query}
                    onChange={handleInputChange}
                    onInput={handleInputClear}
                  />
                  <button type="submit" onClick={handleSearchButtonClick}>Search</button>
                </li>

                <ul className="column">
                    {results.map(result => (
                        <li key={result.id}>{result.name}</li>
                    ))}
                </ul>
{/* ------------------------------NEW ARRIVALS----------------------------------- */}
                <li className="navList">
                  <div className="navLink">
                    <NavLink to='/shop-all' className="a">
                      {t("header.navbar.new_arrivals")}
                    </NavLink>
                  </div>
                </li>
{/* -------------------------------SUITCASES-------------------------------------------------- */}
                <li className="navList">
                    <div className="navLink" onClick={toggleSuitcasesDropdown}>
                      <NavLink className="a" to='/shop-all'>{t("header.navbar.suitcases")}</NavLink>
                      {" "}
                      {isSuitcasesDropdownOpen ? (
                        <>
                          <AiOutlineDown className="rightIcon" />
                        </>
                        ) : (
                          <AiOutlineRight className="rightIcon" />
                      )}
                    </div>
                  { isSuitcasesDropdownOpen && <Suitcases className="dropDownMenu"/>}
                </li>
{/*-------------------------------BAGS--------------------------------------------------  */}
                <li className="navList">
                    <div className="navLink" onClick={toggleBagsDropdown}>
                      <NavLink to='/shop-all' className='a'>{t("header.navbar.bags")}</NavLink>
                      {" "}
                      {isBagsDropdownOpen ? (
                        <>
                          <AiOutlineDown className="rightIcon" />
                        </>
                        ) : (
                          <AiOutlineRight className="rightIcon" />
                      )}
                    </div>
                    { isBagsDropdownOpen && <Bags />}
                </li>
{/* ----------------------------ACCESSORIES------------------------------------------- */}
                <li className="navList">
                  <div className="navLink" onClick={toggleAccessoriesDropdown}>
                      <NavLink className='a' to="/shop-all">{t("header.navbar.accessories")}</NavLink>
                      {" "}
                      {isAccessoriesDropdownOpen ? (
                        <>
                          <AiOutlineDown className="rightIcon" />
                        </>
                        ) : (
                          <AiOutlineRight className="rightIcon" />
                      )}
                  </div>
                  { isAccessoriesDropdownOpen && <Accessories />}
                </li>
{/* -------------------------------SHOP ALL--------------------------------------- */}
                <li className="navList">
                  <div className="navLink">
                    <NavLink className='a' to="/shop-all">{t("header.navbar.shop_all")}</NavLink>
                  </div>
                </li>
{/* ----------------------------GUIDE------------------------------------------- */}
                <li className="navList">
                    <div className="navLink" onClick={toggleGuidesDropdown}>
                      <NavLink className='a' to="/shop-all">{t("header.navbar.guides_and_collections")}</NavLink>
                      {" "}
                      {isGuidesDropdownOpen ? (
                        <>
                          <AiOutlineDown className="rightIcon" />
                        </>
                        ) : (
                          <AiOutlineRight className="rightIcon" />
                      )}
                    </div>
                    { isGuidesDropdownOpen && <Guides />}
                </li>

                <hr />
{/* --------------------------------LOGIN-------------------------------------- */}
                <li className="navList">
                  {userIn && (
                      <Link to="/account" className="logOut logIn">{t("header.header_right.hi")}</Link>
                  )}

                  {!userIn && (
                    <Link to="/login" className="logIn">
                        {t("header.header_right.login")}
                    </Link>
                  )}
                </li>
            </ul>
        </div>
      </div>
  );
};

export default HamburgerMenu;
