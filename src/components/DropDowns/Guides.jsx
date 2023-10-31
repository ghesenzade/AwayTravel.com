import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Collection from "../../assets/images/guidelines.webp";
import { FaArrowRight } from "react-icons/fa6";

const Guides = () => {

  const { t }= useTranslation();
  return (
  <div className="guide dropDownMenu">
    <div className="dropDown">
      <div className="row">
        <div className="dropDownPart">
          <span>{t("header.dropdown.dropdown_header.featured")}</span>
          <ul>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.best_sellers")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.fall_for_travel")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.get_organized")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropDownPart">
          <span>{t("header.dropdown.dropdown_header.gift_guides")}</span>
          <ul>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.gift_guide")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.gift_card")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropDownPart">
          <span>{t("header.dropdown.dropdown_header.city_guides")}</span>
          <ul>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.lisbon")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.mexico")}
              </Link>
            </li>
            <li>
              <Link to="/" className="dropLink">
                {t("header.dropdown.dropdown_content.lake")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropDownPart">
          <div className="dropImg">
            <img src={Collection} alt="Collection" />
          </div>
          <Link className="link">
            {t("header.dropdown.dropdown_content.upgrade")} <FaArrowRight className="arrowIcon"/>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Guides;
