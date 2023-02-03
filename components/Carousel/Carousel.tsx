import { useEffect, useState } from "react";
import { ReactNode } from "react";
import { Swiper } from 'swiper/react';
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import styles from './WorksCarousel.module.scss';
import { Navigation } from "swiper";

// import 'swiper/css';
import 'swiper/css/pagination';

type Props = {
  data
  children?: ReactNode;
}

export const Carousel = ({ children }) => {


  return (
    <div className="container-fluid">
      <div className="row">
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
              // spaceBetween: 10,
              centeredSlides: false
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
              centeredSlides: true
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
              centeredSlides: true,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 10,
              centeredSlides: true,
            },
            1920: {
              slidesPerView: 3,
              spaceBetween: 10,
              centeredSlides: true,
            },
          }}
        >
          {children}

        </Swiper>
      </div>
    </div>
  )
}