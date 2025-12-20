import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Slider from './slider'

const ContactMainInfo = (props) => {
  return (
    <>
      <div className={`contact-main-info-container1 ${props.rootClassName} `}>
        <div className="contact-main-info-container2">
          <Slider rootClassName="sliderroot-class-name7"></Slider>
        </div>
        <div className="contact-main-info-container3">
          <iframe
            src="https://www.google.com/maps?q=Jivayu Homeopathy Clinic&amp;output=embed"
            address="Jivayu Homeopathy Clinic"
            className="contact-main-info-google-maps"
          ></iframe>
        </div>
        <div className="contact-main-info-container4">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="contact-main-info-image"
          />
          <h1 className="contact-main-info-text1">
            {props.heading1 ?? (
              <Fragment>
                <span className="contact-main-info-text5">9823203912</span>
              </Fragment>
            )}
          </h1>
          <h1 className="contact-main-info-text2">
            {props.heading ?? (
              <Fragment>
                <span className="contact-main-info-text7">
                  Book Your Personalize Homeopathic Consultation Now !
                </span>
              </Fragment>
            )}
          </h1>
        </div>
        <div className="contact-main-info-container5">
          <h1 className="contact-main-info-text3">
            {props.heading12 ?? (
              <Fragment>
                <span className="contact-main-info-text6">
                  Rajiv Nagar, Beside Indian Auto Gas pump, Front of Orient
                  hotel, Hingna Road, Nagpur, Maharashtra, 440016
                </span>
              </Fragment>
            )}
          </h1>
          <h1 className="contact-main-info-text4">
            {props.heading3 ?? (
              <Fragment>
                <span className="contact-main-info-text8">
                  Reach Us Via Google Profile
                </span>
              </Fragment>
            )}
          </h1>
        </div>
      </div>
      <style jsx>
        {`
          .contact-main-info-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-self: center;
            border-color: rgba(238, 10, 231, 0.52);
            border-width: 0.5px;
            border-radius: var(--dl-layout-radius-buttonradius);
            flex-direction: column;
            backdrop-filter: blur(10px);
            justify-content: space-between;
          }
          .contact-main-info-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 10%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .contact-main-info-container3 {
            width: 100%;
            display: flex;
            align-self: center;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .contact-main-info-google-maps {
            width: 100%;
            height: 450px;
            align-self: center;
          }
          .contact-main-info-container4 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-start;
            margin-top: var(--dl-layout-space-halfunit);
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-inputradius);
            flex-direction: row;
            backdrop-filter: blur(7px);
            justify-content: space-between;
          }
          .contact-main-info-image {
            width: var(--dl-layout-size-large);
            display: flex;
            transform: rotate(0deg);
            align-self: center;
            object-fit: cover;
            margin-left: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .contact-main-info-text1 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 48px;
            align-self: center;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 500;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-halfunit);
          }
          .contact-main-info-text2 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            width: 40%;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 500;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-halfunit);
            animation-name: fadeInDown;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: linear;
          }
          .contact-main-info-container5 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-start;
            margin-top: var(--dl-layout-space-halfunit);
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-inputradius);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-halfunit);
            backdrop-filter: blur(7px);
            justify-content: space-between;
          }
          .contact-main-info-text3 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            width: 60%;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 500;
            margin-left: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-halfunit);
            animation-name: fadeInDown;
            animation-delay: 0s;
            backdrop-filter: blur(5px);
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: linear;
          }
          .contact-main-info-text4 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            width: 40%;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 500;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-halfunit);
            animation-name: fadeInDown;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: linear;
          }
          .contact-main-info-text5 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
            letter-spacing: 1.2px;
          }
          .contact-main-info-text6 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
            letter-spacing: 1.2px;
          }
          .contact-main-info-text7 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
            letter-spacing: 1.2px;
          }
          .contact-main-info-text8 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
            letter-spacing: 1.2px;
          }
          @media (max-width: 991px) {
            .contact-main-info-container2 {
              justify-content: center;
            }
            .contact-main-info-container4 {
              width: 100%;
            }
            .contact-main-info-container5 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .contact-main-info-container4 {
              padding-left: 0px;
              flex-direction: column;
            }
            .contact-main-info-image {
              width: var(--dl-layout-size-medium);
              align-self: center;
            }
            .contact-main-info-text1 {
              font-size: 32px;
            }
            .contact-main-info-text2 {
              width: 100%;
              font-size: 16px;
              text-align: center;
            }
            .contact-main-info-container5 {
              padding-left: 0px;
              flex-direction: column;
            }
            .contact-main-info-text3 {
              width: 100%;
              font-size: 14px;
              text-align: center;
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: 2px;
              padding-right: 2px;
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .contact-main-info-text4 {
              width: 100%;
              font-size: 14px;
              text-align: center;
            }
          }
          @media (max-width: 400px) {
            .contact-main-info-image {
              width: var(--dl-layout-size-medium);
            }
            .contact-main-info-text2 {
              font-size: 16px;
            }
            .contact-main-info-text4 {
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

ContactMainInfo.defaultProps = {
  heading1: undefined,
  imageSrc1: '/images/jhc_consultation_homeopathy-200h.webp',
  heading12: undefined,
  rootClassName: '',
  imageAlt1: 'image',
  heading: undefined,
  heading3: undefined,
}

ContactMainInfo.propTypes = {
  heading1: PropTypes.element,
  imageSrc1: PropTypes.string,
  heading12: PropTypes.element,
  rootClassName: PropTypes.string,
  imageAlt1: PropTypes.string,
  heading: PropTypes.element,
  heading3: PropTypes.element,
}

export default ContactMainInfo
