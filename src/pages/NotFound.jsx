import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

// images
import Suitcases404 from "../assets/images/404_suitcases (1).webp";
import Bags404 from "../assets/images/404_bags.webp";
import Accessories404 from "../assets/images/404_accessories.webp";

// icon
import { FaArrowRight } from "react-icons/fa6";

const NotFound = () => {
    const { t } = useTranslation();

  return (
    <section className="notFound">
        <div className="content">

            <div className="title">
                <h1>{t("not_found.title")}</h1>
            </div>

            <div className="info">
                <p>{t("not_found.info1")}<Link to='/' className="home"> {t("not_found.link")}</Link> {t("not_found.info2")}</p>
            </div>
            
            <div className="productByCategory">
                <div className="categoryTitle"><h3>{t("not_found.shop_by_category")}</h3></div>
                <div className="products row">
                    <div className="singleProduct">
                        <div className="productImg">
                            <img src={Suitcases404} alt="Suitcases404" />
                        </div>
                        <div className="productLink">
                            <Link className="link">
                                <p>{t("header.navbar.suitcases")}</p>
                                <div className="arrowIcon"><FaArrowRight/></div>
                            </Link>
                        </div>
                    </div>
                    <div className="singleProduct">
                        <div className="productImg">
                            <img src={Bags404} alt="Bags404" />
                        </div>
                        <div className="productLink">
                            <Link className="link">
                                <p>{t("header.navbar.bags")}</p>
                                <div className="arrowIcon"><FaArrowRight/></div>
                            </Link>
                        </div>
                    </div>
                    <div className="singleProduct">
                        <div className="productImg">
                            <img src={Accessories404} alt="Accessories404" />
                        </div>
                        <div className="productLink">
                            <Link className="link">
                                <p>{t("header.navbar.accessories")}</p>
                                <div className="arrowIcon"><FaArrowRight/></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NotFound