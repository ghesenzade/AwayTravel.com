import { useTranslation } from "react-i18next"

const ForgotPwd = () => {

    const { t } = useTranslation();
  return (
    <section className="forgotPwd">
        <div className="forgotContent">
            <div className="forgotTitle">
                <h1>{t("login_sign.forgot_pwd")}</h1>
            </div>
            <div className="forgotInfo">
                <p>{t("forgot_password.info")}</p>
            </div>
            <div className="forgotForm">
                <form>
                    <input type="email" placeholder={t("form.email")}/>
                    <button type="submit">{t("form.submit")}</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ForgotPwd