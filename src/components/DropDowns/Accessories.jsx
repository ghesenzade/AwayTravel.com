import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Accessorie from "../../assets/images/accessories.webp";
import { FaArrowRight } from "react-icons/fa6";



const Accessories = () => {

    const { t } = useTranslation();
  return (
<div className="accessories dropDownMenu">
    <div className="dropDown">
        <div className="row">
            <div className="dropDownPart">
                <span>{t("header.dropdown.dropdown_header.shop_by_category")}</span>
                <ul>
                    <li><Link to="/shopAll" className="dropLink">{t("header.dropdown.dropdown_content.shop_accessories")}</Link></li>
                    <li><Link to="/" className="dropLink">{t("header.dropdown.dropdown_content.packing")}</Link></li>
                    <li><Link to="/" className="dropLink">{t("header.dropdown.dropdown_content.toiletry")}</Link></li>
                    <li><Link to="/" className="dropLink">{t("header.dropdown.dropdown_content.tech")}</Link></li>
                    <li><Link to="/" className="dropLink">{t("header.dropdown.dropdown_content.essential")}</Link></li>
                    <li><Link to="/" className="dropLink">{t("header.dropdown.dropdown_content.goods")}</Link></li>
                </ul>
            </div>
            <div className="dropDownPart">
                <div className="dropImg">
                    <img src={Accessorie} alt="accessories" />
                </div>
                <Link className="link">{t("header.dropdown.dropdown_content.pack")} <FaArrowRight className="arrowIcon"/></Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default Accessories