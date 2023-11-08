import { useTranslation } from "react-i18next";

// images
import Why from "../assets/images/aboutImages/aboutImgOne.webp";
import Approach from "../assets/images/aboutImages/aboutImgTwo.webp";
import Travel from "../assets/images/aboutImages/aboutImgThree.webp";

const About = () => {

    const{ t } = useTranslation();

  return (
    <section className="about">
        <div className="aboutInfo">
          <div className="infoContent">

              <div className="row">
                  <div className="infoImg">
                      <img src={Why} alt="Why" />
                  </div>
                  <div className="info">
                      <h3>{t("about_page.about_title_one")}</h3>
                      <p>{t("about_page.about_content_one")}</p>
                  </div>
              </div>

              <div className="rowReverse row">
                  <div className="infoImg">
                      <img src={Approach} alt="Approach" />
                  </div>
                  <div className="info">
                      <h3>{t("about_page.about_title_two")}</h3>
                      <p>{t("about_page.about_content_two")}</p>
                  </div>
              </div>
              
              <div className="row">
                  <div className="infoImg">
                      <img src={Travel} alt="Travel" />
                  </div>
                  <div className="info">
                      <h3>{t("about_page.about_title_three")}</h3>
                      <p>{t("about_page.about_content_three")}</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default About