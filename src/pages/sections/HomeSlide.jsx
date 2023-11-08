import { useTranslation } from "react-i18next";

// ---------------------------------------IMAGES----------------------------------------------------
import Vogue from "../../assets/images/Vogue5.webp";
import WSJ from "../../assets/images/WSJ5.webp";
import Observer from "../../assets/images/Observer5.webp";

// -----------------------------------------SWIPER-------------------------------------------
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomeSlide = () => {

  const { t } = useTranslation();

  return (
    <section className="slider">
      <div className="sliderHead">
        <h2>{t("home_sections.slider.title")}</h2>
      </div>
      <div className="slide">
        <Swiper
          className="mySwiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false, 
          }}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => swiper}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='swiperSlide'>
            <div className="column">
              <div className="quote"><p><q>{t("home_sections.slider.slide_one")}</q></p></div>
              <div className="quoteLogo">
                <img src={Vogue} alt="Vogue" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiperSlide'>
            <div className="column">
              <div className="quote"><p><q>{t("home_sections.slider.slide_two")}</q></p></div>
              <div className="quoteLogo">
                <img src={WSJ} alt="WSJ" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiperSlide'>
            <div className="column">
              <div className="quote"><p><q>{t("home_sections.slider.slide_three")}</q></p></div>
              <div className="quoteLogo">
                <img src={Observer} alt="Observer" />
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlide;
