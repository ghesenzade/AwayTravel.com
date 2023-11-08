import axios from "axios";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();
  const {register, handleSubmit}= useForm();

  const onSubmit = async (data)=>{
    const body = {
      token: JSON.parse(localStorage.getItem("token")),
      otp: data.otp
    };
    await axios.post(process.env.REACT_APP_VERIFY_OTP, body)
    .then(res=>{
      navigate("/change-password");
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }

  const { t } = useTranslation();
  return (
    <section className="otp">
        <div className="container">
            <div className="column">
              <h1 className="title">OTP</h1>
              <form className="column" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="otp" placeholder="Enter OTP code" {...register("otp")}/>
                <button>{t("form.confirm_otp")}</button>
              </form>
            </div>
        </div>
    </section>
  )
}

export default Otp;