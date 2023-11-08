
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Auth } from '../utils/AuthContext';


export default function Tabs() {
  const { t }= useTranslation();
  
  const {logIn}=useContext(Auth);
  const [activeTab, setActiveTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    logIn(data);
  };

  return (
    <section className="logIn register">
      <div className="loginContent registerContent">
        <div className="loginTitle registerTitle">
          <h1>{t("login_sign.title")}</h1>
        </div>

        <div className="box">
{/* ------------------------------------------TAB---------------------------------------------- */}
          <div className="tab">
            <div className="tabs">
          {/*---------------- ---login tab --------------------------*/}
              <button
                className={`tabOne ${activeTab === 0 ? 'active' : ''}`}
                onClick={() => handleTabChange(0)}
              >
                <Link to='/login'>{t("login_sign.tab_one")}</Link>
              </button>

          {/*------------------------sign tab --------------------------*/}
              <button
                className={`tabOne ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => handleTabChange(1)}
              >
                <Link to='/sign'>{t("login_sign.tab_two")}</Link>
              </button>
            </div>
          </div>
{/* ----------------------------------FORM PART------------------------------------------------------------ */}
          <div className="customPanel row">
            {activeTab === 0 && (
              <form onSubmit={handleSubmit(onSubmit)} className="loginForm registerForm column">
                
                <input
                  type="email"
                  placeholder = {t("form.email")}
                  {...register('email', {
                    required: t("form.email_validation"),
                    pattern: {
                      value: /^\S+@\S+$/,
                      message: t("form.email_validation_two"),
                    },
                  })}
                />
                {errors.email && <p>{errors.email.message}</p>}
                
                <div className="formInput pwInput">
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

{/*-----------------------------------LOGIN BUTTON-------------------------------------------  */}
                <button type="submit">{t("login_sign.login_btn")}</button>
              </form>
            )}
{/* -------------------------sign----------------------------------------------------------- */}
            {activeTab === 1 && (
              <form className="signForm registerForm column">
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
                <input
                  type="password"
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
                {errors.password && <p>{errors.password.message}</p>}

{/*-----------------------------------SIGN BUTTON-------------------------------------------  */}
                <button type="submit">
                  {t("login_sign.sign_btn")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
{/* --------------------------FORGOT PASSWORD-------------------------------------------------------- */}
      <div className="forgotPwdText">
        <Link to='/forgot-password' className='forgotPwd'>{t("login_sign.forgot_pwd")}</Link>
      </div>
    </section>
  );
}
