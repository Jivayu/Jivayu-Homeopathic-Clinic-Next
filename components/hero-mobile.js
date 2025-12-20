import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Slider from './slider'
import GoogleProfileRatingsMobile from './google-profile-ratings-mobile'

const HeroMobile = (props) => {
  return (
    <>
      <main className={`hero-mobile-container1 ${props.rootClassName} `}>
        <div className="hero-mobile-container2">
          <div className="hero-mobile-container3">
            <div className="hero-mobile-container4">
              <Slider rootClassName="sliderroot-class-name4"></Slider>
            </div>
            <div className="hero-mobile-container5">
              <img
                alt={props.imageAlt1}
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/images/consultation-1200h.webp"
                srcSet="/images/consultation-1200h.webp 1200w, /images/consultation-tablet.webp 800w, /images/consultation-mobile.webp 480w"
                className="hero-mobile-image1"
              />
              <h1 className="hero-mobile-text10">
                {props.heading ?? (
                  <Fragment>
                    <span className="hero-mobile-text24">
                      Let&apos;s Up-Root Your Health Issues Naturally.
                    </span>
                  </Fragment>
                )}
              </h1>
              <h1 className="hero-mobile-text11">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="hero-mobile-text25">
                      Where Health And Time Are Valued, Trust is Homeopathy.
                    </span>
                  </Fragment>
                )}
              </h1>
              <animate-on-reveal
                animation="headShake"
                duration="2000ms"
                delay="0s"
                direction="normal"
                easing="linear"
                iteration="5"
              >
                <span
                  data-thq-animate-on-reveal="true"
                  className="hero-mobile-text12"
                >
                  {props.text6 ?? (
                    <Fragment>
                      <span className="hero-mobile-text27">
                        Let&apos;s Up-Root Your Health Issues Naturally.
                      </span>
                    </Fragment>
                  )}
                </span>
              </animate-on-reveal>
              <img
                alt={props.imageAlt3}
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/images/homeopathic%20consultations-1200h.webp"
                srcSet="/images/homeopathic%20consultations-1200h.webp 1200w, /images/homeopathic%20consultations-tablet.webp 800w, /images/homeopathic%20consultations-mobile.webp 480w"
                className="hero-mobile-image2"
              />
            </div>
          </div>
          <div className="hero-mobile-container6">
            <div className="hero-mobile-container7">
              <animate-on-reveal>
                <span
                  data-thq-animate-on-reveal="true"
                  className="hero-mobile-text13"
                >
                  {props.text811 ?? (
                    <Fragment>
                      <span className="hero-mobile-text26">
                        क्लिनिक विजिट से पहले कृपया कॉल करें !
                      </span>
                    </Fragment>
                  )}
                </span>
              </animate-on-reveal>
            </div>
            <GoogleProfileRatingsMobile
              text={
                <Fragment>
                  <span className="hero-mobile-text14">4.9</span>
                </Fragment>
              }
              button={
                <Fragment>
                  <span className="hero-mobile-text15">
                    Visit Google Profile
                  </span>
                </Fragment>
              }
              text11={
                <Fragment>
                  <span className="hero-mobile-text16">Google Profile</span>
                </Fragment>
              }
              text13={
                <Fragment>
                  <span className="hero-mobile-text17">Verified</span>
                </Fragment>
              }
              button1={
                <Fragment>
                  <span className="hero-mobile-text18">
                    Visit Google Profile
                  </span>
                </Fragment>
              }
              text111={
                <Fragment>
                  <span className="hero-mobile-text19">Google Rating</span>
                </Fragment>
              }
              button21321={
                <Fragment>
                  <span className="hero-mobile-text20">
                    Visit Google Profile
                  </span>
                </Fragment>
              }
              text1211321={
                <Fragment>
                  <span className="hero-mobile-text21">
                    12:01 PM To 02:00 PM
                  </span>
                </Fragment>
              }
              button213212={
                <Fragment>
                  <span className="hero-mobile-text22">
                    Visit Google Profile
                  </span>
                </Fragment>
              }
              text12113212={
                <Fragment>
                  <span className="hero-mobile-text23">
                    12:01 PM To 02:00 PM
                  </span>
                </Fragment>
              }
              rootClassName="google-profile-ratings-mobileroot-class-name"
            ></GoogleProfileRatingsMobile>
          </div>
        </div>
      </main>
      <style jsx>
        {`
          .hero-mobile-container1 {
            width: 100%;
            height: 780px;
            display: none;
            transform: scale(0.95);
            box-shadow: -5px -15px 30px 0px rgba(51, 101, 77, 0.44);
            margin-top: -8px;
            align-items: flex-end;
            border-color: rgba(220, 21, 205, 0.48);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-buttonradius);
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('/images/jivayubackgroundimage-1500h.webp');
            background-repeat: no-repeat;
            background-position: center;
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
          }
          .hero-mobile-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .hero-mobile-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 70%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .hero-mobile-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .hero-mobile-container5 {
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-end;
          }
          .hero-mobile-image1 {
            width: 20em;
            align-self: center;
            object-fit: cover;
          }
          .hero-mobile-text10 {
            font-size: 1.5em;
            align-self: center;
            border-radius: var(--dl-layout-radius-buttonradius);
            animation-name: fadeInDown;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: linear;
          }
          .hero-mobile-text11 {
            font-size: 1.5em;
            align-self: center;
            border-radius: var(--dl-layout-radius-buttonradius);
            animation-name: fadeInDown;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: linear;
          }
          .hero-mobile-text12 {
            font-size: 1em;
            align-self: flex-end;
            text-align: left;
            margin-left: var(--dl-layout-space-threeunits);
            border-color: rgba(8, 28, 21, 0.23);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            margin-bottom: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-unit);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-radius4);
            border-bottom-left-radius: var(--dl-layout-radius-radius4);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero-mobile-image2 {
            width: 200px;
            object-fit: cover;
          }
          .hero-mobile-container6 {
            flex: 0 0 auto;
            width: 100%;
            height: 30%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-self: center;
            align-items: flex-start;
            justify-content: center;
          }
          .hero-mobile-container7 {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .hero-mobile-text13 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 10px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
            padding-top: 2px;
            border-color: rgba(24, 61, 44, 0.46);
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-halfunit);
            padding-bottom: 2px;
            background-color: rgba(217, 217, 217, 0.35);
          }
          .hero-mobile-text14 {
            display: inline-block;
            font-weight: 700;
          }
          .hero-mobile-text15 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .hero-mobile-text16 {
            display: inline-block;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.6;
          }
          .hero-mobile-text17 {
            display: inline-block;
            line-height: 1.4;
          }
          .hero-mobile-text18 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .hero-mobile-text19 {
            display: inline-block;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.6;
          }
          .hero-mobile-text20 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .hero-mobile-text21 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .hero-mobile-text22 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .hero-mobile-text23 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .hero-mobile-text24 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
          }
          .hero-mobile-text25 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
          }
          .hero-mobile-text26 {
            display: inline-block;
          }
          .hero-mobile-text27 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .hero-mobile-container1 {
              box-shadow: 0px -15px 30px 0px rgba(51, 101, 77, 0.44);
              justify-content: center;
            }
            .hero-mobile-container3 {
              height: 60%;
            }
            .hero-mobile-container4 {
              justify-content: center;
            }
            .hero-mobile-container6 {
              height: 40%;
            }
          }
          @media (max-width: 767px) {
            .hero-mobile-container1 {
              width: 100%;
              height: 850px;
              display: flex;
              margin-top: var(--dl-layout-space-unit);
              max-height: 150vh;
              align-items: center;
              flex-direction: row;
            }
            .hero-mobile-container3 {
              height: 75%;
              justify-content: space-between;
            }
            .hero-mobile-container4 {
              height: 25%;
              align-items: center;
              padding-top: var(--dl-layout-space-twounits);
              justify-content: center;
            }
            .hero-mobile-container5 {
              width: 100%;
              height: 100%;
              position: relative;
              justify-content: flex-end;
            }
            .hero-mobile-image1 {
              width: 24em;
              align-self: center;
              border-radius: var(--dl-layout-radius-buttonradius);
              margin-bottom: var(--dl-layout-space-unit);
            }
            .hero-mobile-text10 {
              display: none;
              font-size: 1.4em;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .hero-mobile-text11 {
              font-size: 1.1em;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              letter-spacing: 0.9px;
            }
            .hero-mobile-text12 {
              font-size: 1.1em;
              align-self: center;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              margin-left: 0px;
              border-color: rgba(8, 28, 21, 0);
              letter-spacing: 0.9px;
            }
            .hero-mobile-image2 {
              top: -6px;
              left: 0px;
              right: 0px;
              width: var(--dl-layout-size-xlarge);
              margin: auto;
              position: absolute;
            }
            .hero-mobile-container6 {
              gap: var(--dl-layout-space-halfunit);
              height: 25%;
              align-self: center;
              align-items: center;
              padding-top: 0px;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .hero-mobile-container7 {
              width: auto;
            }
            .hero-mobile-text13 {
              font-size: 12px;
              line-height: 1.4;
              padding-top: 4px;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              animation-name: fadeInDown;
              padding-bottom: 4px;
              animation-delay: 0s;
              background-color: var(--dl-color-theme-neutral-light);
              animation-duration: 2000ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .hero-mobile-text19 {
              font-style: normal;
              font-family: Poppins;
              font-weight: 400;
              line-height: 1.6;
            }
            .hero-mobileroot-class-name {
              height: 95vh;
              margin-top: -10px;
            }
          }
          @media (max-width: 400px) {
            .hero-mobile-container1 {
              height: 90vh;
              border-color: rgba(220, 21, 205, 0.4);
            }
            .hero-mobile-container2 {
              align-self: stretch;
            }
            .hero-mobile-container3 {
              justify-content: space-between;
            }
            .hero-mobile-container4 {
              height: 25%;
            }
            .hero-mobile-container5 {
              height: 60%;
            }
            .hero-mobile-text10 {
              text-align: center;
            }
            .hero-mobile-text11 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              font-size: 14px;
              font-style: normal;
              text-align: center;
              font-weight: 500;
            }
            .hero-mobile-text12 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
            }
            .hero-mobile-image2 {
              top: -75px;
              left: 20px;
              width: var(--dl-layout-size-xlarge);
              margin: auto;
              margin-left: auto;
            }
            .hero-mobile-container6 {
              gap: 0;
              align-self: stretch;
              padding-top: var(--dl-layout-space-halfunit);
              flex-direction: column;
              padding-bottom: 0px;
              justify-content: space-between;
            }
            .hero-mobile-text13 {
              font-style: normal;
              font-weight: 500;
            }
          }
        `}
      </style>
    </>
  )
}

HeroMobile.defaultProps = {
  imageAlt3: 'image',
  heading: undefined,
  heading1: undefined,
  text811: undefined,
  imageAlt1: 'image',
  rootClassName: '',
  text6: undefined,
}

HeroMobile.propTypes = {
  imageAlt3: PropTypes.string,
  heading: PropTypes.element,
  heading1: PropTypes.element,
  text811: PropTypes.element,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  text6: PropTypes.element,
}

export default HeroMobile
