import React, { useState } from "react";
import { FaSistrix, FaX } from "react-icons/fa6";
import axios from "axios"; 
import { useTranslation } from "react-i18next";

const Searching = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

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

  const { t }= useTranslation();
  return isOpen ? (
    <div className="searching">
      <div className="form">
        <form>
          <FaSistrix className="searchIcon" />
          <input
            type="search"
            className="searchInput"
            placeholder={t("header.header_right.search")}
            value={query}
            onChange={handleInputChange}
            onInput={handleInputClear}
          />
          <button type="submit" onClick={handleSearchButtonClick}>{t("header.header_right.search_btn")} </button>
        </form>
        <span onClick={handleClose}>
          <FaX />
        </span>
      </div>
      <ul className="column">
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default Searching;
