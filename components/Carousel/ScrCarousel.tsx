import { useEffect, useState } from "react";
import { ReactNode } from "react";
import Link from "next/link";
import MCarousel from 'react-multi-carousel';
import { CarouselItem } from "./CarouselItem";
import "react-multi-carousel/lib/styles.css";
import { Genre } from "@/models/Genre.model";
type Props = {
  data
  children?: ReactNode;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const ScrCarousel = ({ data }: Genre) => {
  const [hoverState, setHoverState] = useState({ isHovered: false, index: undefined });

  const handleMouseEnter = (i) => {
    setHoverState({ isHovered: true, index: i });
  };

  const handleMouseLeave = () => {
    setHoverState({ isHovered: false, index: undefined });
  };

  return (
    <div>
      <MCarousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="carousel-custom"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}

        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}

        swipeable>
        {

          data.allGenres.items.map((payItem, index) => (
            <Link key={index} href={payItem.genre.tag}>
              <a>
                <CarouselItem className={"container item"} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>

                  <div data-item={payItem.genre.tag} className="item__container" >

                    <div className="item__text-container">

                      <img src={payItem.image.url} className="item__image" />
                      <div className={`item__video-player-overlay ${hoverState.isHovered && hoverState.index === index ? 'show' : ''}`}>
                        {payItem?.genreVideo?.url && <video src={payItem.genreVideo.url} autoPlay muted loop />}
                        <div className="item__title">
                          <p className="item__tag tag">{payItem.genre.tag.toUpperCase()}</p>
                        </div>
                      </div>
                    </div>
                  </div>




                </CarouselItem>
              </a>
            </Link>
          ))
        }
      </MCarousel>
    </div>


  )
}