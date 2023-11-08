import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

// ------------------------------------ICON--------------------------------------------------
import { FaArrowRight } from "react-icons/fa6";


const GettingMoney = () => {

    const { t } = useTranslation();

  return (
    <section className="gettingMoney">
        <div className="container">
            <div className="row">

                <div className="leftSide">
                    <p>{t("home_sections.getting_money.title")}</p>
                </div>
                
                <div className="rightSide">
                    <p>{t("home_sections.getting_money.info")}
                    <Link className="terms"> {t("home_sections.getting_money.link")}</Link>
                    </p>
                    <Link className="link">
                        <p>{t("home_sections.getting_money.btn")}</p>
                        <div className="arrowIcon"><FaArrowRight className="top"/></div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GettingMoney