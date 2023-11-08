import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Auth } from '../utils/AuthContext';

const Account = () => {
    const { userIn, signOut , } = useContext(Auth);
    const { user } = useContext(Auth);
    

    const {
        handleSubmit: handleSubmitChanges,
        register: registerChanges,
        formState: { errors: changeErrors },
    } = useForm();

    

    // CHANGE INFORMATION
    const onSubmitChanges = (data) => {
        console.log(data);
    };

    // translation
    const { t } = useTranslation();
    
    return (
        <section className='account'>
            <div className="container">
                <div className="signOutLink">
                    {userIn && (
                        <Link to="/" className='signOut' onClick={signOut}>{t("account_page.sign_out")}</Link>
                    )}
                </div>
                <div className="accountContent column">
                    <div className="accountTitle justifyBetween">
                        <h1>{t("account_page.title")}</h1>
                    </div>
{/* ------------------------------CHANGE INFO---------------------------------------------------- */}
                    <div className="form">
                        <form className='column' onSubmit={handleSubmitChanges(onSubmitChanges)}>
                            <input
                                type="text"
                                placeholder={t("form.name")}
                                defaultValue={user.name}
                                {...registerChanges('firstName', { required: t("form.name_validation") })}
                            />
                            {changeErrors.firstName && <p>{changeErrors.firstName.message}</p>}

                            <input
                                type="text"
                                defaultValue={user.surname}
                                placeholder={t("form.surname")}
                                {...registerChanges('lastName', { required: t("form.surname_validation") })}
                            />
                            {changeErrors.lastName && <p>{changeErrors.lastName.message}</p>}

                            <input
                                type="email"
                                placeholder={t("form.email")}
                                defaultValue={user.email}
                                {...registerChanges('email', {
                                    required: t("form.email_validation"),
                                    pattern: {
                                        value: /^\S+@\S+$/,
                                        message: t("form.email_validation_two"),
                                    }
                                })}
                            />
                            {changeErrors.email && <p>{changeErrors.email.message}</p>}

                            <button type='submit'>{t("account_page.account_btn")}</button>
                        </form>
                    </div>
{/* ---------------------------------CHANGE PASSWORD------------------------------------------------- */}
                    <div className="changePwd">
                        <Link to="/reset-password">{t("account_page.reset_pwd")}</Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Account;
