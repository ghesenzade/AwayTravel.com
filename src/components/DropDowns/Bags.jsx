import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Bag from "../../assets/images/dropDownBags.webp";

import { FaArrowRight } from "react-icons/fa6";


const Bags = () => {

  const { t } = useTranslation();
  return (
  <div className="bags dropDownMenu">
    <div className="dropDown">
      <div className="row">
        <div className="dropDownPart">
          <span>{t("header.dropdown.dropdown_header.shop_by_category")}</span>
          <ul>
            <li>
              <Link to="/shopAll" className="dropLink">
                {t("header.dropdown.dropdown_content.shop_all_bags")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.duffles")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.backpacks")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.totes")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.cross")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropDownPart">
          <span>{t("header.dropdown.dropdown_header.shop_by_size")}</span>
          <ul>
            <li>
              <Link to="/ShopAll" className="dropLink">
                {t("header.dropdown.dropdown_content.shop_all_bags")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.daily")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.overnight")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.weekend")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.stays")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropDownPart">
          <span>{t("header.dropdown.dropdown_header.featured")}</span>
          <ul>
            <li>
              <Link to="/ShopAll" className="dropLink">
                {t("header.dropdown.dropdown_content.shop_all_bags")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.sleeve")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.item")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.laptop")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropDownPart">
          <div className="dropImg">
            <img src={Bag} alt="Bags" />
          </div>
          <Link className="link">
          {t("header.dropdown.dropdown_content.bag_limited")} <FaArrowRight className="arrowIcon"/>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Bags;
