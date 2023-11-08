import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


const ChangePassword = () => {

    const navigate = useNavigate();

    const {register, handleSubmit, formState: { errors }}= useForm();

    const [showNewPassword, setShowNewPassword] = useState(false); //showing password in text form
    const [showRepeatPassword, setShowRepeatPassword] = useState(false); //showing password in text form

    const [passwordsMatch, setPasswordsMatch] = useState(true); 

    const onSubmit = async (data)=>{

        if (data.newPassword !== data.repeatNewPassword) {
            setPasswordsMatch(false);
            return;
        }

        setPasswordsMatch(true);

      const body = {
        token: JSON.parse(localStorage.getItem("token")),
        password: data.newPassword
      };
      await axios.post(process.env.REACT_APP_CHANGE_PASSWORD, body)
      .then(res=>{
        navigate("/login");
        console.log(res);
        localStorage.removeItem("token");
      }).catch(err=>{
        console.log(err);
      })
    }

    const { t }= useTranslation();
  return (
    <div className="password">
        <div className="container">
            <div className="column">
                <div className="title">
                    <h1>{t("account_page.change_pwd")}</h1>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="formInput">
                            <input
                                type={showNewPassword ? 'text' : 'password'}
                                placeholder={t("form.new_pwd")}
                                {...register('newPassword',
                                {
                                    required: t("form.pwd_validation"),
                                    minLength: {
                                        value: 8,
                                        message: t("form.pwd_validation_two"),
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*\d).+$/,
                                        message: t("form.pwd_validation_three"),
                                    },
                                }
                                )}
                            />
                            <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="eyeIconBtn">
                                {showNewPassword ? <AiFillEye className='eyeIcon' /> : <AiFillEyeInvisible className='eyeIcon' />}
                            </button>
                        </div>
                        {errors.newPassword && <p>{errors.newPassword.message}</p>}
    
                        <div className="formInput">
                            <input
                                type={showRepeatPassword ? 'text' : 'password'}
                                placeholder={t("form.repeat_pwd")}
                                {...register('repeatNewPassword',
                                { required: t("form.confirm_pwd"),
                                    minLength: {
                                        value: 8,
                                        message: t("form.pwd_validation_two"),
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*\d).+$/,
                                        message: t("form.pwd_validation_three"),
                                    },
                                }
                                )}
                            />
                            <button type="button" onClick={() => setShowRepeatPassword(!showRepeatPassword)} className="eyeIconBtn">
                                {showRepeatPassword ? <AiFillEye className='eyeIcon' /> : <AiFillEyeInvisible className='eyeIcon' />}
                            </button>
                        </div>
                        {errors.repeatNewPassword && <p>{errors.repeatNewPassword.message}</p>}

                        {!passwordsMatch && <p>{t("form.pwd_validation_four")}</p>}

                        <button className="btn">{t("account_page.account_btn")}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChangePassword
