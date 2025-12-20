import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Slider from './slider'

const FooterDesktop = (props) => {
  return (
    <>
      <div className={`footer-desktop-container10 ${props.rootClassName} `}>
        <div className="footer-desktop-container11">
          <div className="footer-desktop-container12">
            <div className="footer-desktop-container13">
              <Slider rootClassName="sliderroot-class-name2"></Slider>
            </div>
            <div className="footer-desktop-container14">
              <ul className="footer-desktop-ul1 list">
                <a
                  href="https://maps.app.goo.gl/oDUuTMEyetq2WB6Q6"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-desktop-link1"
                >
                  <li className="footer-desktop-li1 list-item">
                    <span className="footer-desktop-text10">
                      Rajiv Nagar, Beside Indian Auto Gas Station
                    </span>
                    <span className="footer-desktop-text11">
                      Deep Enterprise Buldng
                    </span>
                    <span className="footer-desktop-text12">
                      Hingna Road, Nagpur, 440016
                    </span>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="footer-desktop-container15">
            <div className="footer-desktop-container16">
              <div className="footer-desktop-container17">
                <span className="footer-desktop-text13">
                  {props.text53 ?? (
                    <Fragment>
                      <span className="footer-desktop-text29">My Mentors</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <a
                href="https://www.instagram.com/jivayu.in?igsh=MTVnaWJmYWc3Nm5ocQ=="
                target="_blank"
                rel="noreferrer noopener"
                className="footer-desktop-link2"
              >
                <div className="footer-desktop-container18">
                  <span className="footer-desktop-text14">
                    {props.text213 ?? (
                      <Fragment>
                        <span className="footer-desktop-text26">
                          InstaGram Connect
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
            </div>
            <div className="footer-desktop-container19">
              <a
                href="https://jivayu.in/homeopathic-doctor"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-desktop-link3"
              >
                <div className="footer-desktop-container20">
                  <span className="footer-desktop-text15">
                    {props.text52 ?? (
                      <Fragment>
                        <span className="footer-desktop-text28">About Me</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
              <a
                href="https://www.facebook.com/jivayu.in"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-desktop-link4"
              >
                <div className="footer-desktop-container21">
                  <span className="footer-desktop-text16">
                    {props.text212 ?? (
                      <Fragment>
                        <span className="footer-desktop-text27">
                          Facebook Connect
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
            </div>
            <div className="footer-desktop-container22">
              <a
                href="https://www.google.com/search?q=jivayu+homeoapthic+clinic&amp;rlz=1C1ONGR_enIN1065IN1065&amp;oq=&amp;gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQg5MTY3ajBqN6gCCLACAQ&amp;sourceid=chrome&amp;ie=UTF-8"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-desktop-link5"
              >
                <div className="footer-desktop-container23">
                  <span className="footer-desktop-text17">
                    {props.text521 ?? (
                      <Fragment>
                        <span className="footer-desktop-text31">
                          Google Profile
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
              <div className="footer-desktop-container24">
                <span className="footer-desktop-text18">
                  {props.text2121 ?? (
                    <Fragment>
                      <span className="footer-desktop-text32">
                        WhatsApp Connect
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="footer-desktop-container25">
              <a
                href="https://jivayu.in/clinic-location-in-nagpur"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-desktop-link6"
              >
                <div className="footer-desktop-container26">
                  <span className="footer-desktop-text19">
                    {props.text5211 ?? (
                      <Fragment>
                        <span className="footer-desktop-text30">
                          Contact Us
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
              <div className="footer-desktop-container27">
                <span className="footer-desktop-text20">
                  {props.text21211 ?? (
                    <Fragment>
                      <span className="footer-desktop-text25">
                        Google Reviews
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="footer-desktop-container28">
            <ul className="footer-desktop-ul2 list">
              <li className="footer-desktop-li2 list-item">
                <span className="footer-desktop-text21">Why Homeopathy ?</span>
              </li>
              <li className="footer-desktop-li3 list-item">
                <span className="footer-desktop-text22">Why Homeopathy ?</span>
              </li>
              <li className="footer-desktop-li4 list-item">
                <span className="footer-desktop-text23">Why Homeopathy ?</span>
              </li>
              <li className="footer-desktop-li5 list-item">
                <span className="footer-desktop-text24">Why Homeopathy ?</span>
              </li>
            </ul>
            <Slider rootClassName="sliderroot-class-name6"></Slider>
            <div className="footer-desktop-container29">
              <div className="footer-desktop-container30">
                <a
                  href={props.textUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-desktop-link7"
                >
                  Privacy Policy
                </a>
              </div>
              <div className="footer-desktop-container31">
                <a
                  href={props.textUrl1}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-desktop-link8"
                >
                  Term of Use
                </a>
              </div>
              <div className="footer-desktop-container32">
                <a
                  href={props.textUrl2}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-desktop-link9"
                >
                  Cookies Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-desktop-container10 {
            width: 100%;
            height: 100%;
            display: flex;
            transform: scale(0.95);
            border-radius: var(--dl-layout-radius-buttonradius);
            margin-bottom: -24px;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: linear-gradient(
                270deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(0, 0, 0, 0.55) 100%
              ),
              url('/images/bckimg-1500h.webp');
            background-repeat: left, no-repeat;
            background-position: left;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .footer-desktop-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-self: center;
            box-shadow: -10px -15px 35px 0px rgba(34, 64, 49, 0.4);
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            backdrop-filter: blur(3px);
            background-size: contain;
            justify-content: space-between;
            background-image: url('/images/footer-backgrnd-1500h.webp');
            background-repeat: no-repeat;
            background-position: right;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .footer-desktop-container12 {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: var(--dl-color-theme-primary2);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-buttonradius);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgba(189, 195, 199, 0.15) 0%,
                rgba(0, 0, 0, 0.47) 100%
              ),
              url('/images/bckimg-1500h.webp');
            background-repeat: no-repeat;
            border-right-width: 0px;
            background-position: center;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .footer-desktop-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
            display: flex;
            transform: scale(0.95);
            align-self: center;
            align-items: center;
            border-radius: var(--dl-layout-radius-inputradius);
            justify-content: center;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .footer-desktop-container14 {
            width: 100%;
            height: 50%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .footer-desktop-ul1 {
            width: 100%;
            height: 100%;
            margin: 0px;
            display: flex;
            padding: 0px;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            list-style-type: none;
            list-style-image: none;
            list-style-position: outside;
          }
          .footer-desktop-link1 {
            display: contents;
          }
          .footer-desktop-li1 {
            position: relative;
            font-size: 10px;
            align-self: center;
            text-align: center;
            line-height: 1.2;
            padding-top: 4px;
            padding-left: 4px;
            border-radius: var(--dl-layout-radius-cardradius);
            padding-right: 4px;
            padding-bottom: 4px;
            backdrop-filter: blur(5px);
            text-decoration: none;
            background-color: rgba(8, 0, 0, 0.19);
          }
          .footer-desktop-text10 {
            fill: var(--dl-color-theme-neutral-light);
            color: #fbfbfb;
            display: block;
            font-size: 10px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 1.4;
            padding-left: var(--dl-layout-space-halfunit);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-halfunit);
            letter-spacing: auto;
          }
          .footer-desktop-text11 {
            fill: var(--dl-color-theme-neutral-light);
            color: #fbfbfb;
            display: block;
            font-size: 10px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 1.4;
            padding-left: var(--dl-layout-space-halfunit);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-halfunit);
            letter-spacing: auto;
          }
          .footer-desktop-text12 {
            fill: var(--dl-color-theme-neutral-light);
            color: #fbfbfb;
            display: block;
            font-size: 10px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 1.4;
            padding-left: var(--dl-layout-space-halfunit);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-halfunit);
            letter-spacing: auto;
          }
          .footer-desktop-container15 {
            gap: 6px;
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            border-color: var(--dl-color-theme-primary2);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .footer-desktop-container16 {
            gap: 1px;
            flex: 0 0 auto;
            width: 85%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .footer-desktop-container17 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transform: scaleX(1) scaleY(1) scaleZ(1);
            transition: 0.3s;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            justify-items: center;
            backdrop-filter: blur(15px);
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.48);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .footer-desktop-container17:hover {
            width: 40%;
            transform: scaleX(0.98) scaleY(0.98) scaleZ(0.98);
            box-shadow: -3px 3px 15px 0px rgba(212, 212, 212, 0.15);
            border-color: rgba(238, 10, 231, 0.27);
            border-style: groove;
            border-width: 0.6px;
            justify-content: center;
          }
          .footer-desktop-text13 {
            fill: var(--dl-color-theme-primary1);
            color: #ffffff;
            font-size: 12px;
            font-style: normal;
            text-align: left;
            font-family: 'Inter';
            font-weight: 400;
            letter-spacing: auto;
          }
          .footer-desktop-link2 {
            display: contents;
          }
          .footer-desktop-container18 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            backdrop-filter: blur(15px);
            justify-content: center;
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0.48);
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .footer-desktop-container18:hover {
            transform: scaleX(0.98) scaleY(0.98) scaleZ(0.98);
            box-shadow: -3px 3px 15px 0px rgba(212, 212, 212, 0.15);
            border-color: rgba(238, 10, 231, 0.27);
            border-style: groove;
            border-width: 0.6px;
          }
          .footer-desktop-text14 {
            fill: var(--dl-color-theme-primary1);
            color: #ffffff;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            letter-spacing: auto;
          }
          .footer-desktop-container19 {
            gap: 1px;
            flex: 0 0 auto;
            width: 85%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .footer-desktop-link3 {
            display: contents;
          }
          .footer-desktop-container20 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            backdrop-filter: blur(15px);
            justify-content: center;
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0.48);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .footer-desktop-container20:hover {
            transform: scaleX(0.98) scaleY(0.98) scaleZ(0.98);
            box-shadow: -3px 3px 15px 0px rgba(212, 212, 212, 0.15);
            border-color: rgba(238, 10, 231, 0.27);
            border-style: groove;
            border-width: 0.6px;
          }
          .footer-desktop-text15 {
            fill: var(--dl-color-theme-primary1);
            color: #ffffff;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            letter-spacing: auto;
          }
          .footer-desktop-link4 {
            display: contents;
          }
          .footer-desktop-container21 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            backdrop-filter: blur(15px);
            justify-content: center;
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0.48);
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .footer-desktop-container21:hover {
            transform: scaleX(0.98) scaleY(0.98) scaleZ(0.98);
            box-shadow: -3px 3px 15px 0px rgba(212, 212, 212, 0.15);
            border-color: rgba(238, 10, 231, 0.27);
            border-style: groove;
            border-width: 0.6px;
          }
          .footer-desktop-text16 {
            fill: var(--dl-color-theme-primary1);
            color: #ffffff;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            letter-spacing: auto;
          }
          .footer-desktop-container22 {
            gap: 1px;
            flex: 0 0 auto;
            width: 85%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .footer-desktop-link5 {
            display: contents;
          }
          .footer-desktop-container23 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            backdrop-filter: blur(15px);
            justify-content: center;
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0.48);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .footer-desktop-container23:hover {
            transform: scaleX(0.98) scaleY(0.98) scaleZ(0.98);
            box-shadow: -3px 3px 15px 0px rgba(212, 212, 212, 0.15);
            border-color: rgba(238, 10, 231, 0.27);
            border-style: groove;
            border-width: 0.6px;
          }
          .footer-desktop-text17 {
            fill: var(--dl-color-theme-primary1);
            color: #ffffff;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            letter-spacing: auto;
          }
          .footer-desktop-container24 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            backdrop-filter: blur(15px);
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.48);
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .footer-desktop-container24:hover {
            transform: scaleX(0.98) scaleY(0.98) scaleZ(0.98);
            box-shadow: -3px 3px 15px 0px rgba(212, 212, 212, 0.15);
            border-color: rgba(238, 10, 231, 0.27);
            border-style: groove;
            border-width: 0.6px;
          }
          .footer-desktop-text18 {
            fill: var(--dl-color-theme-primary1);
            color: #ffffff;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            letter-spacing: auto;
          }
          .footer-desktop-container25 {
            gap: 1px;
            flex: 0 0 auto;
            width: 85%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .footer-desktop-link6 {
            display: contents;
          }
          .footer-desktop-container26 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            backdrop-filter: blur(15px);
            justify-content: center;
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0.48);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .footer-desktop-container26:hover {
            transform: scaleX(0.98) scaleY(0.98) scaleZ(0.98);
            box-shadow: -3px 3px 15px 0px rgba(212, 212, 212, 0.15);
            border-color: rgba(238, 10, 231, 0.27);
            border-style: groove;
            border-width: 0.6px;
          }
          .footer-desktop-text19 {
            fill: var(--dl-color-theme-primary1);
            color: #ffffff;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            letter-spacing: auto;
          }
          .footer-desktop-container27 {
            flex: 0 0 auto;
            width: 40%;
            height: 30px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            backdrop-filter: blur(15px);
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.48);
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .footer-desktop-container27:hover {
            transform: scaleX(0.98) scaleY(0.98) scaleZ(0.98);
            box-shadow: -3px 3px 15px 0px rgba(212, 212, 212, 0.15);
            border-color: rgba(238, 10, 231, 0.27);
            border-style: groove;
            border-width: 0.6px;
          }
          .footer-desktop-text20 {
            fill: var(--dl-color-theme-primary1);
            color: #ffffff;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            letter-spacing: auto;
          }
          .footer-desktop-container28 {
            width: 300px;
            display: flex;
            align-self: stretch;
            padding-top: var(--dl-layout-space-unit);
            border-color: var(--dl-color-theme-primary2);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: space-between;
            border-left-width: 0px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          .footer-desktop-ul2 {
            width: auto;
            height: 100%;
            display: none;
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
          .footer-desktop-li2 {
            text-align: center;
            padding-top: 4px;
            border-color: var(--dl-color-theme-neutral-light);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 4px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .footer-desktop-text21 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 2;
            letter-spacing: 1.2px;
          }
          .footer-desktop-li3 {
            text-align: center;
            padding-top: 4px;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 4px;
          }
          .footer-desktop-text22 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 2;
            letter-spacing: 1.2px;
          }
          .footer-desktop-li4 {
            text-align: center;
            padding-top: 4px;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 4px;
          }
          .footer-desktop-text23 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 2;
            letter-spacing: 1.2px;
          }
          .footer-desktop-li5 {
            text-align: center;
            padding-top: 4px;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: 2px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 4px;
          }
          .footer-desktop-text24 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 12px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 2;
            letter-spacing: 1.2px;
          }
          .footer-desktop-container29 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .footer-desktop-container30 {
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
            backdrop-filter: blur(5px);
            justify-content: center;
            background-color: rgba(8, 0, 0, 0.19);
            border-right-width: 0px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .footer-desktop-link7 {
            fill: var(--dl-color-theme-neutral-light);
            color: #ffffff;
            font-size: 10px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 300;
          }
          .footer-desktop-container31 {
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
            backdrop-filter: blur(5px);
            justify-content: center;
            background-color: rgba(8, 0, 0, 0.19);
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .footer-desktop-link8 {
            fill: var(--dl-color-theme-neutral-light);
            color: #ffffff;
            font-size: 10px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 300;
          }
          .footer-desktop-container32 {
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
            backdrop-filter: blur(5px);
            justify-content: center;
            background-color: rgba(8, 0, 0, 0.19);
            border-left-width: 0px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .footer-desktop-link9 {
            fill: var(--dl-color-theme-neutral-light);
            color: #ffffff;
            font-size: 10px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 300;
          }
          .footer-desktop-text25 {
            display: inline-block;
          }
          .footer-desktop-text26 {
            display: inline-block;
          }
          .footer-desktop-text27 {
            display: inline-block;
          }
          .footer-desktop-text28 {
            display: inline-block;
          }
          .footer-desktop-text29 {
            display: inline-block;
          }
          .footer-desktop-text30 {
            display: inline-block;
          }
          .footer-desktop-text31 {
            display: inline-block;
          }
          .footer-desktop-text32 {
            display: inline-block;
          }
          .footer-desktoproot-class-name {
            width: 100%;
            height: auto;
            align-self: stretch;
            margin-bottom: -4px;
          }
          .footer-desktoproot-class-name1 {
            align-self: center;
            margin-bottom: -4px;
          }

          .footer-desktoproot-class-name3 {
            width: 100%;
            height: auto;
            align-self: stretch;
            margin-bottom: -4px;
          }
          .footer-desktoproot-class-name4 {
            width: 100%;
            height: auto;
            align-self: stretch;
            margin-bottom: -4px;
          }
          @media (max-width: 1200px) {
            .footer-desktop-text10 {
              fill: var(--dl-color-theme-neutral-light);
              color: rgb(251, 251, 251);
              display: block;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              line-height: 1.2;
              padding-left: var(--dl-layout-space-halfunit);
              margin-bottom: 2px;
              padding-right: var(--dl-layout-space-halfunit);
            }
            .footer-desktop-text11 {
              font-size: 10px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
              line-height: 1.2;
            }
            .footer-desktop-text12 {
              font-size: 10px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
              line-height: 1.2;
            }
            .footer-desktop-container16 {
              width: 100%;
            }
            .footer-desktop-container19 {
              width: 100%;
            }
            .footer-desktop-container22 {
              width: 100%;
            }
            .footer-desktop-container25 {
              width: 100%;
            }
            .footer-desktop-container28 {
              width: 30%;
              align-self: stretch;
            }
            .footer-desktop-container29 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .footer-desktop-container11 {
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .footer-desktop-container12 {
              width: 30%;
            }
            .footer-desktop-text10 {
              font-style: normal;
              font-weight: 300;
            }
            .footer-desktop-container15 {
              width: 40%;
              padding-left: var(--dl-layout-space-halfunit);
            }
            .footer-desktop-container17 {
              width: 45%;
            }
            .footer-desktop-text13 {
              font-style: normal;
              font-weight: 300;
            }
            .footer-desktop-container18 {
              width: 45%;
            }
            .footer-desktop-text14 {
              font-style: normal;
              font-weight: 300;
            }
            .footer-desktop-container20 {
              width: 45%;
            }
            .footer-desktop-text15 {
              font-style: normal;
              font-weight: 300;
            }
            .footer-desktop-container21 {
              width: 45%;
            }
            .footer-desktop-text16 {
              font-style: normal;
              font-weight: 300;
            }
            .footer-desktop-container23 {
              width: 45%;
            }
            .footer-desktop-text17 {
              font-style: normal;
              text-align: center;
              font-weight: 300;
              line-height: 1.4;
            }
            .footer-desktop-container24 {
              width: 45%;
            }
            .footer-desktop-text18 {
              font-style: normal;
              font-weight: 300;
            }
            .footer-desktop-container26 {
              width: 45%;
            }
            .footer-desktop-text19 {
              font-style: normal;
              font-weight: 300;
            }
            .footer-desktop-container27 {
              width: 45%;
            }
            .footer-desktop-text20 {
              font-style: normal;
              font-weight: 300;
            }
            .footer-desktop-container28 {
              width: 30%;
            }
          }
          @media (max-width: 767px) {
            .footer-desktop-container10 {
              height: auto;
              display: none;
            }
            .footer-desktop-container11 {
              height: 100%;
              flex-direction: column;
            }
            .footer-desktop-container12 {
              width: 100%;
              height: auto;
              align-items: flex-end;
              border-right-width: 1px;
              border-bottom-width: 1px;
              border-top-right-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-left-radius: 0;
            }
            .footer-desktop-container13 {
              width: 100%;
              height: var(--dl-layout-size-medium);
              padding: var(--dl-layout-space-halfunit);
            }
            .footer-desktop-container14 {
              width: 100%;
              height: 30%;
              align-self: center;
              justify-content: center;
            }
            .footer-desktop-ul1 {
              width: 100%;
              align-self: center;
              align-items: center;
            }
            .footer-desktop-li1 {
              align-self: center;
            }
            .footer-desktop-container15 {
              width: 100%;
              height: auto;
              border-top-width: 1px;
              border-left-width: 1px;
              border-right-width: 1px;
              border-bottom-width: 0px;
            }
            .footer-desktop-container28 {
              width: 100%;
              height: auto;
            }
            .footer-desktop-ul2 {
              align-items: center;
            }
          }
          @media (max-width: 400px) {
            .footer-desktop-container13 {
              width: 100%;
              padding: var(--dl-layout-space-halfunit);
            }
            .footer-desktop-container14 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FooterDesktop.defaultProps = {
  text21211: undefined,
  text213: undefined,
  text212: undefined,
  textUrl2: 'https://example.com',
  rootClassName: '',
  text52: undefined,
  text53: undefined,
  text5211: undefined,
  textUrl: 'https://example.com',
  text521: undefined,
  textUrl1: 'https://example.com',
  text2121: undefined,
}

FooterDesktop.propTypes = {
  text21211: PropTypes.element,
  text213: PropTypes.element,
  text212: PropTypes.element,
  textUrl2: PropTypes.string,
  rootClassName: PropTypes.string,
  text52: PropTypes.element,
  text53: PropTypes.element,
  text5211: PropTypes.element,
  textUrl: PropTypes.string,
  text521: PropTypes.element,
  textUrl1: PropTypes.string,
  text2121: PropTypes.element,
}

export default FooterDesktop
