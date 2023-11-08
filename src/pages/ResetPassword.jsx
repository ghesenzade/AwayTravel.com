import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


export const ResetPassword = () => {
    const navigate = useNavigate();
    
    const {register, handleSubmit, formState: { errors }} = useForm();
    
    const onSubmit = async (data) =>{
        const body = {
            token: JSON.parse(localStorage.getItem("token")),
            email: data.email
        }
        await axios.post(process.env.REACT_APP_RESET_PASSWORD, body)
        .then(res=>{
            console.log(res);
            navigate("/otp");
        }).catch(err=>{
            console.log(err);
        })
    }

    const { t }= useTranslation();
  return (
    <section className='password'>
        <div className="container">
            <div className="column">
                <div className="title">
                    <h3>{t("account_page.reset_pwd")}</h3>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="formInput">
                            <input 
                                type="email" 
                                name='email' 
                                placeholder={t("form.email")}
                                {...register("email", {
                                    required: t("form.email_validation"),
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: t("form.email_validation_two"),
                                    },
                                })}
                            />
                            {errors.email && <p className="error">{errors.email.message}</p>}
                        </div>
                        <button className='btn'>{t("form.send_otp")}</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}


