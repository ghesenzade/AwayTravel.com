import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// ------------------------------------------IMAGES-------------------------------------------------
import Suitcases from "../../assets/images/SeptemberMini.webp";
import BagOne from "../../assets/images/bagOne.webp";
import BagsImage from "../../assets/images/bags.webp";
import SuitcaseOne from "../../assets/images/suitcaseOne.webp";

// ---------------------------------------------ICON------------------------------------------------------
import { FaArrowRight } from "react-icons/fa6";

const TravelSteps = () => {

    const { t } = useTranslation();

  return (
    <section className='travelSteps'>
        <div className="container">
        <div className="column">
            
            <div className="row">
                <div className="travelImg">
                    <img src={Suitcases} alt="suitcases" />
                </div>

                <div className="steps">
                    <div className="stepTexts">
                        <p>{t("home_sections.travel.smoothly")}</p>
                        <h2>{t("home_sections.travel.travel_title_one")}</h2>
                        <p className="step">{t("home_sections.travel.steps")}</p>
                    </div>

                    <div className="productLinks">
                        <div className="flex">
                            <div className="travelProduct">
                                <Link className="productLink">
                                    <img src={SuitcaseOne} alt="suitcases" />
                                </Link>
                                <Link className="link">
                                    <p className="shop">{t("home_sections.travel.suitcase_btn")}</p>
                                    <div className="arrowIcon"><FaArrowRight/></div>
                                </Link>
                            </div>
                            <div className="travelProduct">
                                <Link className="productLink">
                                    <img src={BagOne} alt="bagOne" />
                                </Link>
                                <Link className="link">
                                    <p className="shop">{t("home_sections.travel.bags_btn")}</p>
                                    <div className="arrowIcon"><FaArrowRight/></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row rowReverse">
                <div className="travelImg">
                    <img src={BagsImage} alt="bags" />
                </div>

                <div className="steps">
                    <div className="stepTexts">
                        <div className="stepText">
                            <p>{t("home_sections.travel.fresh")}</p>
                            <h2>{t("home_sections.travel.travel_title_two")}</h2>
                            <p className="step">{t("home_sections.travel.time_fall")}</p>
                        </div>

                        <div className="productsLink">
                            <Link to="/ShopAll" className="link">
                                <p className="shop">{t("home_sections.travel.shop_btn")}</p>
                                <div className="arrowIcon"><FaArrowRight/></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default TravelSteps