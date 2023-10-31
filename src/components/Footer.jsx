import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


// --------------------------------------ICONS-----------------------------------------------
import {
  FaCheck,
  FaSquareFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaArrowRightLong,
} from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const {t, i18n} = useTranslation();

  // --------------------------------------EMAIL VALIDATION---------------------------------
  const handleEmailSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
      setSubscribed(true);
    }
  };


  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footerMenus">
            <div className="footerMenuInfo">
              <span>{t("footer.shop.title")}</span>
              <ul className="footerMenu">
                <li>
                  <Link className="footerLink">{t("footer.shop.suitcase")}</Link>
                </li>
                <li>
                  <Link className="footerLink">{t("footer.shop.bags")}</Link>
                </li>
                <li>
                  <Link className="footerLink">{t("footer.shop.accessories")}</Link>
                </li>
                <li>
                  <Link className="footerLink">{t("footer.shop.best")}</Link>
                </li>
                <li>
                  <Link className="footerLink">{t("footer.shop.new")}</Link>
                </li>
                <li>
                  <Link to="/ShopAll" className="footerLink">
                    {t("footer.shop.all")}
                  </Link>
                </li>
                <li>
                  <Link className="footerLink">{t("footer.shop.card")}</Link>
                </li>
              </ul>
            </div>
            <div className="footerMenuInfo">
              <span>{t("footer.about.title")}</span>
              <ul className="footerMenu">
                <li>
                  <Link to="/About" className="footerLink">
                    {t("footer.about.story")}
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="footerLink">
                    {t("footer.about.stores")}
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="footerLink">
                    {t("footer.about.career")}
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="footerLink">
                    {t("footer.about.corporate")}
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="footerLink">
                    {t("footer.about.impact")}
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="footerLink">
                    {t("footer.about.press")}
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="footerLink">
                    {t("footer.about.refer")}
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="footerLink">
                    {t("footer.about.sustainability")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footerMenuInfo">
              <span>{t("footer.help.title")}</span>
              <ul className="footerMenu">
                <li>
                  <Link className="footerLink">{t("footer.help.order")}</Link>
                </li>
                <li>
                  <Link className="footerLink">{t("footer.help.exchange")}</Link>
                </li>
                <li>
                  <Link className="footerLink">{t("footer.help.return")}</Link>
                </li>
                <li>
                  <Link className="footerLink" to="/Contact">
                    {t("footer.help.contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footerMenuInfo">
              <span>{t("footer.faqs.faq_title")}</span>
              <ul className="footerMenu">
                <li>
                  <Link className="footerLink">{t("footer.faqs.faq")}</Link>
                </li>
                <li>
                  <Link className="footerLink">{t("footer.faqs.repairs")}</Link>
                </li>
              </ul>
              <div className="footerMenuIcons">
                <ul className="footerIcons">
                  <li className="icon">
                    <Link className="iconLink">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li className="icon">
                    <Link className="iconLink">
                      <FaSquareFacebook />
                    </Link>
                  </li>
                  <li className="icon">
                    <Link className="iconLink">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li className="icon">
                    <Link className="iconLink">
                      <FaPinterest />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
{/* --------------------------------FOOTER REGISTER PART----------------------------------------------- */}
          <div className="footerRegister">
            <h2>{t("footer.footer_sign.footer_sign_title")}</h2>
            <p>
              {t("footer.footer_sign.sign_info")}
            </p>
            {subscribed ? (
              <div className="youIn row">
                <div className="checkIcon">
                  <FaCheck />
                </div>
                <div className="checkingContent">
                  <p>
                    <b>{t("footer.footer_sign.you_in")}</b>
                  </p>
                  <p>{t("footer.footer_sign.message")}</p>
                </div>
              </div>
            ) : (
              <div className="formWithValidation">
                <form
                  className="emailInput"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleEmailSubmit();
                  }}
                >
                  <input
                    type="email"
                    placeholder={t("form.email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button onClick={handleEmailSubmit}>
                    <FaArrowRightLong />
                  </button>
                </form>
                {!isValidEmail && (
                  <p className="validation-error">
                    {t("footer.footer_sign.email_validation")}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

{/* ---------------------------------------FOOTER BOTTOM--------------------------------- */}
      <div className="footerBottom">
        <hr />
        <div className="row">
{/* ------------------------------------------CHANGING LANGUAGE-------------------------------- */}
          <div className="box">
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            <button onClick={() => i18n.changeLanguage("az")}>AZ</button>
          </div>
{/* -----------------------------------------LINKS-------------------------------- */}
          <div className="footerRightSide">
            <div className="footerLinks row">
              <Link className="footerBottomLinks">{t("footer.footer_bottom.privacy")}</Link>
              <Link className="footerBottomLinks">{t("footer.footer_bottom.terms")}</Link>
              <Link className="footerBottomLinks">{t("footer.footer_bottom.accessibility")}</Link>
            </div>
            <div className="footerBottomLinks date">
              © <span> 2023 </span> JRSK, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
