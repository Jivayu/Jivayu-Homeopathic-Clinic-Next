import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const AccordionMobile = (props) => {
  return (
    <>
      <div className={`accordion-mobile-container10 ${props.rootClassName} `}>
        <div data-thq="accordion" className="accordion-mobile-accordion1">
          <details
            data-thq="accordion-trigger"
            className="accordion-mobile-thq-trigger-elm1"
          >
            <summary
              data-thq="accordion-summary"
              className="accordion-mobile-thq-summary-elm1"
            >
              <span className="accordion-mobile-text10">About The Doctor</span>
              <div
                data-thq="accordion-icon"
                className="accordion-mobile-thq-icon-container-elm1"
              >
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                </svg>
              </div>
            </summary>
          </details>
          <div
            data-thq="accordion-content"
            className="accordion-mobile-thq-content-elm1"
          >
            <div className="accordion-mobile-container11">
              <p className="accordion-mobile-text11">
                {props.text1 ?? (
                  <Fragment>
                    <span className="accordion-mobile-text24">
                      <span className="accordion-mobile-text25">
                        Bachelor of Homeopathic Medicine &amp; Surgery
                      </span>
                      <br className="accordion-mobile-text26"></br>
                      <span className="accordion-mobile-text27">
                        Gondia Homeopathic Medical College Hospital, Gondia
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </p>
              <p className="accordion-mobile-text12">
                {props.text11 ?? (
                  <Fragment>
                    <span className="accordion-mobile-text32">
                      <span className="accordion-mobile-text33">
                        Certificate in Clinical Medicine
                      </span>
                      <br className="accordion-mobile-text34"></br>
                      <span className="accordion-mobile-text35">
                        Maharashtra University of Health Sciences, Pune
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </p>
              <p className="accordion-mobile-text13">
                {props.text111 ?? (
                  <Fragment>
                    <span className="accordion-mobile-text38">
                      <span>
                        Registration No:
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="accordion-mobile-text40">66327</span>
                      <br className="accordion-mobile-text41"></br>
                      <span className="accordion-mobile-text42">
                        Maharashtra Council of Homoeopathy, Mumbai
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
        <div data-thq="accordion" className="accordion-mobile-accordion2">
          <details
            data-thq="accordion-trigger"
            className="accordion-mobile-thq-trigger-elm2"
          >
            <summary
              data-thq="accordion-summary"
              className="accordion-mobile-thq-summary-elm2"
            >
              <span className="accordion-mobile-text14">Clinic Timing</span>
              <div
                data-thq="accordion-icon"
                className="accordion-mobile-thq-icon-container-elm2"
              >
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                </svg>
              </div>
            </summary>
          </details>
          <div
            data-thq="accordion-content"
            className="accordion-mobile-thq-content-elm2"
          >
            <div className="accordion-mobile-container12">
              <div className="accordion-mobile-container13">
                <span className="accordion-mobile-text15">Day Session</span>
                <div className="accordion-mobile-container14">
                  <button
                    type="button"
                    className="accordion-mobile-button1 button"
                  >
                    <span className="accordion-mobile-text16">
                      {props.button2132 ?? (
                        <Fragment>
                          <span className="accordion-mobile-text31">
                            Visit Google Profile
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <span className="accordion-mobile-text17">
                    {props.text121132 ?? (
                      <Fragment>
                        <span className="accordion-mobile-text29">
                          12:01 PM To 02:00 PM
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="accordion-mobile-container15">
                <span className="accordion-mobile-text18">Evening Session</span>
                <div className="accordion-mobile-container16">
                  <button
                    type="button"
                    className="accordion-mobile-button2 button"
                  >
                    <span className="accordion-mobile-text19">
                      {props.button21321 ?? (
                        <Fragment>
                          <span className="accordion-mobile-text45">
                            Visit Google Profile
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <span className="accordion-mobile-text20">
                    {props.text1211321 ?? (
                      <Fragment>
                        <span className="accordion-mobile-text30">
                          06:01 PM To 08:00 PM
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="accordion-mobile-container17">
              <a href="tel:9823203912" className="accordion-mobile-link1">
                <div className="accordion-mobile-container18">
                  <button
                    type="button"
                    className="accordion-mobile-button3 button"
                  >
                    <span className="accordion-mobile-text21">
                      {props.button1 ?? (
                        <Fragment>
                          <span className="accordion-mobile-text44">
                            Visit Google Profile
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    className="accordion-mobile-icon14"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z"
                        strokeDasharray="64"
                        strokeDashoffset="64"
                      >
                        <animate
                          dur="0.6s"
                          fill="freeze"
                          values="64;0"
                          attributeName="stroke-dashoffset"
                        ></animate>
                        <animatetransform
                          dur="0.5s"
                          type="rotate"
                          begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s"
                          values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"
                          attributeName="transform"
                        ></animatetransform>
                      </path>
                      <path
                        d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723"
                        opacity="0"
                        strokeDasharray="4"
                        strokeDashoffset="4"
                      >
                        <set
                          id="lineMdPhoneCallLoop0"
                          to="1"
                          begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s"
                          attributeName="opacity"
                        ></set>
                        <animate
                          dur="0.2s"
                          fill="freeze"
                          begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s"
                          values="4;8"
                          attributeName="stroke-dashoffset"
                        ></animate>
                        <animate
                          dur="0.3s"
                          fill="freeze"
                          begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s"
                          values="0;4"
                          attributeName="stroke-dashoffset"
                        ></animate>
                        <set
                          to="0"
                          begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s"
                          attributeName="opacity"
                        ></set>
                      </path>
                      <path
                        d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535"
                        opacity="0"
                        strokeDasharray="10"
                        strokeDashoffset="10"
                      >
                        <set
                          to="1"
                          begin="1s;lineMdPhoneCallLoop0.begin+3s"
                          attributeName="opacity"
                        ></set>
                        <animate
                          dur="0.2s"
                          fill="freeze"
                          begin="1s;lineMdPhoneCallLoop0.begin+3s"
                          values="10;20"
                          attributeName="stroke-dashoffset"
                        ></animate>
                        <animate
                          dur="0.3s"
                          fill="freeze"
                          begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s"
                          values="0;10"
                          attributeName="stroke-dashoffset"
                        ></animate>
                        <set
                          to="0"
                          begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s"
                          attributeName="opacity"
                        ></set>
                      </path>
                    </g>
                  </svg>
                  <span className="accordion-mobile-text22">Call Now !</span>
                </div>
              </a>
            </div>
            <a
              href="https://www.google.com/maps/dir/21.0780707,78.9730515/Jivayu+Homeopathy+Clinic,+Hingna+Rd,+beside+Indian+Auto+Gas+pump,+front+of+Orient+hotel,+Rajiv+Nagar,+Nildoh,+Nagpur,+Maharashtra+440016,+India/@21.0887431,78.9668224,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bd495da23a39ee7:0xb87d61ef285ae141!2m2!1d78.9836471!2d21.0991258?entry=ttu&amp;g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="accordion-mobile-container19">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="accordion-mobile-icon29"
                >
                  <path
                    d="M13.02 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.42-1.43a7.94 7.94 0 0 1-3.9 1.62M4.03 12c0-4.05 3.03-7.41 6.95-7.93V2.05C5.95 2.58 2.03 6.84 2.03 12s3.92 9.42 8.95 9.95v-2.02c-3.92-.52-6.95-3.88-6.95-7.93m15.92-1h2.02c-.2-2.01-1-3.84-2.21-5.32l-1.43 1.43c.86 1.1 1.44 2.43 1.62 3.89m-1.61-6.74a10 10 0 0 0-5.32-2.21v2.02c1.46.18 2.79.76 3.9 1.62zm-.01 12.64l1.43 1.42A9.95 9.95 0 0 0 21.97 13h-2.02a7.94 7.94 0 0 1-1.62 3.9"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M16 11.1C16 8.61 14.1 7 12 7s-4 1.61-4 4.1c0 1.66 1.33 3.63 4 5.9c2.67-2.27 4-4.24 4-5.9m-4 .9a1.071 1.071 0 0 1 0-2.14A1.071 1.071 0 0 1 12 12"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="accordion-mobile-text23">
                  {props.text4 ?? (
                    <Fragment>
                      <span className="accordion-mobile-text37">
                        Rajiv Nagar, Beside Indian Auto Gas pump, Front of
                        Orient hotel, Hingna Road, Nagpur, Maharashtra, 440016
                      </span>
                    </Fragment>
                  )}
                </span>
                <path d="M731.429 530.286v-274.286c0-20-16.571-36.571-36.571-36.571h-274.286c-14.857 0-28 9.143-33.714 22.286-5.714 13.714-2.857 29.714 8 40l82.286 82.286-305.143 305.143c-14.286 14.286-14.286 37.143 0 51.429l58.286 58.286c14.286 14.286 37.143 14.286 51.429 0l305.143-305.143 82.286 82.286c6.857 7.429 16 10.857 25.714 10.857 4.571 0 9.714-1.143 14.286-2.857 13.143-5.714 22.286-18.857 22.286-33.714zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                <path d="M731.429 530.286v-274.286c0-20-16.571-36.571-36.571-36.571h-274.286c-14.857 0-28 9.143-33.714 22.286-5.714 13.714-2.857 29.714 8 40l82.286 82.286-305.143 305.143c-14.286 14.286-14.286 37.143 0 51.429l58.286 58.286c14.286 14.286 37.143 14.286 51.429 0l305.143-305.143 82.286 82.286c6.857 7.429 16 10.857 25.714 10.857 4.571 0 9.714-1.143 14.286-2.857 13.143-5.714 22.286-18.857 22.286-33.714zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </div>
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .accordion-mobile-container10 {
            width: 100%;
            height: auto;
            display: none;
            position: relative;
            transform: scale(0.95);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-mobile-accordion1 {
            gap: 4px;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            justify-content: center;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .accordion-mobile-thq-trigger-elm1 {
            width: 100%;
            cursor: pointer;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: rgba(238, 10, 231, 0.44);
            border-width: 0.6px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: rgba(220, 21, 205, 0.14);
          }
          .accordion-mobile-thq-summary-elm1 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .accordion-mobile-text10 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            width: 100%;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.6;
            letter-spacing: 1.1px;
            text-transform: none;
            text-decoration: none;
          }
          .accordion-mobile-thq-icon-container-elm1 {
            transition: transform 0.3s ease-in-out;
          }
          .accordion-mobile-thq-content-elm1 {
            width: 100%;
          }
          .accordion-mobile-container11 {
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .accordion-mobile-text11 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 12px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 300;
            line-height: 1.6;
            border-color: rgba(220, 21, 205, 0.35);
            border-width: 0.6px;
            margin-bottom: var(--dl-layout-space-halfunit);
            letter-spacing: 1;
            text-transform: none;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .accordion-mobile-text12 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 12px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 300;
            line-height: 1.6;
            border-color: rgba(220, 21, 205, 0.35);
            border-width: 0.6px;
            margin-bottom: var(--dl-layout-space-halfunit);
            letter-spacing: 1;
            text-transform: none;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .accordion-mobile-text13 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 12px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 300;
            line-height: 1.6;
            margin-bottom: var(--dl-layout-space-halfunit);
            letter-spacing: 1;
            text-transform: none;
            text-decoration: none;
          }
          .accordion-mobile-accordion2 {
            gap: 4px;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            justify-content: center;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .accordion-mobile-thq-trigger-elm2 {
            width: 100%;
            cursor: pointer;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: rgba(238, 10, 231, 0.44);
            border-width: 0.6px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: rgba(220, 21, 205, 0.14);
          }
          .accordion-mobile-thq-summary-elm2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .accordion-mobile-text14 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            width: 100%;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.6;
            letter-spacing: 1.1px;
            text-transform: none;
            text-decoration: none;
          }
          .accordion-mobile-thq-icon-container-elm2 {
            transition: transform 0.3s ease-in-out;
          }
          .accordion-mobile-thq-content-elm2 {
            width: 100%;
          }
          .accordion-mobile-container12 {
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .accordion-mobile-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-mobile-text15 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            width: 100%;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.6;
            letter-spacing: 1.1px;
            text-transform: none;
            text-decoration: none;
          }
          .accordion-mobile-container14 {
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
          .accordion-mobile-container14:hover {
            transform: scale(0.8);
            box-shadow: -5px -10px 25px 0px rgba(49, 105, 82, 0.34);
            transition: 0.5s;
            align-items: center;
            border-color: rgba(64, 145, 108, 0.4);
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            background-color: rgba(247, 242, 242, 0.3);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .accordion-mobile-button1 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .accordion-mobile-text16 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .accordion-mobile-text17 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 18px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            font-weight: bold;
            line-height: 1.4;
            letter-spacing: 1.1px;
          }
          .accordion-mobile-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-mobile-text18 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            width: 100%;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 1.6;
            letter-spacing: 1.1px;
            text-transform: none;
            text-decoration: none;
          }
          .accordion-mobile-container16 {
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
          .accordion-mobile-container16:hover {
            transform: scale(0.8);
            box-shadow: -5px -10px 25px 0px rgba(49, 105, 82, 0.34);
            transition: 0.5s;
            align-items: center;
            border-color: rgba(64, 145, 108, 0.4);
            border-radius: var(--dl-layout-radius-radius4);
            justify-content: center;
            background-color: rgba(247, 242, 242, 0.3);
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .accordion-mobile-button2 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .accordion-mobile-text19 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .accordion-mobile-text20 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 18px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            font-weight: bold;
            line-height: 1.4;
            letter-spacing: 1.1px;
          }
          .accordion-mobile-container17 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .accordion-mobile-link1 {
            display: contents;
          }
          .accordion-mobile-container18 {
            flex: 0 0 auto;
            width: auto;
            height: 40px;
            display: flex;
            transform: scale(0.8);
            align-self: center;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(64, 145, 108, 0.1);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: rgba(220, 21, 205, 0.14);
          }
          .accordion-mobile-container18:focus {
            box-shadow: -5px -5px 20px 1px rgba(38, 38, 38, 0.5);
          }
          .accordion-mobile-button3 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .accordion-mobile-text21 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .accordion-mobile-text22 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 14px;
            align-self: center;
            text-align: center;
            font-family: 'PoiretOne-Regular';
            line-height: 1.4;
            letter-spacing: 1.1px;
          }
          .accordion-mobile-container19 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .accordion-mobile-text24 {
            display: inline-block;
          }
          .accordion-mobile-text25 {
            color: var(--dl-color-theme-primary1);
          }
          .accordion-mobile-text27 {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .accordion-mobile-text29 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .accordion-mobile-text30 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .accordion-mobile-text31 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .accordion-mobile-text32 {
            display: inline-block;
          }
          .accordion-mobile-text33 {
            color: var(--dl-color-theme-primary1);
          }
          .accordion-mobile-text35 {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .accordion-mobile-text37 {
            display: inline-block;
          }
          .accordion-mobile-text38 {
            display: inline-block;
          }
          .accordion-mobile-text40 {
            font-weight: 700;
          }
          .accordion-mobile-text42 {
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .accordion-mobile-text44 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .accordion-mobile-text45 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }

          @media (max-width: 991px) {
            .accordion-mobile-container11 {
              border-color: transparent;
            }
          }
          @media (max-width: 767px) {
            .accordion-mobile-container10 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              display: flex;
              align-items: center;
            }
            .accordion-mobile-thq-trigger-elm1 {
              border-color: rgba(14, 58, 47, 0.55);
              backdrop-filter: blur(5px);
              background-color: rgba(247, 242, 242, 0.3);
            }
            .accordion-mobile-text10 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.6;
              letter-spacing: 1.1px;
              text-transform: none;
              text-decoration: none;
            }
            .accordion-mobile-thq-content-elm1 {
              box-shadow: -3px 3px 15px 0px rgba(2, 2, 2, 0.15);
              border-radius: var(--dl-layout-radius-cardradius);
              border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
            }
            .accordion-mobile-container11 {
              gap: var(--dl-layout-space-unit);
              display: flex;
              align-items: flex-start;
              flex-direction: column;
              backdrop-filter: blur(3px);
            }
            .accordion-mobile-text11 {
              width: 100%;
              height: 100%;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 500;
              border-color: rgba(24, 61, 44, 0.35);
              margin-bottom: 0px;
            }
            .accordion-mobile-text12 {
              width: 100%;
              height: 100%;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 500;
              border-color: rgba(24, 61, 44, 0.35);
              margin-bottom: 0px;
            }
            .accordion-mobile-text13 {
              width: 100%;
              height: 100%;
              font-style: normal;
              font-family: Inter;
              font-weight: 500;
              border-color: rgba(24, 61, 44, 0.35);
              margin-bottom: 0px;
              border-bottom-width: 0.6px;
            }
            .accordion-mobile-accordion2 {
              border-bottom-left-radius: var(--dl-layout-radius-radius8);
              border-bottom-right-radius: var(--dl-layout-radius-radius8);
            }
            .accordion-mobile-thq-trigger-elm2 {
              border-color: rgba(14, 58, 47, 0.54);
              backdrop-filter: blur(5px);
              background-color: rgba(247, 242, 242, 0.3);
            }
            .accordion-mobile-text14 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.6;
              letter-spacing: 1.1px;
              text-transform: none;
              text-decoration: none;
            }
            .accordion-mobile-thq-content-elm2 {
              align-self: center;
              box-shadow: -3px 3px 15px 0px rgba(2, 2, 2, 0.15);
              border-radius: var(--dl-layout-radius-radius4);
              border-top-left-radius: var(--dl-layout-radius-cardradius);
              border-top-right-radius: var(--dl-layout-radius-cardradius);
              border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
            }
            .accordion-mobile-container12 {
              gap: var(--dl-layout-space-unit);
              display: flex;
              align-items: flex-start;
              flex-direction: column;
              backdrop-filter: blur(3px);
              justify-content: center;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
            }
            .accordion-mobile-container13 {
              width: 100%;
              height: auto;
              align-items: stretch;
            }
            .accordion-mobile-text15 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.6;
              letter-spacing: 1.1px;
              text-transform: none;
              text-decoration: none;
            }
            .accordion-mobile-container14 {
              width: 100%;
              height: 55px;
              border-color: rgba(220, 21, 205, 0.17);
              backdrop-filter: blur(5px);
              background-color: rgba(220, 21, 205, 0.08);
            }
            .accordion-mobile-text17 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              font-size: 16px;
            }
            .accordion-mobile-container15 {
              width: 100%;
              height: auto;
              align-items: stretch;
            }
            .accordion-mobile-text18 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.6;
              letter-spacing: 1.1px;
              text-transform: none;
              text-decoration: none;
            }
            .accordion-mobile-container16 {
              width: 100%;
              height: 55px;
              border-color: rgba(220, 21, 205, 0.17);
              backdrop-filter: blur(5px);
              background-color: rgba(220, 21, 205, 0.08);
            }
            .accordion-mobile-text20 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              font-size: 16px;
            }
            .accordion-mobile-container17 {
              align-items: center;
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-halfunit);
              backdrop-filter: blur(3px);
            }
            .accordion-mobile-container18 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: 65px;
              border-color: var(--dl-color-theme-primary1);
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: row;
              backdrop-filter: blur(5px);
              justify-content: center;
              background-color: rgba(14, 58, 47, 0.94);
              border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
            }
            .accordion-mobile-icon14 {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
            }
            .accordion-mobile-text22 {
              fill: var(--dl-color-theme-neutral-dark);
              color: #ffffff;
              font-size: 20px;
              font-style: normal;
              font-family: Inter;
              font-weight: 700;
              line-height: 1.4;
              letter-spacing: 1.2px;
            }
            .accordion-mobile-container19 {
              gap: var(--dl-layout-space-halfunit);
              align-items: center;
              border-color: rgba(24, 61, 44, 0.35);
              border-width: 0.5px;
              border-radius: var(--dl-layout-radius-radius4);
              flex-direction: row;
              backdrop-filter: blur(5px);
              justify-content: center;
              background-color: rgba(220, 21, 205, 0.08);
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
              border-top-left-radius: 0;
              border-top-right-radius: 0;
              border-bottom-left-radius: var(--dl-layout-radius-inputradius);
              border-bottom-right-radius: var(--dl-layout-radius-inputradius);
            }
            .accordion-mobile-icon29 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              margin-left: var(--dl-layout-space-unit);
            }
            .accordion-mobile-text23 {
              display: flex;
              font-style: normal;
              margin-top: 4px;
              text-align: left;
              font-family: Inter;
              font-weight: 500;
            }
            .accordion-mobile-text25 {
              color: var(--dl-color-theme-primary1);
            }
            .accordion-mobile-text26 {
              font-size: 10px;
            }
            .accordion-mobile-text27 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .accordion-mobile-text33 {
              color: var(--dl-color-theme-primary1);
            }
            .accordion-mobile-text34 {
              font-size: 10px;
            }
            .accordion-mobile-text35 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .accordion-mobile-text37 {
              color: var(--dl-color-theme-primary1);
              font-size: 12px;
            }
            .accordion-mobile-text40 {
              font-weight: 700;
            }
            .accordion-mobile-text41 {
              font-size: 10px;
            }
            .accordion-mobile-text42 {
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
          }
          @media (max-width: 400px) {
            .accordion-mobile-container10 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
            }
            .accordion-mobile-text10 {
              font-size: 14px;
            }
            .accordion-mobile-thq-content-elm1 {
              display: block;
            }
            .accordion-mobile-text11 {
              font-style: normal;
              font-weight: 400;
            }
            .accordion-mobile-text12 {
              font-style: normal;
              font-weight: 400;
            }
            .accordion-mobile-text13 {
              font-style: normal;
              font-weight: 400;
            }
            .accordion-mobile-text14 {
              line-height: 1.6;
              letter-spacing: 1.1px;
              text-transform: none;
              text-decoration: none;
            }
            .accordion-mobile-container12 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              flex-direction: column;
              border-left-width: 0px;
              border-right-width: 0px;
            }
            .accordion-mobile-container13 {
              height: auto;
              align-items: stretch;
            }
            .accordion-mobile-text15 {
              color: var(--dl-color-theme-primary1);
              width: auto;
              align-self: center;
              line-height: 1.6;
              letter-spacing: 1.1px;
              text-transform: none;
              text-decoration: none;
            }
            .accordion-mobile-container14 {
              width: 100%;
            }
            .accordion-mobile-text17 {
              align-self: stretch;
            }
            .accordion-mobile-container15 {
              width: 100%;
              align-self: center;
              align-items: stretch;
            }
            .accordion-mobile-text18 {
              color: var(--dl-color-theme-primary1);
              width: auto;
              align-self: center;
              line-height: 1.6;
              letter-spacing: 1.1px;
              text-transform: none;
              text-decoration: none;
            }
            .accordion-mobile-container16 {
              width: 100%;
            }
            .accordion-mobile-text20 {
              align-self: stretch;
            }
            .accordion-mobile-container17 {
              align-items: stretch;
            }
            .accordion-mobile-container18 {
              gap: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              justify-content: center;
            }
            .accordion-mobile-text22 {
              font-style: normal;
              font-weight: 600;
            }
            .accordion-mobile-container19 {
              border-color: rgba(24, 61, 44, 0.35);
              border-width: 1px;
              border-top-width: 0.5px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .accordion-mobile-icon29 {
              width: var(--dl-layout-size-small);
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

AccordionMobile.defaultProps = {
  rootClassName: '',
  text1: undefined,
  text121132: undefined,
  text1211321: undefined,
  button2132: undefined,
  text11: undefined,
  text4: undefined,
  text111: undefined,
  button1: undefined,
  button21321: undefined,
}

AccordionMobile.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.element,
  text121132: PropTypes.element,
  text1211321: PropTypes.element,
  button2132: PropTypes.element,
  text11: PropTypes.element,
  text4: PropTypes.element,
  text111: PropTypes.element,
  button1: PropTypes.element,
  button21321: PropTypes.element,
}

export default AccordionMobile
