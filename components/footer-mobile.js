import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Slider from './slider'

const FooterMobile = (props) => {
  return (
    <>
      <div className={`footer-mobile-container10 ${props.rootClassName} `}>
        <div className="footer-mobile-container11">
          <div className="footer-mobile-container12">
            <div className="footer-mobile-container13">
              <Slider rootClassName="sliderroot-class-name5"></Slider>
            </div>
            <ul className="footer-mobile-ul1 list">
              <li className="footer-mobile-li1 list-item">
                <span className="footer-mobile-text10">
                  Rajiv Nagar, Beside Indian Auto Gas Station
                </span>
                <span className="footer-mobile-text11">
                  Deep Enterprise Buldng
                </span>
                <span className="footer-mobile-text12">
                  Hingna Road, Nagpur, 440016
                </span>
              </li>
              <li className="footer-mobile-li2 list-item"></li>
              <li className="footer-mobile-li3 list-item"></li>
            </ul>
          </div>
          <div className="footer-mobile-container14">
            <div className="footer-mobile-container15">
              <ul className="footer-mobile-ul2 list">
                <li className="footer-mobile-li4 list-item PoiretOne-Regular">
                  <span className="footer-mobile-text13">Why Homeopathy ?</span>
                </li>
                <li className="footer-mobile-li5 list-item PoiretOne-Regular">
                  <span className="footer-mobile-text14">Why Homeopathy ?</span>
                </li>
                <li className="footer-mobile-li6 list-item PoiretOne-Regular">
                  <span className="footer-mobile-text15">Why Homeopathy ?</span>
                </li>
              </ul>
              <ul className="footer-mobile-ul3 list">
                <li className="footer-mobile-li7 list-item PoiretOne-Regular">
                  <span className="footer-mobile-text16">Why Homeopathy ?</span>
                </li>
                <li className="footer-mobile-li8 list-item PoiretOne-Regular">
                  <span className="footer-mobile-text17">Why Homeopathy ?</span>
                </li>
                <li className="footer-mobile-li9 PoiretOne-Regular list-item">
                  <span className="footer-mobile-text18">Why Homeopathy ?</span>
                </li>
              </ul>
            </div>
            <div className="footer-mobile-container16">
              <div className="footer-mobile-container17">
                <div className="footer-mobile-container18">
                  <span className="footer-mobile-text19">
                    {props.text5 ?? (
                      <Fragment>
                        <span className="footer-mobile-text36">My Mentors</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="footer-mobile-container19">
                  <a
                    href={props.textUrl21}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-mobile-link10"
                  >
                    {props.text21 ?? (
                      <Fragment>
                        <span className="footer-mobile-text37">
                          Google Reviews
                        </span>
                      </Fragment>
                    )}
                  </a>
                </div>
              </div>
              <div className="footer-mobile-container20">
                <a
                  href="https://jivayu.in/homeopathic-doctor"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-mobile-link11"
                >
                  <div className="footer-mobile-container21">
                    <span className="footer-mobile-text20">
                      {props.text58 ?? (
                        <Fragment>
                          <span className="footer-mobile-text26">About Me</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/jivayu.in?igsh=MTVnaWJmYWc3Nm5ocQ=="
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-mobile-link12"
                >
                  <div className="footer-mobile-container22">
                    <span className="footer-mobile-text21">
                      {props.text218 ?? (
                        <Fragment>
                          <span className="footer-mobile-text28">
                            Instagram Connect
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </a>
              </div>
              <div className="footer-mobile-container23">
                <a
                  href="https://www.google.com/search?q=jivayu+homeoapthic+clinic&amp;rlz=1C1ONGR_enIN1065IN1065&amp;oq=&amp;gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQg5MTY3ajBqN6gCCLACAQ&amp;sourceid=chrome&amp;ie=UTF-8"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-mobile-link13"
                >
                  <div className="footer-mobile-container24">
                    <span className="footer-mobile-text22">
                      {props.text57 ?? (
                        <Fragment>
                          <span className="footer-mobile-text32">
                            Google Business Profile
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/jivayu.in"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-mobile-link14"
                >
                  <div className="footer-mobile-container25">
                    <span className="footer-mobile-text23">
                      {props.text217 ?? (
                        <Fragment>
                          <span className="footer-mobile-text30">
                            Facebook Connect
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </a>
              </div>
              <div className="footer-mobile-container26">
                <a
                  href="https://jivayu.in/clinic-location-in-nagpur"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-mobile-link15"
                >
                  <div className="footer-mobile-container27">
                    <span className="footer-mobile-text24">
                      {props.text56 ?? (
                        <Fragment>
                          <span className="footer-mobile-text27">
                            Contact Us
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </a>
                <div className="footer-mobile-container28">
                  <a
                    href={props.textUrl216}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-mobile-link16"
                  >
                    {props.text216 ?? (
                      <Fragment>
                        <span className="footer-mobile-text34">
                          WhatsApp Connect
                        </span>
                      </Fragment>
                    )}
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-mobile-container29">
              <div className="footer-mobile-container30">
                <a
                  href={props.textUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-mobile-link17"
                >
                  {props.text ?? (
                    <Fragment>
                      <span className="footer-mobile-text33">
                        Privacy Policy
                      </span>
                    </Fragment>
                  )}
                </a>
              </div>
              <div className="footer-mobile-container31">
                <a
                  href={props.textUrl1}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-mobile-link18"
                >
                  {props.text1 ?? (
                    <Fragment>
                      <span className="footer-mobile-text35">Term of Use</span>
                    </Fragment>
                  )}
                </a>
              </div>
              <div className="footer-mobile-container32">
                <a
                  href={props.textUrl2}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-mobile-link19"
                >
                  {props.text2 ?? (
                    <Fragment>
                      <span className="footer-mobile-text31">
                        Cookies Policy
                      </span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
          </div>
          <span className="footer-mobile-text25">
            {props.text13 ?? (
              <Fragment>
                <span className="footer-mobile-text29">
                  Website is in Development !
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .footer-mobile-container10 {
            width: 100%;
            height: auto;
            display: none;
            transform: scale(0.95);
            margin-bottom: -24px;
          }
          .footer-mobile-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: center;
            box-shadow: -10px -15px 35px 0px rgba(34, 64, 49, 0.4);
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            border-color: #132f23;
            border-style: solid;
            border-width: 1px;
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-twounits);
            padding-bottom: var(--dl-layout-space-unit);
            background-size: cover;
            justify-content: space-between;
            background-image: bc8e9e98-a0f3-42af-b3e8-6aecdaffe2c1,
              linear-gradient(
                90deg,
                rgba(24, 70, 50, 0.62) 14%,
                rgb(11, 23, 19) 80%
              );
            background-repeat: no-repeat, top left;
            background-position: center;
          }
          .footer-mobile-container12 {
            flex: 0 0 auto;
            width: 33%;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            flex-direction: column;
            justify-content: center;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .footer-mobile-container13 {
            flex: 0 0 auto;
            width: 75%;
            height: 30%;
            display: flex;
            transform: scale(0.95);
            align-self: flex-start;
            align-items: center;
            border-radius: var(--dl-layout-radius-radius4);
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .footer-mobile-ul1 {
            width: 100%;
            height: 100%;
            margin: 0px;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            list-style-type: none;
            list-style-image: none;
            list-style-position: outside;
          }
          .footer-mobile-li1 {
            font-size: 10px;
            align-self: flex-start;
            text-align: center;
            line-height: 1.2;
            padding-bottom: 2px;
          }
          .footer-mobile-text10 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            display: block;
            font-size: 10px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.4;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius8);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-halfunit);
            letter-spacing: auto;
          }
          .footer-mobile-text11 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            display: block;
            font-size: 10px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.4;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius8);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-halfunit);
            letter-spacing: auto;
          }
          .footer-mobile-text12 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
            display: block;
            font-size: 10px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.4;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius8);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-halfunit);
            letter-spacing: auto;
          }
          .footer-mobile-li2 {
            font-size: 10px;
            align-self: flex-start;
            text-align: left;
            line-height: 1.2;
            padding-bottom: 4px;
          }
          .footer-mobile-li3 {
            font-size: 10px;
            align-self: flex-start;
            text-align: center;
            line-height: 1.2;
            padding-bottom: 2px;
          }
          .footer-mobile-container14 {
            width: 35%;
            display: flex;
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          .footer-mobile-container15 {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer-mobile-ul2 {
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: flex-start;
            list-style-type: none;
            list-style-image: none;
            list-style-position: outside;
          }
          .footer-mobile-li4 {
            text-align: center;
            padding-top: 4px;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 4px;
          }
          .footer-mobile-text13 {
            fill: var(--dl-color-theme-neutral-light);
            color: #fdfdfd;
            font-size: 12px;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 2;
            letter-spacing: 1.2px;
          }
          .footer-mobile-li5 {
            text-align: center;
            padding-top: 4px;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 4px;
          }
          .footer-mobile-text14 {
            fill: var(--dl-color-theme-neutral-light);
            color: #fdfdfd;
            font-size: 12px;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 2;
            letter-spacing: 1.2px;
          }
          .footer-mobile-li6 {
            text-align: center;
            padding-top: 4px;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 4px;
          }
          .footer-mobile-text15 {
            fill: var(--dl-color-theme-neutral-light);
            color: #fdfdfd;
            font-size: 12px;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 2;
            letter-spacing: 1.2px;
          }
          .footer-mobile-ul3 {
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: flex-start;
            list-style-type: none;
            list-style-image: none;
            list-style-position: outside;
          }
          .footer-mobile-li7 {
            text-align: center;
            padding-top: 4px;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 4px;
          }
          .footer-mobile-text16 {
            fill: var(--dl-color-theme-neutral-light);
            color: #fdfdfd;
            font-size: 12px;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 2;
            letter-spacing: 1.2px;
          }
          .footer-mobile-li8 {
            text-align: center;
            padding-top: 4px;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 4px;
          }
          .footer-mobile-text17 {
            fill: var(--dl-color-theme-neutral-light);
            color: #fdfdfd;
            font-size: 12px;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 2;
            letter-spacing: 1.2px;
          }
          .footer-mobile-li9 {
            text-align: center;
            padding-top: 4px;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 4px;
          }
          .footer-mobile-text18 {
            fill: var(--dl-color-theme-neutral-light);
            color: #fdfdfd;
            font-size: 12px;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 2;
            letter-spacing: 1.2px;
          }
          .footer-mobile-container16 {
            gap: 2px;
            flex: 0 0 auto;
            width: 35%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-mobile-container17 {
            gap: 1px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: flex-start;
          }
          .footer-mobile-container18 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(24, 61, 44, 0.75);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            background-color: rgba(178, 208, 195, 0.25);
            border-right-width: 0px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .footer-mobile-container18:hover {
            width: 45%;
            border-color: var(--dl-color-theme-primary2);
          }
          .footer-mobile-text19 {
            font-size: 10px;
          }
          .footer-mobile-container19 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(24, 61, 44, 0.75);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            background-color: rgba(178, 208, 195, 0.35);
            border-left-width: 0px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .footer-mobile-container19:hover {
            width: 45%;
            border-color: var(--dl-color-theme-primary2);
          }
          .footer-mobile-link10 {
            font-size: 10px;
          }
          .footer-mobile-container20 {
            gap: 1px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: flex-start;
          }
          .footer-mobile-link11 {
            display: contents;
          }
          .footer-mobile-container21 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(24, 61, 44, 0.75);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            text-decoration: none;
            background-color: rgba(178, 208, 195, 0.25);
            border-right-width: 0px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .footer-mobile-container21:hover {
            width: 45%;
          }
          .footer-mobile-text20 {
            font-size: 10px;
          }
          .footer-mobile-link12 {
            display: contents;
          }
          .footer-mobile-container22 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(24, 61, 44, 0.75);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            text-decoration: none;
            background-color: rgba(178, 208, 195, 0.35);
            border-left-width: 0px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .footer-mobile-container22:hover {
            width: 45%;
          }
          .footer-mobile-text21 {
            font-size: 10px;
          }
          .footer-mobile-container23 {
            gap: 1px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: flex-start;
          }
          .footer-mobile-link13 {
            display: contents;
          }
          .footer-mobile-container24 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(24, 61, 44, 0.75);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            text-decoration: none;
            background-color: rgba(178, 208, 195, 0.25);
            border-right-width: 0px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .footer-mobile-container24:hover {
            width: 45%;
          }
          .footer-mobile-text22 {
            font-size: 10px;
          }
          .footer-mobile-link14 {
            display: contents;
          }
          .footer-mobile-container25 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(24, 61, 44, 0.75);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            text-decoration: none;
            background-color: rgba(178, 208, 195, 0.35);
            border-left-width: 0px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .footer-mobile-container25:hover {
            width: 45%;
          }
          .footer-mobile-text23 {
            font-size: 10px;
          }
          .footer-mobile-container26 {
            gap: 1px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: flex-start;
          }
          .footer-mobile-link15 {
            display: contents;
          }
          .footer-mobile-container27 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(24, 61, 44, 0.75);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            text-decoration: none;
            background-color: rgba(178, 208, 195, 0.25);
            border-right-width: 0px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .footer-mobile-container27:hover {
            width: 45%;
          }
          .footer-mobile-text24 {
            font-size: 10px;
          }
          .footer-mobile-container28 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(24, 61, 44, 0.75);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            background-color: rgba(178, 208, 195, 0.35);
            border-left-width: 0px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .footer-mobile-container28:hover {
            width: 45%;
          }
          .footer-mobile-link16 {
            font-size: 10px;
          }
          .footer-mobile-container29 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            justify-content: center;
          }
          .footer-mobile-container30 {
            flex: 0 0 auto;
            width: auto;
            height: 30px;
            display: flex;
            align-items: center;
            border-color: rgba(24, 61, 44, 0.4);
            border-width: 0.6px;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: rgba(23, 25, 24, 0.32);
            border-right-width: 0px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .footer-mobile-link17 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 10px;
          }
          .footer-mobile-container31 {
            flex: 0 0 auto;
            width: auto;
            height: 30px;
            display: flex;
            align-items: center;
            border-color: rgba(24, 61, 44, 0.4);
            border-width: 0.6px;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: 0px;
            padding-right: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: rgba(23, 25, 24, 0.32);
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .footer-mobile-link18 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 10px;
          }
          .footer-mobile-container32 {
            flex: 0 0 auto;
            width: auto;
            height: 30px;
            display: flex;
            align-items: center;
            border-color: rgba(24, 61, 44, 0.4);
            border-width: 0.6px;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: rgba(23, 25, 24, 0.32);
            border-left-width: 0px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .footer-mobile-link19 {
            fill: var(--dl-color-theme-accent1);
            color: var(--dl-color-theme-accent1);
            font-size: 10px;
          }
          .footer-mobile-text25 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 10px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 400;
            line-height: 1.4;
            padding-top: 4px;
            border-color: rgba(64, 145, 108, 0.1);
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-halfunit);
            letter-spacing: 1.2px;
            padding-bottom: 4px;
            background-color: #fbf9f9;
          }
          .footer-mobile-text26 {
            display: inline-block;
          }
          .footer-mobile-text27 {
            display: inline-block;
          }
          .footer-mobile-text28 {
            display: inline-block;
          }
          .footer-mobile-text29 {
            display: inline-block;
            line-height: 1.4;
          }
          .footer-mobile-text30 {
            display: inline-block;
          }
          .footer-mobile-text31 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: inline-block;
          }
          .footer-mobile-text32 {
            display: inline-block;
          }
          .footer-mobile-text33 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: inline-block;
          }
          .footer-mobile-text34 {
            display: inline-block;
          }
          .footer-mobile-text35 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: inline-block;
          }
          .footer-mobile-text36 {
            display: inline-block;
          }
          .footer-mobile-text37 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .footer-mobile-container14 {
              width: 35%;
            }
            .footer-mobile-container16 {
              width: 35%;
            }
          }
          @media (max-width: 767px) {
            .footer-mobile-container10 {
              height: auto;
              display: block;
              border-radius: var(--dl-layout-radius-buttonradius);
              background-size: cover;
              background-image: url('/images/bckimg-1500w.webp');
              background-position: bottom left;
            }
            .footer-mobile-container11 {
              height: 100%;
              border-color: var(--dl-color-theme-primary1);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              flex-direction: column;
              background-size: cover;
              background-image: linear-gradient(
                180deg,
                rgba(24, 70, 50, 0.49) 17%,
                rgb(22, 51, 41) 99%
              );
              background-repeat: center;
              background-position: bottom, center;
            }
            .footer-mobile-container12 {
              width: 100%;
              height: auto;
              align-self: center;
              align-items: center;
              padding-bottom: var(--dl-layout-space-unit);
              border-top-right-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-left-radius: 0;
            }
            .footer-mobile-container13 {
              width: 90%;
              height: var(--dl-layout-size-medium);
              padding: var(--dl-layout-space-halfunit);
              align-self: center;
              justify-content: center;
            }
            .footer-mobile-ul1 {
              width: 100%;
              align-self: center;
              align-items: center;
            }
            .footer-mobile-li1 {
              align-self: center;
              padding-top: 4px;
              padding-left: 4px;
              border-radius: var(--dl-layout-radius-imageradius);
              padding-right: 4px;
              padding-bottom: 4px;
              backdrop-filter: blur(5px);
              background-color: rgba(8, 0, 0, 0.19);
            }
            .footer-mobile-text10 {
              color: #fdfbfb;
              font-style: normal;
              text-align: left;
              font-weight: 300;
            }
            .footer-mobile-text11 {
              color: #fdfbfb;
              font-style: normal;
              text-align: left;
              font-weight: 300;
            }
            .footer-mobile-text12 {
              color: #fdfbfb;
              font-style: normal;
              text-align: left;
              font-weight: 300;
            }
            .footer-mobile-li2 {
              align-self: center;
            }
            .footer-mobile-li3 {
              align-self: center;
            }
            .footer-mobile-container14 {
              width: 100%;
              height: auto;
              align-self: center;
              padding-right: 0px;
            }
            .footer-mobile-container15 {
              width: 100%;
              display: none;
              flex-direction: row;
            }
            .footer-mobile-ul2 {
              width: 50%;
              align-self: flex-start;
              align-items: center;
            }
            .footer-mobile-li4 {
              width: 100%;
            }
            .footer-mobile-text13 {
              color: rgb(253, 253, 253);
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.6;
              letter-spacing: 1.2px;
            }
            .footer-mobile-li5 {
              width: 100%;
            }
            .footer-mobile-text14 {
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.6;
              letter-spacing: 1.2px;
            }
            .footer-mobile-li6 {
              width: 100%;
            }
            .footer-mobile-text15 {
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.6;
              letter-spacing: 1.2px;
            }
            .footer-mobile-ul3 {
              width: 50%;
              align-self: flex-start;
              align-items: center;
            }
            .footer-mobile-li7 {
              width: 100%;
            }
            .footer-mobile-text16 {
              color: rgb(253, 253, 253);
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.6;
              letter-spacing: 1.2px;
            }
            .footer-mobile-li8 {
              width: 100%;
            }
            .footer-mobile-text17 {
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.6;
              letter-spacing: 1.2px;
            }
            .footer-mobile-li9 {
              width: 100%;
            }
            .footer-mobile-text18 {
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.6;
              letter-spacing: 1.2px;
            }
            .footer-mobile-container16 {
              width: 100%;
              height: auto;
              align-self: center;
              align-items: center;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .footer-mobile-container17 {
              gap: 0;
              height: 40px;
              position: relative;
              justify-content: space-between;
            }
            .footer-mobile-container18 {
              left: -9px;
              width: 50%;
              bottom: 2px;
              height: 36px;
              position: absolute;
              box-shadow: 0px -10px 15px 0px rgba(2, 2, 2, 0.08);
              border-color: rgba(247, 242, 242, 0.3);
              border-style: groove;
              border-width: 0.6px;
              backdrop-filter: blur(5px);
              justify-content: center;
              background-color: rgba(247, 242, 242, 0.3);
              border-left-width: 0px;
              border-right-width: 0.6px;
              border-top-left-radius: var(--dl-layout-radius-radius4);
              border-top-right-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-left-radius: var(--dl-layout-radius-radius4);
              border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
            }
            .footer-mobile-text19 {
              fill: var(--dl-color-theme-neutral-light);
              color: #ffffff;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.8;
              letter-spacing: auto;
            }
            .footer-mobile-container19 {
              right: -9px;
              width: 50%;
              bottom: 2px;
              height: 36px;
              position: absolute;
              box-shadow: 0px -10px 15px 0px rgba(2, 2, 2, 0.08);
              border-color: rgba(247, 242, 242, 0.3);
              border-style: groove;
              border-width: 0.6px;
              backdrop-filter: blur(5px);
              background-color: rgba(247, 242, 242, 0.3);
              border-left-width: 0.6px;
              border-right-width: 0px;
              border-top-left-radius: var(--dl-layout-radius-buttonradius);
              border-top-right-radius: var(--dl-layout-radius-radius4);
              border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-right-radius: var(--dl-layout-radius-radius4);
            }
            .footer-mobile-link10 {
              fill: var(--dl-color-theme-neutral-light);
              color: #ffffff;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.8;
              letter-spacing: auto;
            }
            .footer-mobile-container20 {
              gap: 0;
              height: 40px;
              position: relative;
              justify-content: space-between;
            }
            .footer-mobile-container21 {
              left: -9px;
              width: 50%;
              bottom: 2px;
              height: 36px;
              position: absolute;
              box-shadow: 0px -10px 15px 0px rgba(2, 2, 2, 0.08);
              border-color: rgba(247, 242, 242, 0.3);
              border-width: 0.6px;
              backdrop-filter: blur(5px);
              background-color: rgba(247, 242, 242, 0.3);
              border-left-width: 0px;
              border-right-width: 0.6px;
              border-top-left-radius: var(--dl-layout-radius-radius4);
              border-top-right-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-left-radius: var(--dl-layout-radius-radius4);
              border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
            }
            .footer-mobile-text20 {
              fill: var(--dl-color-theme-neutral-light);
              color: #ffffff;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.8;
              letter-spacing: auto;
            }
            .footer-mobile-container22 {
              right: -9px;
              width: 50%;
              bottom: 2px;
              height: 36px;
              position: absolute;
              box-shadow: 0px -10px 15px 0px rgba(2, 2, 2, 0.08);
              border-color: rgba(247, 242, 242, 0.3);
              border-style: groove;
              border-width: 0.6px;
              backdrop-filter: blur(5px);
              background-color: rgba(247, 242, 242, 0.3);
              border-left-width: 0.6px;
              border-right-width: 0px;
              border-top-left-radius: var(--dl-layout-radius-buttonradius);
              border-top-right-radius: var(--dl-layout-radius-radius4);
              border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-right-radius: var(--dl-layout-radius-radius4);
            }
            .footer-mobile-text21 {
              fill: var(--dl-color-theme-neutral-light);
              color: #ffffff;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.8;
              letter-spacing: auto;
            }
            .footer-mobile-container23 {
              gap: 0;
              height: 40px;
              position: relative;
              justify-content: space-between;
            }
            .footer-mobile-container24 {
              left: -9px;
              width: 50%;
              bottom: 2px;
              height: 36px;
              position: absolute;
              box-shadow: 0px -10px 15px 0px rgba(2, 2, 2, 0.08);
              border-color: rgba(247, 242, 242, 0.3);
              border-width: 0.6px;
              backdrop-filter: blur(5px);
              background-color: rgba(247, 242, 242, 0.3);
              border-left-width: 0px;
              border-right-width: 0.6px;
              border-top-left-radius: var(--dl-layout-radius-radius4);
              border-top-right-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-left-radius: var(--dl-layout-radius-radius4);
              border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
            }
            .footer-mobile-text22 {
              fill: var(--dl-color-theme-neutral-light);
              color: #ffffff;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.8;
              letter-spacing: auto;
            }
            .footer-mobile-container25 {
              right: -9px;
              width: 50%;
              bottom: 2px;
              height: 36px;
              position: absolute;
              box-shadow: 0px -10px 15px 0px rgba(2, 2, 2, 0.08);
              border-color: rgba(247, 242, 242, 0.3);
              border-style: groove;
              border-width: 0.6px;
              backdrop-filter: blur(5px);
              background-color: rgba(247, 242, 242, 0.3);
              border-left-width: 0.6px;
              border-right-width: 0px;
              border-top-left-radius: var(--dl-layout-radius-buttonradius);
              border-top-right-radius: var(--dl-layout-radius-radius4);
              border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-right-radius: var(--dl-layout-radius-radius4);
            }
            .footer-mobile-text23 {
              fill: var(--dl-color-theme-neutral-light);
              color: #ffffff;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.8;
              letter-spacing: auto;
            }
            .footer-mobile-container26 {
              gap: 0;
              height: 40px;
              position: relative;
              justify-content: space-between;
            }
            .footer-mobile-container27 {
              left: -9px;
              width: 50%;
              bottom: 2px;
              height: 36px;
              position: absolute;
              box-shadow: 0px -10px 15px 0px rgba(2, 2, 2, 0.08);
              border-color: rgba(247, 242, 242, 0.3);
              border-width: 0.6px;
              backdrop-filter: blur(5px);
              background-color: rgba(247, 242, 242, 0.3);
              border-left-width: 0px;
              border-right-width: 0.6px;
              border-top-left-radius: var(--dl-layout-radius-radius4);
              border-top-right-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-left-radius: var(--dl-layout-radius-radius4);
              border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
            }
            .footer-mobile-text24 {
              fill: var(--dl-color-theme-neutral-light);
              color: #ffffff;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.8;
              letter-spacing: auto;
            }
            .footer-mobile-container28 {
              right: -9px;
              width: 50%;
              bottom: 2px;
              height: 36px;
              position: absolute;
              box-shadow: 0px -10px 15px 0px rgba(2, 2, 2, 0.08);
              border-color: rgba(247, 242, 242, 0.3);
              border-style: groove;
              border-width: 0.6px;
              backdrop-filter: blur(5px);
              background-color: rgba(247, 242, 242, 0.3);
              border-left-width: 0.6px;
              border-right-width: 0px;
              border-top-left-radius: var(--dl-layout-radius-buttonradius);
              border-top-right-radius: var(--dl-layout-radius-radius4);
              border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-right-radius: var(--dl-layout-radius-radius4);
            }
            .footer-mobile-link16 {
              fill: var(--dl-color-theme-neutral-light);
              color: #ffffff;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.8;
              letter-spacing: auto;
            }
            .footer-mobile-container29 {
              margin-top: var(--dl-layout-space-twounits);
            }
            .footer-mobile-container30 {
              padding-left: var(--dl-layout-space-unit);
              backdrop-filter: blur(5px);
              background-color: rgba(247, 242, 242, 0.3);
            }
            .footer-mobile-link17 {
              fill: var(--dl-color-theme-accent2);
              color: #ffffff;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-mobile-container31 {
              border-color: rgba(24, 61, 44, 0.4);
              backdrop-filter: blur(5px);
              background-color: rgba(247, 242, 242, 0.3);
            }
            .footer-mobile-link18 {
              fill: var(--dl-color-theme-accent2);
              color: #ffffff;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-mobile-container32 {
              padding-right: var(--dl-layout-space-unit);
              backdrop-filter: blur(5px);
              background-color: rgba(247, 242, 242, 0.3);
            }
            .footer-mobile-link19 {
              fill: var(--dl-color-theme-accent2);
              color: #ffffff;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-mobile-text25 {
              fill: var(--dl-color-theme-accent2);
              color: rgba(183, 228, 199, 0.56);
              font-size: 12px;
              font-style: normal;
              margin-top: var(--dl-layout-space-halfunit);
              font-family: Inter;
              font-weight: 300;
              border-color: rgba(148, 3, 3, 0.65);
              border-radius: var(--dl-layout-radius-inputradius);
              background-color: rgba(148, 0, 0, 0.17);
            }
            .footer-mobile-text29 {
              font-size: 10px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
              line-height: 1.4;
            }
            .footer-mobile-text31 {
              color: var(--dl-color-theme-accent2);
            }
            .footer-mobile-text33 {
              color: var(--dl-color-theme-accent2);
            }
            .footer-mobile-text35 {
              color: var(--dl-color-theme-accent2);
            }
            .footer-mobile-text36 {
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .footer-mobileroot-class-name {
              margin-bottom: 0px;
            }
            .footer-mobileroot-class-name2 {
              margin-bottom: 0px;
            }
            .footer-mobileroot-class-name3 {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 400px) {
            .footer-mobile-container10 {
              border-radius: var(--dl-layout-radius-buttonradius);
            }
            .footer-mobile-container11 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .footer-mobile-container12 {
              padding-bottom: var(--dl-layout-space-unit);
            }
            .footer-mobile-container13 {
              width: 100%;
              padding: var(--dl-layout-space-halfunit);
            }
            .footer-mobile-text13 {
              font-size: 12px;
              font-style: normal;
              font-weight: 300;
            }
            .footer-mobile-li5 {
              font-size: 12px;
            }
            .footer-mobile-text14 {
              font-size: 12px;
              font-style: normal;
              font-weight: 300;
            }
            .footer-mobile-text15 {
              font-size: 12px;
              font-style: normal;
              font-weight: 300;
            }
            .footer-mobile-text16 {
              font-size: 12px;
              font-style: normal;
              font-weight: 300;
            }
            .footer-mobile-text17 {
              font-size: 12px;
              font-style: normal;
              font-weight: 300;
            }
            .footer-mobile-text18 {
              font-size: 12px;
              font-style: normal;
              font-weight: 300;
            }
            .footer-mobile-container18 {
              left: -10px;
            }
            .footer-mobile-container19 {
              right: -10px;
              width: 50%;
              border-color: rgba(24, 61, 44, 0.75);
            }
            .footer-mobile-container21 {
              left: -10px;
            }
            .footer-mobile-container22 {
              right: -10px;
              width: 50%;
            }
            .footer-mobile-container24 {
              left: -10px;
            }
            .footer-mobile-container25 {
              right: -10px;
              width: 50%;
            }
            .footer-mobile-container27 {
              left: -10px;
            }
            .footer-mobile-container28 {
              right: -10px;
              width: 50%;
            }
            .footer-mobile-text25 {
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
            }
            .footer-mobileroot-class-name {
              margin-bottom: 0px;
            }
            .footer-mobileroot-class-name2 {
              margin-bottom: 0px;
            }
            .footer-mobileroot-class-name3 {
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

FooterMobile.defaultProps = {
  rootClassName: '',
  text58: undefined,
  text56: undefined,
  text218: undefined,
  textUrl216: 'https://example.com',
  textUrl: 'https://example.com',
  text13: undefined,
  text217: undefined,
  textUrl2: 'https://example.com',
  text2: undefined,
  text57: undefined,
  text: undefined,
  text216: undefined,
  text1: undefined,
  textUrl21: 'https://example.com',
  textUrl1: 'https://example.com',
  text5: undefined,
  text21: undefined,
}

FooterMobile.propTypes = {
  rootClassName: PropTypes.string,
  text58: PropTypes.element,
  text56: PropTypes.element,
  text218: PropTypes.element,
  textUrl216: PropTypes.string,
  textUrl: PropTypes.string,
  text13: PropTypes.element,
  text217: PropTypes.element,
  textUrl2: PropTypes.string,
  text2: PropTypes.element,
  text57: PropTypes.element,
  text: PropTypes.element,
  text216: PropTypes.element,
  text1: PropTypes.element,
  textUrl21: PropTypes.string,
  textUrl1: PropTypes.string,
  text5: PropTypes.element,
  text21: PropTypes.element,
}

export default FooterMobile
