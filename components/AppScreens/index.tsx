"use client";

import styles from "./AppScreens.module.scss";
import Tagline from "../Tagline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

type AppScreensProps = {};

export default function AppScreens({}: AppScreensProps) {
  return (
    <div className={styles.screens}>
      <div className={styles.container}>
        <div className={styles.screensContent}>
          <Tagline content="our app" />
          <p className={styles.title}>Few Screens from our App</p>
        </div>
        <div className={styles.slider}>
          <Swiper
            spaceBetween={2}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            loopedSlides={5}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.slide}>
              <img src="/Screens/S1.png" alt="1" className={styles.image} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src="/Screens/S2.png" alt="2" className={styles.image} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src="/Screens/S3.png" alt="3" className={styles.image} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src="/Screens/S4.png" alt="4" className={styles.image} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src="/Screens/S5.png" alt="5" className={styles.image} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
