import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';


export const ChangePassword = () => {

    const {
        handleSubmit: handleSubmitPassword,
        register: registerPassword,
        formState: { errors: passwordErrors },
    } = useForm();


    const onSubmitPassword = (data) => {
        console.log(data);
    };

    const { t }= useTranslation();
  return (
    <section className='changePassword'>
        <div className="container">
            <div className="changePwdTitle row">
                <h3>{t("account_page.change_pwd")}</h3>
            </div>
            <div className="changePwdContent">
                <form onSubmit={handleSubmitPassword(onSubmitPassword)}>
                    <input
                        type="password"
                        placeholder={t("form.current_pwd")}
                        {...registerPassword('currentPassword', { required: t("form.curr_pwd_validation") })}
                    />
                    {passwordErrors.currentPassword && <p>{passwordErrors.currentPassword.message}</p>}

                    <input
                        type="password"
                        placeholder={t("form.new_pwd")}
                        {...registerPassword('newPassword', { required: t("form.new_pwd_validation") })}
                    />
                    {passwordErrors.newPassword && <p>{passwordErrors.newPassword.message}</p>}

                    <input
                        type="password"
                        placeholder={t("form.repeat_pwd")}
                        {...registerPassword('repeatNewPassword', { required: t("form.confirm_pwd") })}
                    />
                    {passwordErrors.repeatNewPassword && <p>{passwordErrors.repeatNewPassword.message}</p>}
                    
                    <button>{t("account_page.account_btn")}</button>
                </form>
            </div>
        </div>
    </section>
  )
}


