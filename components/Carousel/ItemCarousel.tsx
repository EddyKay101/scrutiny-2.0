import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { Navigation } from 'swiper';
import { ReactNode } from "react";
import ImageText, { ImageTextItem } from '@/components/ImageText';
interface Props<T> {
  payload?: ImageTextItem[] | T[];
  children?: ReactNode;
  showImageText?: boolean;
}
const ItemCarousel = <T extends any>({ payload, children, showImageText = false }: Props<T>) => {
  const StyledSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    color: #e7bb6a !important;
  }`

  return (

    <StyledSwiper navigation={true} modules={[Navigation]} className="carousel-swiper">
      {
        payload.map((item, index) => (
          <SwiperSlide key={index}>
            {
              showImageText ? <ImageText payload={item} /> : children
            }
          </SwiperSlide>
        ))
      }
    </StyledSwiper>
  )
}

export default ItemCarousel;