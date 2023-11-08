import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

//---------------------------------------------- icons--------------------------------------------------------
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

// --------------------------------------messages---------------------------------------------------------
import { useSuccessMessage, useErrorMessage } from '../utils/Swal';

export default function Sign() {
  const { showSuccessMessage } = useSuccessMessage();
  const { showError } = useErrorMessage();

  const navigate = useNavigate()
  
  const [activeTab, setActiveTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const onSubmit = async (data) => {
    await axios
    .post(process.env.REACT_APP_REGISTER, data)
    .then(res=>{
      showSuccessMessage();
      navigate("/login")
    }).catch(err=>{
      console.error(err);
      showError();
    });
  };


  const { t } = useTranslation();

  return (
    <section className="register">
      <div className="registerContent">
        <div className="registerTitle">
          <h1>{t("login_sign.title")}</h1>
        </div>
        <div className="box">
{/* -------------------------------------TAB---------------------------------------------- */}
          <div className="tab">
            <div className="tabs">
          {/* -----------------------------LOGIN TAB-------------------------- */}
              <button
                className={`tabOne ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => handleTabChange(0)}
              >
                <Link to="/login" className="tabLinks">
                  {t("login_sign.tab_one")}
                </Link>
              </button>
            {/* -------------------------SIGN TAB------------------------------ */}
              <button
                className={`tabOne ${activeTab === 0 ? 'active' : ''}`}
                onClick={() => handleTabChange(1)}
              >
                <Link to="/sign" className="tabLinks">
                  {t("login_sign.tab_two")}
                </Link>
              </button>
            </div>
          </div>
{/* -------------------------------FORM---------------------------------------- */}
          <div className="customPanel row">
            <form onSubmit={handleSubmit(onSubmit)} className="registerForm column">
              
              <input
                type="text"
                placeholder={t("form.name")}
                {...register('name', {required: t("form.name_validation"),})}
              />
              {errors.name && <p>{errors.name.message}</p>}

              <input
              type="text"
              placeholder={t("form.surname")}
              {...register('surname', {required: t("form.surname_validation"),})}
              />
              {errors.surname && <p>{errors.surname.message}</p>}

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
              {errors.email && <p>{errors.email.message}</p>}

              <div className="formInput pwdInput">
                <input
                  className='pwd'
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t("form.password")}
                  {...register('password', {
                    required: t("form.pwd_validation"),
                    minLength: {
                      value: 8,
                      message: t("form.pwd_validation_two"),
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*\d).+$/,
                      message: t("form.pwd_validation_three"),
                    },
                  })}
                />
                
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="eyeIconBtn">
                  {showPassword ? <AiFillEye className='eyeIcon' /> : <AiFillEyeInvisible className='eyeIcon'/>}
                </button>
              </div>
              {errors.password && <p>{errors.password.message}</p>}
{/* --------------------------------------SUBMIT BUTTON----------------------------------- */}
              <button type="submit">
                  {t("login_sign.sign_btn")}
              </button>
            </form>
          </div>
        </div>
        <div className="signText">
          <p>
            {t("login_sign.sign_bottom")} <Link to="/privacy-policy">{t("login_sign.sign_bottom2")}</Link> {t("login_sign.text3")} <Link to="/terms">{t("login_sign.text4")}</Link>. {t("login_sign.text5")}
          </p>
        </div>
      </div>
    </section>
  );
}
