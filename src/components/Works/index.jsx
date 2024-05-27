// import style from "./works.module.scss";

// export default function Works() {

//     return (
//         <>
//         <section id="works" className={style.works}>
//             <div className={style.works__container}>
//                     <h2 className={style.servises__title}>Наші роботи</h2>
//                     <p className={style.servises__text}>Якийсь текст</p>

//             </div>
//         </section>
//         </>
//     )
// }

import { Swiper, SwiperSlide } from "swiper/react";
import worksImg from "./worksImg.js";
import { Arrow } from "../icons/arrow.jsx";
import style from "./works.module.scss"

import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Works() {
  return (
    <section id="works" className={style.works}>
      <div className={style.works__container}>
        <div className={style.works__content}>
        <h1 className={style.works__title}>Наші роботи</h1>
        <Swiper
          effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        // loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={style.swiper}
        breakpoints={{
          900: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          600: {
            slidesPerView: 2,
          },
          // 500: {
          //   slidesPerView: 2,
          // },
          300: {
            slidesPerView: 1,
          },
        }}
        >
          {worksImg.map((image, index) => (
            <SwiperSlide key={index} className={style.swiperSlide}>
              <img src={image.imgSrc} alt={image.title} />
            </SwiperSlide>
          ))}
          <div className={style.sliderControler}>
            <div className={`${style.swiperButtonPrev} ${style.sliderArrow}`}>
              <Arrow />
            </div>
            <div className={`${style.swiperButtonNext} ${style.sliderArrow}`}>
              <Arrow />
            </div>
            <div className={style.swiperPagination}></div>
          </div>
        </Swiper>
        </div>
      </div>
    </section>
  );
}
