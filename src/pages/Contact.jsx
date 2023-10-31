import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useContactMessage } from '../utils/Swal';
// -------------------------------------IMAGE-------------------------------------------------
import ContactHeroImg from '../assets/images/away-contact-hero-img.webp';

// -------------------------------------ICONS-----------------------------------------------
import { TbMessageCircle2 } from 'react-icons/tb';
import { FaArrowRight } from 'react-icons/fa6';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  const { showContactMessage } = useContactMessage();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    reset();
    // console.log(data);
    showContactMessage();
  };

  const { t } = useTranslation();

  return (
    <section className="contact">
      <div className="contactContent">
        <div className="contactTop row">

          <div className="contactImg">
            <img src={ContactHeroImg} alt="ContactHeroImg" />
          </div>

          <div className="contactHeroText column">

            <div className="text">
              <h1>{t("contact_page.title")}</h1>
              <p>{t("contact_page.info")}</p>
            </div>

            <div className="contactLinks">
              <div className="row">
                <div className="contactLink column">
                  <div className="messageIcon">
                    <Link className="iconLink">
                      <TbMessageCircle2 className="icon" />
                    </Link>
                  </div>
                  <span>{t("contact_page.hours")}</span>
                  <Link className="link">
                    {t("contact_page.link")} <FaArrowRight className="arrowIcon" />
                  </Link>
                </div>
                <div className="contactLink column">
                  <div className="messageIcon">
                    <Link className="iconLink">
                      <AiOutlineMail className="icon" />
                    </Link>
                  </div>
                  <span>{t("contact_page.day")}</span>
                  <Link className="link">
                    {t("contact_page.link")} <FaArrowRight className="arrowIcon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactBottom">
          <div className="container">
            <div className="bottomContent">
              <h2>{t("contact_page.form")}</h2>
              <p>{t("contact_page.get_info")}</p>
{/*---------------------------------------------FORM-----------------------------------  */}
              <form className="form column" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder={t("form.full_name")}
                  {...register('fullName', {
                    required: t("form.full_name_validation"),
                  })}
                />
                {errors.fullName && (
                  <span className="errorMessage">{errors.fullName.message}</span>
                )}
                <input
                  type="email"
                  placeholder={t("form.email")}
                  {...register('email', {
                    required: t("form.email_validation"),
                    pattern: {
                      value: /^\S+@\S+$/,
                      message: t("form.email_validation_two"),
                    },
                  })}
                />
                {errors.email && (
                  <span className="errorMessage">{errors.email.message}</span>
                )}
                <input
                  type="text"
                  placeholder={t("form.help")}
                  {...register('message', {
                    required: t("form.message"),
                  })}
                />
                {errors.message && (
                  <span className="errorMessage">{errors.message.message}</span>
                )}

                <button type="submit" className="submit-button">
                  {t("form.submit")}
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
