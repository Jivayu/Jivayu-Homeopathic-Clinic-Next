import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Slider = (props) => {
  return (
    <>
      <div className={`slider-container ${props.rootClassName} `}>
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="false"
          data-pagination="false"
          data-autoplay-delay="2000"
          data-pause-autoplay-on-mouse-enter="true"
          data-disable-autoplay-on-interaction="true"
          className="slider-thq-slider-elm swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="slider-thq-slider-slide-elm1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="slider-thq-slider-slide-elm2 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="slider-thq-slider-pagination-elm swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="slider-thq-slider-button-prev-elm swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="slider-thq-slider-button-next-elm swiper-button-next"
          ></div>
        </div>
      </div>
      <style jsx>
        {`
          .slider-container {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            justify-content: center;
          }
          .slider-thq-slider-elm {
            width: 100%;
            height: 100%;
            display: inline-block;
            padding: var(--dl-layout-space-halfunit);
            transform: scale(0.75);
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .slider-thq-slider-slide-elm1 {
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            background-size: contain;
            justify-content: center;
            background-image: url('/images/jivayu%20clinic%20logo-1500h.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .slider-thq-slider-slide-elm2 {
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            background-size: contain;
            justify-content: center;
            background-image: url('/images/jivayu%20clinic%20logo-1500h.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .slider-thq-slider-pagination-elm {
            display: none;
          }
          .slider-thq-slider-button-prev-elm {
            display: none;
          }
          .slider-thq-slider-button-next-elm {
            display: none;
          }
          .sliderroot-class-name {
            height: 50%;
          }
          .sliderroot-class-name1 {
            height: var(--dl-layout-size-medium);
            position: static;
            align-self: stretch;
          }
          .sliderroot-class-name2 {
            width: 100%;
            height: 85%;
          }
          .sliderroot-class-name3 {
            height: 50%;
          }
          .sliderroot-class-name4 {
            width: 60%;
            height: 40%;
          }
          .sliderroot-class-name5 {
            width: 75%;
          }
          .sliderroot-class-name6 {
            width: 60%;
            height: 50%;
            align-self: flex-start;
            margin-top: var(--dl-layout-space-twounits);
          }
          .sliderroot-class-name7 {
            width: 100%;
            height: 75px;
            align-self: flex-start;
          }
          .sliderroot-class-name8 {
            width: 100%;
            height: 75px;
            align-self: flex-start;
          }
          .sliderroot-class-name9 {
            width: 100%;
            height: 75px;
            align-self: flex-start;
          }
          .sliderroot-class-name10 {
            width: 100%;
            height: 75px;
            align-self: flex-start;
          }
          @media (max-width: 1200px) {
            .sliderroot-class-name1 {
              height: var(--dl-layout-size-medium);
            }
            .sliderroot-class-name6 {
              width: 100%;
              height: 50%;
              position: static;
            }
            .sliderroot-class-name7 {
              height: var(--dl-layout-size-medium);
            }
            .sliderroot-class-name8 {
              height: var(--dl-layout-size-medium);
            }
            .sliderroot-class-name9 {
              height: var(--dl-layout-size-medium);
            }
            .sliderroot-class-name10 {
              height: var(--dl-layout-size-medium);
            }
          }
          @media (max-width: 991px) {
            .sliderroot-class-name1 {
              width: 100%;
              height: 70px;
            }
            .sliderroot-class-name6 {
              width: 100%;
            }
            .sliderroot-class-name7 {
              width: 100%;
            }
            .sliderroot-class-name8 {
              width: 100%;
            }
            .sliderroot-class-name9 {
              width: 100%;
            }
            .sliderroot-class-name10 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .sliderroot-class-name4 {
              width: 100%;
              height: 60%;
            }
            .sliderroot-class-name5 {
              width: 100%;
            }
          }
          @media (max-width: 400px) {
            .sliderroot-class-name4 {
              width: 80%;
              height: 50%;
            }
            .sliderroot-class-name5 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Slider.defaultProps = {
  rootClassName: '',
}

Slider.propTypes = {
  rootClassName: PropTypes.string,
}

export default Slider
