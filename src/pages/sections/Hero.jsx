import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// -----------------------------------HERO IMG-----------------------------------------
import HeroImg from "../../assets/images/Brand_Thailand_01_2179_Web_HP_4x3.webp";

const Hero = () => {

  const { t }= useTranslation();
  return (
    <section className="hero">
      <div className="row">
        {/* ------------------HERO IMG----------------- */}
        <div className="heroImg">
          <img src={HeroImg} alt="HeroImg" />
        </div>
        {/* -----------------HERO CONTENT------------------------ */}
        <div className="heroContent">
          <h1 className="heroTitle">
            <span>{t("home_sections.hero.hero_title1")}</span>
            <br />
            <span>{t("home_sections.hero.hero_title2")}</span>
            <br />
            <span>{t("home_sections.hero.hero_title3")}</span>
          </h1>
          <Link to="/shop-all" className="heroBtn">
            {t("home_sections.hero.hero_btn")}
          </Link>
        </div>
      </div>
    </section>  )
}

export default Hero;

