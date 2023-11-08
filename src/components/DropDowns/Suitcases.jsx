import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// icon
import { FaArrowRight } from "react-icons/fa6";

// image
import DropDownImgFirst from "../../assets/images/dropDownImgOne.webp";


const Suitcases = () => {

  const { t } = useTranslation();
  return (
  <div className="suitcases dropDownMenu">
    <div className="dropDown">
      <div className="flex">
        <div className="dropDownPart">
          <span>{t("header.dropdown.dropdown_header.shop_by_size")}</span>
          <ul>
            <li>
              <Link to="/shop-all" className="dropLink">
                {t("header.dropdown.dropdown_content.shop_all_suitcases")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.carry_ons")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.checked")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.compare_carry")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.compare_check")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropDownPart">
          <span>{t("header.dropdown.dropdown_header.shop_by_collection")}</span>
          <ul>
            <li>
              <Link to="/shop-all" className="dropLink">
                {t("header.dropdown.dropdown_content.shop_all_suitcases")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.classic")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.flex")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.aluminium")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropDownPart">
          <span>{t("header.dropdown.dropdown_header.featured")}</span>
          <ul>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.iconic")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.sets")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.fall_for_travel")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropDownPart">
          <div className="dropImg">
            <img src={DropDownImgFirst} alt="DropDownImage" />
          </div>
          <Link className="link">
            {t("header.dropdown.dropdown_content.shop_limited")} <FaArrowRight className="arrowIcon top"/>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Suitcases;
