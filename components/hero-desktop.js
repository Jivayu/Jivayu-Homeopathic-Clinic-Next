import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import AboutDoctorAccordion from './about-doctor-accordion'
import HomeopathicConsultation from './homeopathic-consultation'
import Slider from './slider'
import GoogleProfileRatings from './google-profile-ratings'

const HeroDesktop = (props) => {
  return (
    <>
      <main className={`hero-desktop-container10 ${props.rootClassName} `}>
        <div className="hero-desktop-container11">
          <div className="hero-desktop-container12">
            <div className="hero-desktop-container13">
              <AboutDoctorAccordion rootClassName="about-doctor-accordionroot-class-name"></AboutDoctorAccordion>
            </div>
            <HomeopathicConsultation></HomeopathicConsultation>
          </div>
          <div className="hero-desktop-container14">
            <div className="hero-desktop-container15">
              <div className="hero-desktop-container16">
                <Slider rootClassName="sliderroot-class-name1"></Slider>
              </div>
              <div className="hero-desktop-container17">
                <img
                  alt="image"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/images/consultation-1500w.webp"
                  srcSet="/images/consultation-1500w.webp 1200w, /images/consultation-tablet.webp 800w, /images/consultation-mobile.webp 480w"
                  className="hero-desktop-image"
                />
                <h1 className="hero-desktop-text10">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="hero-desktop-text74">
                        Let&apos;s Up-Root Your Health Issues Naturally.
                      </span>
                    </Fragment>
                  )}
                </h1>
                <h1 className="hero-desktop-text11">
                  {props.heading ?? (
                    <Fragment>
                      <span className="hero-desktop-text71">
                        Where Health And Time Are Valued, Trust is Homeopathy.
                      </span>
                    </Fragment>
                  )}
                </h1>
              </div>
            </div>
          </div>
          <div className="hero-desktop-container18"></div>
        </div>
        <div className="hero-desktop-container19">
          <div className="hero-desktop-container20">
            <div className="hero-desktop-container21">
              <GoogleProfileRatings
                text={
                  <Fragment>
                    <span className="hero-desktop-text12">4.9</span>
                  </Fragment>
                }
                text1={
                  <Fragment>
                    <span className="hero-desktop-text13">Google Rating</span>
                  </Fragment>
                }
                button={
                  <Fragment>
                    <span className="hero-desktop-text14">
                      Visit Google Profile
                    </span>
                  </Fragment>
                }
                text12={
                  <Fragment>
                    <span className="hero-desktop-text15">Google Profile</span>
                  </Fragment>
                }
                text13={
                  <Fragment>
                    <span className="hero-desktop-text16">Verified</span>
                  </Fragment>
                }
                rootClassName="google-profile-ratingsroot-class-name"
              ></GoogleProfileRatings>
            </div>
            <div className="hero-desktop-container22">
              <div className="hero-desktop-container23">
                <span className="hero-desktop-text17">
                  {props.text ?? (
                    <Fragment>
                      <span className="hero-desktop-text78">Location</span>
                    </Fragment>
                  )}
                </span>
                <span className="hero-desktop-text18">
                  {props.text3 ?? (
                    <Fragment>
                      <span className="hero-desktop-text55">
                        Monday To Saturday
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="hero-desktop-container24">
                  <span className="hero-desktop-text19">
                    {props.text2 ?? (
                      <Fragment>
                        <span className="hero-desktop-text68">
                          <span>Day Session    </span>
                          <span>12:01 PM To 02:00 PM</span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="hero-desktop-text20">
                    Evening Session 6:01 PM To 08:00 PM
                  </span>
                </div>
              </div>
            </div>
            <div className="hero-desktop-container25">
              <div className="hero-desktop-container26">
                <h1 className="hero-desktop-text21">
                  {props.text31 ?? (
                    <Fragment>
                      <span className="hero-desktop-text61">
                        +91 9823203912
                      </span>
                    </Fragment>
                  )}
                </h1>
                <span className="hero-desktop-text22">
                  {props.text32 ?? (
                    <Fragment>
                      <span className="hero-desktop-text56">
                        <span>Please Call</span>
                        <br></br>
                        <span>Before Any Visit To Clinic.</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="hero-desktop-container27">
              <div className="hero-desktop-container28">
                <span className="hero-desktop-text23">
                  {props.text311 ?? (
                    <Fragment>
                      <span className="hero-desktop-text66">Location</span>
                    </Fragment>
                  )}
                </span>
                <span className="hero-desktop-text24">
                  {props.text321 ?? (
                    <Fragment>
                      <span className="hero-desktop-text65">
                        Get Location Information.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="hero-desktop-container29">
                  <span className="hero-desktop-text25 PoiretOne-Regular">
                    {props.text5 ?? (
                      <Fragment>
                        <span className="hero-desktop-text62">
                          Get Directions On Map
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-desktop-container30">
          <div className="hero-desktop-container31">
            <div className="hero-desktop-container32">
              <GoogleProfileRatings
                text={
                  <Fragment>
                    <span className="hero-desktop-text26">4.9</span>
                  </Fragment>
                }
                text1={
                  <Fragment>
                    <span className="hero-desktop-text27">Google Rating</span>
                  </Fragment>
                }
                button={
                  <Fragment>
                    <span className="hero-desktop-text28">
                      Visit Google Profile
                    </span>
                  </Fragment>
                }
                text12={
                  <Fragment>
                    <span className="hero-desktop-text29">Google Profile</span>
                  </Fragment>
                }
                text13={
                  <Fragment>
                    <span className="hero-desktop-text30">Verified</span>
                  </Fragment>
                }
                rootClassName="google-profile-ratingsroot-class-name2"
              ></GoogleProfileRatings>
            </div>
            <div className="hero-desktop-container33">
              <div className="hero-desktop-container34">
                <div className="hero-desktop-container35">
                  <span className="hero-desktop-text31">Clinic Timing</span>
                </div>
                <div className="hero-desktop-container36">
                  <div className="hero-desktop-container37">
                    <button
                      type="button"
                      className="hero-desktop-button1 button"
                    >
                      <span className="hero-desktop-text32">
                        {props.button21 ?? (
                          <Fragment>
                            <span className="hero-desktop-text64">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="hero-desktop-text33">
                      {props.text1211 ?? (
                        <Fragment>
                          <span className="hero-desktop-text79">
                            12:01 PM To 02:00 PM
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="hero-desktop-container38">
                  <div className="hero-desktop-container39">
                    <button
                      type="button"
                      className="hero-desktop-button2 button"
                    >
                      <span className="hero-desktop-text34">
                        {props.button211 ?? (
                          <Fragment>
                            <span className="hero-desktop-text73">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="hero-desktop-text35">
                      6:01 PM To 08:00 PM
                    </span>
                  </div>
                </div>
              </div>
              <div className="hero-desktop-container40">
                <div className="hero-desktop-container41">
                  <span className="hero-desktop-text36">Clinic Timing</span>
                </div>
                <div className="hero-desktop-container42">
                  <div className="hero-desktop-container43">
                    <button
                      type="button"
                      className="hero-desktop-button3 button"
                    >
                      <span className="hero-desktop-text37">
                        {props.button2132 ?? (
                          <Fragment>
                            <span className="hero-desktop-text80">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="hero-desktop-text38">
                      12:01 PM To 02:00 PM
                    </span>
                  </div>
                </div>
                <div className="hero-desktop-container44">
                  <div className="hero-desktop-container45">
                    <button
                      type="button"
                      className="hero-desktop-button4 button"
                    >
                      <span className="hero-desktop-text39">
                        {props.button21321 ?? (
                          <Fragment>
                            <span className="hero-desktop-text67">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="hero-desktop-text40">
                      06:01 PM To 08:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-desktop-container46">
              <div className="hero-desktop-container47">
                <div className="hero-desktop-container48">
                  <span className="hero-desktop-text41">Enquiry</span>
                </div>
                <div className="hero-desktop-container49">
                  <div className="hero-desktop-container50">
                    <button
                      type="button"
                      className="hero-desktop-button5 button"
                    >
                      <span className="hero-desktop-text42">
                        {props.button213 ?? (
                          <Fragment>
                            <span className="hero-desktop-text77">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="hero-desktop-text43">+91 9823203912</span>
                  </div>
                </div>
                <div className="hero-desktop-container51">
                  <div className="hero-desktop-container52">
                    <button
                      type="button"
                      className="hero-desktop-button6 button"
                    >
                      <span className="hero-desktop-text44">
                        {props.button2133 ?? (
                          <Fragment>
                            <span className="hero-desktop-text75">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="hero-desktop-text45">
                      jivayuservices@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-desktop-container53">
              <div className="hero-desktop-container54">
                <div className="hero-desktop-container55">
                  <span className="hero-desktop-text46">Location</span>
                </div>
                <div className="hero-desktop-container56">
                  <div className="hero-desktop-container57">
                    <button
                      type="button"
                      className="hero-desktop-button7 button"
                    >
                      <span className="hero-desktop-text47">
                        {props.button2134 ?? (
                          <Fragment>
                            <span className="hero-desktop-text54">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="hero-desktop-text48">Clinic Location</span>
                  </div>
                </div>
                <div className="hero-desktop-container58">
                  <div className="hero-desktop-container59">
                    <button
                      type="button"
                      className="hero-desktop-button8 button"
                    >
                      <span className="hero-desktop-text49">
                        {props.button2112 ?? (
                          <Fragment>
                            <span className="hero-desktop-text72">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="hero-desktop-text50">
                      Goolge Business Profile
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-desktop-container60">
          <span className="hero-desktop-text51">
            {props.text8 ?? (
              <Fragment>
                <span className="hero-desktop-text60">
                  Please Call Before Clinic Visit
                </span>
              </Fragment>
            )}
          </span>
          <span className="hero-desktop-text52">
            {props.text81 ?? (
              <Fragment>
                <span className="hero-desktop-text63">
                  कृपया क्लिनिकला भेट देण्याआधी कॉल करा
                </span>
              </Fragment>
            )}
          </span>
          <span className="hero-desktop-text53">
            {props.text811 ?? (
              <Fragment>
                <span className="hero-desktop-text76">
                  क्लिनिक विजिट से पहले कृपया कॉल करें
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </main>
      <style jsx>
        {`
          .hero-desktop-container10 {
            width: 100vw;
            height: 850px;
            display: flex;
            transform: scale(0.95);
            box-shadow: -5px -15px 30px 0px rgba(51, 101, 77, 0.44);
            align-items: stretch;
            aspect-ratio: auto;
            border-color: rgba(220, 21, 205, 0.48);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-buttonradius);
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/images/jivayubackgroundimage-1500w.webp');
            background-repeat: no-repeat;
            background-position: center;
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
          }
          .hero-desktop-container11 {
            width: 100%;
            height: 80%;
            display: flex;
            align-self: center;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .hero-desktop-container12 {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .hero-desktop-container13 {
            width: 100%;
            height: 60%;
            display: flex;
            transform: scaleX(1) scaleY(1) scaleZ(1);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .hero-desktop-container14 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-container15 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .hero-desktop-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: 40%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .hero-desktop-container17 {
            width: 100%;
            height: 350px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            backdrop-filter: blur(7px);
            background-size: contain;
            justify-content: flex-end;
            background-image: url('/images/jivayu-consultation-image-400h.webp');
            background-repeat: no-repeat;
            background-position: top;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-imageradius);
            border-bottom-right-radius: var(--dl-layout-radius-imageradius);
          }
          .hero-desktop-image {
            width: 400px;
            display: none;
            opacity: 0.9;
            transform: rotate(0deg);
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-buttonradius);
            flex-direction: column;
          }
          .hero-desktop-text10 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: block;
            font-size: 14px;
            align-self: center;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.4;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            animation-name: fadeInDown;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: linear;
          }
          .hero-desktop-text11 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: block;
            font-size: 14px;
            align-self: center;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.4;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            animation-name: fadeInDown;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: linear;
          }
          .hero-desktop-container18 {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-end;
          }
          .hero-desktop-container19 {
            flex: 0 0 auto;
            height: 22%;
            display: none;
            padding: var(--dl-layout-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .hero-desktop-container20 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: stretch;
            box-shadow: -5px -10px 25px 0px rgba(59, 113, 86, 0.21);
            align-items: center;
            border-color: rgba(220, 21, 205, 0.5);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero-desktop-container21 {
            flex: 0 0 auto;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            justify-content: flex-end;
          }
          .hero-desktop-text12 {
            display: inline-block;
            font-weight: 700;
          }
          .hero-desktop-text13 {
            display: inline-block;
            font-style: normal;
          }
          .hero-desktop-text14 {
            display: inline-block;
            font-weight: 700;
          }
          .hero-desktop-text15 {
            display: inline-block;
            font-weight: 700;
          }
          .hero-desktop-text16 {
            display: inline-block;
            line-height: 1.4;
          }
          .hero-desktop-container22 {
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: rgba(62, 136, 102, 0.2);
            border-style: groove;
            border-width: 0.5px;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.34);
            border-top-width: 0.5px;
            border-left-width: 0px;
            border-bottom-width: 0.5px;
          }
          .hero-desktop-container23 {
            gap: 4px;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-text17 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 2em;
            align-self: center;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: auto;
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            letter-spacing: 1;
            text-transform: none;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .hero-desktop-text18 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: block;
            font-size: 14px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.6;
            letter-spacing: 1;
            text-transform: none;
            text-decoration: none;
          }
          .hero-desktop-container24 {
            display: flex;
            margin-top: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-text19 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: block;
            font-size: 14px;
            align-self: center;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .hero-desktop-text20 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 14px;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: 1.1px;
            text-transform: none;
            text-decoration: none;
          }
          .hero-desktop-container25 {
            gap: var(--dl-layout-space-halfunit);
            width: 30%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: rgba(62, 136, 102, 0.2);
            border-width: 0.5px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.34);
            border-top-width: 0.5px;
            border-left-width: 0px;
            border-right-width: 0.5px;
            border-bottom-width: 0.5px;
          }
          .hero-desktop-container26 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .hero-desktop-text21 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 2em;
            font-style: normal;
            text-align: center;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: auto;
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            letter-spacing: 1.5;
            text-transform: none;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .hero-desktop-text22 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.6;
            letter-spacing: 1;
            text-transform: none;
            text-decoration: none;
          }
          .hero-desktop-container27 {
            width: 30%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            margin-left: 2px;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: rgba(56, 123, 92, 0.29);
            border-width: 0.5px;
            padding-left: 0px;
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: space-between;
            background-color: rgba(255, 255, 255, 0.34);
            border-top-width: 0.5px;
            border-left-width: 0px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero-desktop-container28 {
            flex: 1;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .hero-desktop-text23 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 2em;
            align-self: center;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: auto;
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            letter-spacing: 1.5;
            text-transform: none;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .hero-desktop-text24 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 12px;
            align-self: center;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.8;
            letter-spacing: 1;
            text-transform: none;
            text-decoration: none;
          }
          .hero-desktop-container29 {
            flex: 0 0 auto;
            width: 80%;
            height: 40px;
            display: flex;
            transform: scale(0.9);
            align-items: center;
            border-color: rgba(64, 145, 108, 0.32);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-buttonradius);
            justify-content: center;
            background-color: rgba(220, 21, 205, 0.14);
          }
          .hero-desktop-text25 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            align-self: center;
            font-style: normal;
          }
          .hero-desktop-container30 {
            flex: 0 0 auto;
            display: block;
            align-self: stretch;
          }
          .hero-desktop-container31 {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            transform: scaleX(0.95) scaleY(0.95) scaleZ(0.95);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: 50px;
          }
          .hero-desktop-container32 {
            flex: 0 0 auto;
            width: 300px;
            height: 100%;
            display: flex;
            transform: scaleX(1) scaleY(1) scaleZ(1);
            align-items: flex-start;
            justify-content: flex-end;
          }
          .hero-desktop-text26 {
            display: inline-block;
            font-weight: 700;
          }
          .hero-desktop-text27 {
            display: inline-block;
            font-style: normal;
          }
          .hero-desktop-text28 {
            display: inline-block;
            font-weight: 700;
          }
          .hero-desktop-text29 {
            display: inline-block;
            font-weight: 700;
          }
          .hero-desktop-text30 {
            display: inline-block;
            line-height: 1.4;
          }
          .hero-desktop-container33 {
            flex: 0 0 auto;
            width: 300px;
            height: 100%;
            display: flex;
            transform: scaleX(1) scaleY(1) scaleZ(1);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .hero-desktop-container34 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: none;
            align-self: stretch;
            box-shadow: 0px -15px 25px 0px rgba(43, 97, 70, 0.22);
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: rgba(220, 21, 205, 0.4);
            border-style: groove;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.4);
            border-top-width: 1px;
            border-left-width: 1px;
            border-right-width: 0px;
            border-bottom-width: 1px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero-desktop-container35 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            transform: scale(0.95);
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-text31 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 20px;
            align-self: center;
            text-align: center;
            font-family: 'PoiretOne-Regular';
            line-height: 1.4;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .hero-desktop-container36 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-container37 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            transform: scale(0.8);
            align-self: center;
            transition: 0.5s;
            align-items: center;
            border-color: rgba(64, 145, 108, 0.1);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(220, 21, 205, 0.14);
          }
          .hero-desktop-container37:hover {
            transform: scale(0.8);
            box-shadow: -5px -10px 25px 0px rgba(49, 105, 82, 0.34);
            transition: 0.5s;
            align-items: center;
            border-color: rgba(64, 145, 108, 0.4);
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero-desktop-button1 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .hero-desktop-text32 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .hero-desktop-text33 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.4;
            letter-spacing: 1.1px;
          }
          .hero-desktop-container38 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-container39 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            transform: scale(0.8);
            align-self: center;
            transition: 0.5s;
            align-items: center;
            border-color: rgba(64, 145, 108, 0.1);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(220, 21, 205, 0.14);
          }
          .hero-desktop-container39:hover {
            transform: scale(0.8);
            box-shadow: -5px -10px 25px 0px rgba(49, 105, 82, 0.34);
            transition: 0.5s;
            align-items: center;
            border-color: rgba(64, 145, 108, 0.4);
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero-desktop-button2 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .hero-desktop-text34 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .hero-desktop-text35 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: 1.1px;
          }
          .hero-desktop-container40 {
            gap: var(--dl-layout-space-halfunit);
            width: 90%;
            display: flex;
            align-self: stretch;
            box-shadow: 0px -15px 25px 0px rgba(43, 97, 70, 0.22);
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: rgba(220, 21, 205, 0.4);
            border-style: groove;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.4);
            border-top-width: 1px;
            border-left-width: 1px;
            border-right-width: 0px;
            border-bottom-width: 1px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero-desktop-container41 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            transform: scale(0.95);
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-text36 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 18px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.2;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .hero-desktop-container42 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-container43 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            transform: scale(0.8);
            align-self: center;
            transition: 0.5s;
            align-items: center;
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(220, 21, 205, 0.14);
          }
          .hero-desktop-container43:hover {
            transform: scale(0.8);
            box-shadow: -5px -10px 25px 0px rgba(49, 105, 82, 0.34);
            transition: 0.5s;
            align-items: center;
            border-color: rgba(64, 145, 108, 0.4);
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero-desktop-button3 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .hero-desktop-text37 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .hero-desktop-text38 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 16px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            line-height: 2;
            letter-spacing: 1.1px;
            text-transform: none;
            text-decoration: none;
          }
          .hero-desktop-container44 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-container45 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            transform: scale(0.8);
            align-self: center;
            transition: 0.5s;
            align-items: center;
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(220, 21, 205, 0.14);
          }
          .hero-desktop-container45:hover {
            transform: scale(0.8);
            box-shadow: -5px -10px 25px 0px rgba(49, 105, 82, 0.34);
            transition: 0.5s;
            align-items: center;
            border-color: rgba(64, 145, 108, 0.4);
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero-desktop-button4 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .hero-desktop-text39 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .hero-desktop-text40 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 16px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            line-height: 2;
            letter-spacing: 1.1px;
            text-transform: none;
            text-decoration: none;
          }
          .hero-desktop-container46 {
            flex: 0 0 auto;
            width: 300px;
            height: 100%;
            display: flex;
            transform: scaleX(1) scaleY(1) scaleZ(1);
            align-items: flex-start;
            justify-content: center;
          }
          .hero-desktop-container47 {
            gap: var(--dl-layout-space-halfunit);
            width: 90%;
            display: flex;
            align-self: stretch;
            box-shadow: 0px -15px 25px 0px rgba(43, 97, 70, 0.22);
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: rgba(220, 21, 205, 0.4);
            border-style: groove;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.4);
            border-top-width: 1px;
            border-left-width: 1px;
            border-right-width: 0px;
            border-bottom-width: 1px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero-desktop-container48 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            transform: scale(0.95);
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-text41 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 18px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.2;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .hero-desktop-container49 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-container50 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            transform: scale(0.8);
            align-self: center;
            transition: 0.5s;
            align-items: center;
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(220, 21, 205, 0.14);
          }
          .hero-desktop-container50:hover {
            transform: scale(0.8);
            box-shadow: -5px -10px 25px 0px rgba(49, 105, 82, 0.34);
            transition: 0.5s;
            align-items: center;
            border-color: rgba(64, 145, 108, 0.4);
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero-desktop-button5 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .hero-desktop-text42 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .hero-desktop-text43 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 16px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            line-height: 2;
            letter-spacing: 1.1px;
          }
          .hero-desktop-container51 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-container52 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            transform: scale(0.8);
            align-self: center;
            transition: 0.5s;
            align-items: center;
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(220, 21, 205, 0.14);
          }
          .hero-desktop-container52:hover {
            transform: scale(0.8);
            box-shadow: -5px -10px 25px 0px rgba(49, 105, 82, 0.34);
            transition: 0.5s;
            align-items: center;
            border-color: rgba(64, 145, 108, 0.4);
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero-desktop-button6 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .hero-desktop-text44 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .hero-desktop-text45 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 16px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            line-height: 2;
            letter-spacing: 1.1px;
          }
          .hero-desktop-container53 {
            flex: 0 0 auto;
            width: 300px;
            height: 100%;
            display: flex;
            transform: scaleX(1) scaleY(1) scaleZ(1);
            align-items: flex-start;
            justify-content: center;
          }
          .hero-desktop-container54 {
            gap: var(--dl-layout-space-halfunit);
            width: 90%;
            display: flex;
            align-self: stretch;
            box-shadow: 0px -15px 25px 0px rgba(43, 97, 70, 0.22);
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: rgba(220, 21, 205, 0.4);
            border-style: groove;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.4);
            border-top-width: 1px;
            border-left-width: 1px;
            border-right-width: 0px;
            border-bottom-width: 1px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 50px;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 50px;
          }
          .hero-desktop-container55 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            transform: scale(0.95);
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-text46 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 18px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.2;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .hero-desktop-container56 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-container57 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            transform: scale(0.8);
            align-self: center;
            transition: 0.5s;
            align-items: center;
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(220, 21, 205, 0.14);
          }
          .hero-desktop-container57:hover {
            transform: scale(0.8);
            box-shadow: -5px -10px 25px 0px rgba(49, 105, 82, 0.34);
            transition: 0.5s;
            align-items: center;
            border-color: rgba(64, 145, 108, 0.4);
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero-desktop-button7 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .hero-desktop-text47 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .hero-desktop-text48 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 16px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            line-height: 2;
            letter-spacing: 1.1px;
          }
          .hero-desktop-container58 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero-desktop-container59 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            transform: scale(0.8);
            align-self: center;
            transition: 0.5s;
            align-items: center;
            border-color: var(--dl-color-theme-accent1);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(220, 21, 205, 0.14);
          }
          .hero-desktop-container59:hover {
            transform: scale(0.8);
            box-shadow: -5px -10px 25px 0px rgba(49, 105, 82, 0.34);
            transition: 0.5s;
            align-items: center;
            border-color: rgba(64, 145, 108, 0.4);
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .hero-desktop-button8 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .hero-desktop-text49 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .hero-desktop-text50 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 16px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            line-height: 2;
            letter-spacing: 1.1px;
          }
          .hero-desktop-container60 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-self: center;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius4);
            backdrop-filter: blur(10px);
            justify-content: center;
            background-color: rgba(238, 10, 231, 0.21);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 25px;
            border-bottom-right-radius: 25px;
          }
          .hero-desktop-text51 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 12px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 500;
            line-height: 1.6;
            padding-top: 2px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            animation-name: fadeIn;
            padding-bottom: 2px;
            animation-delay: 0s;
            background-color: rgba(251, 251, 251, 0.99);
            animation-duration: 1500ms;
            animation-direction: normal;
            animation-iteration-count: 3;
            animation-timing-function: ease;
          }
          .hero-desktop-text52 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 12px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 500;
            line-height: 1.6;
            padding-top: 2px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 2px;
            background-color: rgba(251, 251, 251, 0.99);
          }
          .hero-desktop-text53 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 12px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 500;
            line-height: 1.6;
            padding-top: 2px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 2px;
            background-color: rgba(251, 251, 251, 0.99);
          }
          .hero-desktop-text54 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .hero-desktop-text55 {
            display: inline-block;
            line-height: 1.8;
          }
          .hero-desktop-text56 {
            display: inline-block;
            font-size: 14px;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.8;
            letter-spacing: 1.2px;
          }
          .hero-desktop-text60 {
            display: inline-block;
          }
          .hero-desktop-text61 {
            display: inline-block;
            line-height: 1.8;
          }
          .hero-desktop-text62 {
            display: inline-block;
            line-height: 1.8;
          }
          .hero-desktop-text63 {
            display: inline-block;
          }
          .hero-desktop-text64 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .hero-desktop-text65 {
            display: inline-block;
            line-height: 1.8;
          }
          .hero-desktop-text66 {
            display: inline-block;
            line-height: 1.8;
          }
          .hero-desktop-text67 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .hero-desktop-text68 {
            display: inline-block;
            font-size: 14px;
            font-weight: 700;
          }
          .hero-desktop-text71 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
            letter-spacing: 1.2px;
          }
          .hero-desktop-text72 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .hero-desktop-text73 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .hero-desktop-text74 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
            letter-spacing: 1.2px;
          }
          .hero-desktop-text75 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .hero-desktop-text76 {
            display: inline-block;
            font-family: 'Inter';
          }
          .hero-desktop-text77 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .hero-desktop-text78 {
            display: inline-block;
            line-height: 1.8;
          }
          .hero-desktop-text79 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .hero-desktop-text80 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .hero-desktoproot-class-name {
            width: 100%;
            position: relative;
            margin-top: var(--dl-layout-space-halfunit);
            margin-bottom: 0px;
          }
          @media (max-width: 1200px) {
            .hero-desktop-container10 {
              height: 800px;
            }
            .hero-desktop-container12 {
              width: 25%;
            }
            .hero-desktop-container14 {
              width: 50%;
            }
            .hero-desktop-container15 {
              width: 90%;
            }
            .hero-desktop-container17 {
              width: 100%;
              height: 310px;
            }
            .hero-desktop-text10 {
              line-height: 1.2;
            }
            .hero-desktop-text11 {
              text-align: center;
              line-height: 1.2;
            }
            .hero-desktop-container18 {
              width: 25%;
            }
            .hero-desktop-container30 {
              display: flex;
            }
            .hero-desktop-container31 {
              transform: scaleX(0.9) scaleY(0.9) scaleZ(0.9);
            }
          }
          @media (max-width: 991px) {
            .hero-desktop-container10 {
              box-shadow: 0px -15px 30px 0px rgba(51, 101, 77, 0.44);
              justify-content: center;
            }
            .hero-desktop-container12 {
              width: 30%;
              align-items: center;
            }
            .hero-desktop-container13 {
              transform: scaleX(0.95) scaleY(0.95) scaleZ(0.95);
              align-self: center;
              margin-top: var(--dl-layout-space-oneandhalfunits);
            }
            .hero-desktop-container15 {
              width: 100%;
            }
            .hero-desktop-container17 {
              width: 100%;
              height: 290px;
              align-self: center;
              margin-bottom: var(--dl-layout-space-halfunit);
              justify-content: flex-end;
              background-position: top;
            }
            .hero-desktop-image {
              top: -170px;
              width: 20em;
            }
            .hero-desktop-container18 {
              width: 20%;
              height: auto;
              align-self: stretch;
              align-items: stretch;
            }
            .hero-desktop-container22 {
              width: 33%;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .hero-desktop-container23 {
              width: auto;
              align-self: center;
            }
            .hero-desktop-text17 {
              font-size: 1.5em;
              margin-bottom: 0px;
            }
            .hero-desktop-text18 {
              font-size: 12px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .hero-desktop-container25 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .hero-desktop-container26 {
              justify-content: flex-start;
            }
            .hero-desktop-text21 {
              font-size: 1.5em;
              text-align: center;
            }
            .hero-desktop-text22 {
              font-size: 12px;
              margin-top: 4px;
              text-align: center;
            }
            .hero-desktop-text23 {
              font-size: 1.5em;
            }
            .hero-desktop-container29 {
              width: 100%;
            }
            .hero-desktop-container30 {
              width: 100%;
              display: flex;
              align-self: stretch;
              align-items: center;
              justify-content: center;
            }
            .hero-desktop-container31 {
              height: auto;
              display: flex;
              transform: scaleX(0.8) scaleY(0.8) scaleZ(0.8);
              align-self: center;
              align-items: stretch;
              justify-content: center;
            }
            .hero-desktop-container32 {
              width: 285px;
              height: auto;
              display: block;
              align-self: stretch;
              justify-items: center;
            }
            .hero-desktop-container33 {
              width: 285px;
              height: auto;
              display: block;
              align-self: stretch;
              justify-items: center;
            }
            .hero-desktop-container34 {
              width: auto;
              height: 100%;
              opacity: 1;
              padding: var(--dl-layout-space-halfunit);
              align-items: center;
              justify-content: flex-end;
            }
            .hero-desktop-container35 {
              transform: scale(0.9);
            }
            .hero-desktop-text31 {
              font-size: 25px;
            }
            .hero-desktop-container40 {
              height: 100%;
              padding: var(--dl-layout-space-halfunit);
              align-items: center;
              justify-content: flex-end;
            }
            .hero-desktop-container41 {
              transform: scale(0.9);
            }
            .hero-desktop-text38 {
              font-size: 14px;
            }
            .hero-desktop-text40 {
              font-size: 14px;
            }
            .hero-desktop-container46 {
              width: 285px;
              height: auto;
              display: block;
              align-self: stretch;
              justify-items: center;
            }
            .hero-desktop-container47 {
              height: 100%;
              padding: var(--dl-layout-space-halfunit);
              align-items: center;
              justify-content: flex-end;
            }
            .hero-desktop-container48 {
              transform: scale(0.9);
            }
            .hero-desktop-text43 {
              font-size: 14px;
            }
            .hero-desktop-text45 {
              font-size: 14px;
            }
            .hero-desktop-container53 {
              width: 285px;
              height: auto;
              display: block;
              align-self: stretch;
              justify-items: center;
            }
            .hero-desktop-container54 {
              height: 100%;
              padding: var(--dl-layout-space-halfunit);
              align-items: center;
              justify-content: flex-end;
              border-top-right-radius: 50px;
              border-bottom-right-radius: 50px;
            }
            .hero-desktop-container55 {
              transform: scale(0.9);
            }
            .hero-desktop-text48 {
              font-size: 14px;
            }
            .hero-desktop-text50 {
              font-size: 14px;
            }
            .hero-desktop-text56 {
              font-family: PoiretOne-Regular;
            }
            .hero-desktop-text68 {
              font-size: 12px;
            }
            .hero-desktoproot-class-name {
              position: relative;
            }
          }
          @media (max-width: 767px) {
            .hero-desktop-container10 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

HeroDesktop.defaultProps = {
  button2134: undefined,
  text3: undefined,
  text32: undefined,
  text8: undefined,
  text31: undefined,
  text5: undefined,
  text81: undefined,
  button21: undefined,
  rootClassName12: '',
  text321: undefined,
  text311: undefined,
  button21321: undefined,
  rootClassName1: '',
  text2: undefined,
  heading: undefined,
  button2112: undefined,
  button211: undefined,
  heading1: undefined,
  button2133: undefined,
  rootClassName2: '',
  text811: undefined,
  rootClassName: '',
  button213: undefined,
  text: undefined,
  text1211: undefined,
  button2132: undefined,
}

HeroDesktop.propTypes = {
  button2134: PropTypes.element,
  text3: PropTypes.element,
  text32: PropTypes.element,
  text8: PropTypes.element,
  text31: PropTypes.element,
  text5: PropTypes.element,
  text81: PropTypes.element,
  button21: PropTypes.element,
  rootClassName12: PropTypes.string,
  text321: PropTypes.element,
  text311: PropTypes.element,
  button21321: PropTypes.element,
  rootClassName1: PropTypes.string,
  text2: PropTypes.element,
  heading: PropTypes.element,
  button2112: PropTypes.element,
  button211: PropTypes.element,
  heading1: PropTypes.element,
  button2133: PropTypes.element,
  rootClassName2: PropTypes.string,
  text811: PropTypes.element,
  rootClassName: PropTypes.string,
  button213: PropTypes.element,
  text: PropTypes.element,
  text1211: PropTypes.element,
  button2132: PropTypes.element,
}

export default HeroDesktop
