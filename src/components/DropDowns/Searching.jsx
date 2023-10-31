import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { FaSistrix } from "react-icons/fa6";

const Searching = () => {
  const [isOpen, setIsOpen] = useState(true); 

  const handleClose = () => {
    setIsOpen(false); 
  };

  const { t } = useTranslation();
  return isOpen ? (
    <div className="searching">
        <form>
            <FaSistrix className="searchIcon" />
            <input type="search" className="searchInput" placeholder={t("header.header_right.search")} />
            <button>{t("header.header_right.search_btn")}</button>
        </form>
        <span onClick={handleClose}>X</span>
    </div>
  ) : null;
};

export default Searching;
