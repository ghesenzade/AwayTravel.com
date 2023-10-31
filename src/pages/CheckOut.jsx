import React from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { CheckOutCard } from "../components/CheckOutCard";
import { useCheckOutMessage } from "../utils/Swal"

function CheckOut() {
  const { showCheckOutMessage } = useCheckOutMessage();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    reset();
    showCheckOutMessage();
  };
  const { t }= useTranslation();

  return (
    <section className="checkOut">
      <div className="container">
        <div className="checkOutContent row">
          <div className="checkForm column">
{/* -------------------------------title------------------------------------------ */}
            <div className="checkTitle">
              <h2>{t("checkout_page.address")}</h2>
            </div>
{/* -----------------------------FORM------------------------------------------------ */}
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
              <div className="input">
                <input
                  type="text"
                  placeholder={t("form.name")}
                  {...register('firstName', {
                    required: t("form.name_validation"),
                  })}
                />
                {errors.firstName && (
                  <span className="error">{errors.firstName.message}</span>
                )}
              </div>

              <div className="input">
                <input
                  type="text"
                  placeholder={t("form.surname")}
                  {...register('lastName', {
                    required: t("form.surname_validation"),
                  })}
                />
                {errors.lastName && (
                  <span className="error">{errors.lastName.message}</span>
                )}
              </div>

              <div className="input column">
                <input
                  type="text"
                  placeholder={t("form.address")}
                  {...register('address', {
                    required: t("form.address_validation"),
                  })}
                />
                {errors.address && (
                  <span className="error">{errors.address.message}</span>
                )}
              </div>

              <div className="input">
                <input
                  type="text"
                  placeholder={t("form.city")}
                  {...register('city', {
                    required: t("form.city_validation"),
                  })}
                />
                {errors.city && (
                  <span className="error">{errors.city.message}</span>
                )}
              </div>

              <div className="input">
                <select name="country" id="country" {...register('country')}>
                  <option value="uk">United States</option>
                  <option value="canada">Canada</option>
                </select>
              </div>

              <div className="input">
                <input
                  type="text"
                  placeholder={t("form.phone")}
                  {...register('phoneNumber', {
                    required: t("form.phone_validation"),
                    pattern: {
                      value: /^[0-9]+$/,
                      message: t("form.phone_validation_two"),
                    },
                  })}
                />
                {errors.phoneNumber && (
                  <span className="error">{errors.phoneNumber.message}</span>
                )}
              </div>

              <button type="submit">{t("form.submit")}</button>

            </form>
          </div>

{/* -------------------------------ORDER PART----------------------------------------------------- */}
          <div className="order">
            <div className="orderTitle">
              <h3>{t("checkout_page.order")}</h3>
            </div>
            <div className="products column">
              <div className="checkOutCard">
                <CheckOutCard/>
              </div>
              <div className="subtotal row justifyBetween">
                <p>{t("cart.subtotal")}</p>
                <p>$980</p>
              </div>
              <div className="shipping row justifyBetween">
                <p>{t("cart.shipping")}</p>
                <p>{t("cart.free")}</p>
              </div>
              <hr />
              <div className="total row justifyBetween">
                <h4>{t("cart.total")}</h4>
                <h4>$980</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckOut;
