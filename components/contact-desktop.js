import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import ContactMainInfo from './contact-main-info'
import GoogleProfileRatings from './google-profile-ratings'

const ContactDesktop = (props) => {
  return (
    <>
      <main className={`contact-desktop-container10 ${props.rootClassName} `}>
        <div className="contact-desktop-container11">
          <div className="contact-desktop-container12"></div>
          <div className="contact-desktop-container13">
            <ContactMainInfo
              heading={
                <Fragment>
                  <span className="contact-desktop-text10">
                    Book Your Personalize Homeopathic Consultation Now !
                  </span>
                </Fragment>
              }
              heading1={
                <Fragment>
                  <span className="contact-desktop-text11">9823203912</span>
                </Fragment>
              }
              heading3={
                <Fragment>
                  <span className="contact-desktop-text12">
                    Reach Us Via Google Profile
                  </span>
                </Fragment>
              }
              heading12={
                <Fragment>
                  <span className="contact-desktop-text13">
                    Rajiv Nagar, Beside Indian Auto Gas pump, Front of Orient
                    hotel, Hingna Road, Nagpur, Maharashtra, 440016
                  </span>
                </Fragment>
              }
            ></ContactMainInfo>
          </div>
          <div className="contact-desktop-container14"></div>
        </div>
        <div className="contact-desktop-container15">
          <div className="contact-desktop-container16">
            <div className="contact-desktop-container17">
              <GoogleProfileRatings
                text={
                  <Fragment>
                    <span className="contact-desktop-text14">4.9</span>
                  </Fragment>
                }
                text1={
                  <Fragment>
                    <span className="contact-desktop-text15">
                      Google Rating
                    </span>
                  </Fragment>
                }
                button={
                  <Fragment>
                    <span className="contact-desktop-text16">
                      Visit Google Profile
                    </span>
                  </Fragment>
                }
                text12={
                  <Fragment>
                    <span className="contact-desktop-text17">
                      Google Profile
                    </span>
                  </Fragment>
                }
                text13={
                  <Fragment>
                    <span className="contact-desktop-text18">Verified</span>
                  </Fragment>
                }
                rootClassName="google-profile-ratingsroot-class-name5"
              ></GoogleProfileRatings>
            </div>
            <div className="contact-desktop-container18">
              <div className="contact-desktop-container19">
                <span className="contact-desktop-text19">
                  {props.text ?? (
                    <Fragment>
                      <span className="contact-desktop-text59">Location</span>
                    </Fragment>
                  )}
                </span>
                <span className="contact-desktop-text20">
                  {props.text3 ?? (
                    <Fragment>
                      <span className="contact-desktop-text63">
                        Monday To Saturday
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="contact-desktop-container20">
                  <span className="contact-desktop-text21">
                    {props.text2 ?? (
                      <Fragment>
                        <span className="contact-desktop-text74">
                          <span>Day Session    </span>
                          <span>12:01 PM To 02:00 PM</span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="contact-desktop-text22">
                    Evening Session 6:01 PM To 08:00 PM
                  </span>
                </div>
              </div>
            </div>
            <div className="contact-desktop-container21">
              <div className="contact-desktop-container22">
                <h1 className="contact-desktop-text23">
                  {props.text31 ?? (
                    <Fragment>
                      <span className="contact-desktop-text66">
                        +91 9823203912
                      </span>
                    </Fragment>
                  )}
                </h1>
                <span className="contact-desktop-text24">
                  {props.text32 ?? (
                    <Fragment>
                      <span className="contact-desktop-text78">
                        <span>Please Call</span>
                        <br></br>
                        <span>Before Any Visit To Clinic.</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact-desktop-container23">
              <div className="contact-desktop-container24">
                <span className="contact-desktop-text25">
                  {props.text311 ?? (
                    <Fragment>
                      <span className="contact-desktop-text82">Location</span>
                    </Fragment>
                  )}
                </span>
                <span className="contact-desktop-text26">
                  {props.text321 ?? (
                    <Fragment>
                      <span className="contact-desktop-text65">
                        Get Location Information.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="contact-desktop-container25">
                  <span className="contact-desktop-text27 PoiretOne-Regular">
                    {props.text5 ?? (
                      <Fragment>
                        <span className="contact-desktop-text84">
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
        <div className="contact-desktop-container26">
          <div className="contact-desktop-container27">
            <div className="contact-desktop-container28">
              <div className="contact-desktop-container29">
                <div className="contact-desktop-container30">
                  <div className="contact-desktop-container31"></div>
                  <div className="contact-desktop-container32">
                    <span className="contact-desktop-text28">
                      {props.text ?? (
                        <Fragment>
                          <span className="contact-desktop-text59">
                            Location
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="contact-desktop-text29">
                      {props.text1 ?? (
                        <Fragment>
                          <span className="contact-desktop-text57">
                            Google Rating
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="contact-desktop-container33">
                    <span className="contact-desktop-text30">
                      {props.text13 ?? (
                        <Fragment>
                          <span className="contact-desktop-text68">
                            Verified
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="contact-desktop-container34">
                  <div className="contact-desktop-container35">
                    <span className="contact-desktop-text31">
                      Google Profile
                    </span>
                  </div>
                  <div className="contact-desktop-container36">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="contact-desktop-icon10"
                    >
                      <path
                        d="m16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="contact-desktop-icon12"
                    >
                      <path
                        d="m16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="contact-desktop-icon14"
                    >
                      <path
                        d="m16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="contact-desktop-icon16"
                    >
                      <path
                        d="m16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="contact-desktop-icon18"
                    >
                      <path
                        d="M11.45 11.22L1.28 12.7l7.36 7.17L6.9 30l9.1-4.78V2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="contact-desktop-container37">
                    <button
                      type="button"
                      className="contact-desktop-button1 button"
                    >
                      <span className="contact-desktop-text32">
                        {props.button ?? (
                          <Fragment>
                            <span className="contact-desktop-text85">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="contact-desktop-text33">
                      {props.text12 ?? (
                        <Fragment>
                          <span className="contact-desktop-text61">
                            Google Profile
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-desktop-container38">
              <div className="contact-desktop-container39">
                <div className="contact-desktop-container40">
                  <span className="contact-desktop-text34">Clinic Timing</span>
                </div>
                <div className="contact-desktop-container41">
                  <div className="contact-desktop-container42">
                    <button
                      type="button"
                      className="contact-desktop-button2 button"
                    >
                      <span className="contact-desktop-text35">
                        {props.button21 ?? (
                          <Fragment>
                            <span className="contact-desktop-text73">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="contact-desktop-text36">
                      {props.text1211 ?? (
                        <Fragment>
                          <span className="contact-desktop-text70">
                            12:01 PM To 02:00 PM
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="contact-desktop-container43">
                  <div className="contact-desktop-container44">
                    <button
                      type="button"
                      className="contact-desktop-button3 button"
                    >
                      <span className="contact-desktop-text37">
                        {props.button211 ?? (
                          <Fragment>
                            <span className="contact-desktop-text71">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="contact-desktop-text38">
                      6:01 PM To 08:00 PM
                    </span>
                  </div>
                </div>
              </div>
              <div className="contact-desktop-container45">
                <div className="contact-desktop-container46">
                  <span className="contact-desktop-text39">Clinic Timing</span>
                </div>
                <div className="contact-desktop-container47">
                  <div className="contact-desktop-container48">
                    <button
                      type="button"
                      className="contact-desktop-button4 button"
                    >
                      <span className="contact-desktop-text40">
                        {props.button2132 ?? (
                          <Fragment>
                            <span className="contact-desktop-text77">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="contact-desktop-text41">
                      12:01 PM To 02:00 PM
                    </span>
                  </div>
                </div>
                <div className="contact-desktop-container49">
                  <div className="contact-desktop-container50">
                    <button
                      type="button"
                      className="contact-desktop-button5 button"
                    >
                      <span className="contact-desktop-text42">
                        {props.button21321 ?? (
                          <Fragment>
                            <span className="contact-desktop-text67">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="contact-desktop-text43">
                      06:01 PM To 08:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-desktop-container51">
              <div className="contact-desktop-container52">
                <div className="contact-desktop-container53">
                  <span className="contact-desktop-text44">Enquiry</span>
                </div>
                <div className="contact-desktop-container54">
                  <div className="contact-desktop-container55">
                    <button
                      type="button"
                      className="contact-desktop-button6 button"
                    >
                      <span className="contact-desktop-text45">
                        {props.button213 ?? (
                          <Fragment>
                            <span className="contact-desktop-text69">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="contact-desktop-text46">
                      +91 9823203912
                    </span>
                  </div>
                </div>
                <div className="contact-desktop-container56">
                  <div className="contact-desktop-container57">
                    <button
                      type="button"
                      className="contact-desktop-button7 button"
                    >
                      <span className="contact-desktop-text47">
                        {props.button2133 ?? (
                          <Fragment>
                            <span className="contact-desktop-text60">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="contact-desktop-text48">
                      jivayuservices@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-desktop-container58">
              <div className="contact-desktop-container59">
                <div className="contact-desktop-container60">
                  <span className="contact-desktop-text49">Location</span>
                </div>
                <div className="contact-desktop-container61">
                  <div className="contact-desktop-container62">
                    <button
                      type="button"
                      className="contact-desktop-button8 button"
                    >
                      <span className="contact-desktop-text50">
                        {props.button2134 ?? (
                          <Fragment>
                            <span className="contact-desktop-text72">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="contact-desktop-text51">
                      Clinic Location
                    </span>
                  </div>
                </div>
                <div className="contact-desktop-container63">
                  <div className="contact-desktop-container64">
                    <button
                      type="button"
                      className="contact-desktop-button9 button"
                    >
                      <span className="contact-desktop-text52">
                        {props.button2112 ?? (
                          <Fragment>
                            <span className="contact-desktop-text83">
                              Visit Google Profile
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                    <span className="contact-desktop-text53">
                      Goolge Business Profile
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-desktop-container65">
          <span className="contact-desktop-text54">
            {props.text8 ?? (
              <Fragment>
                <span className="contact-desktop-text58">
                  Please Call Before Clinic Visit
                </span>
              </Fragment>
            )}
          </span>
          <span className="contact-desktop-text55">
            {props.text81 ?? (
              <Fragment>
                <span className="contact-desktop-text62">
                  कृपया क्लिनिकला भेट देण्याआधी कॉल करा
                </span>
              </Fragment>
            )}
          </span>
          <span className="contact-desktop-text56">
            {props.text811 ?? (
              <Fragment>
                <span className="contact-desktop-text64">
                  क्लिनिक विजिट से पहले कृपया कॉल करें
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </main>
      <style jsx>
        {`
          .contact-desktop-container10 {
            width: 100vw;
            height: auto;
            display: flex;
            transform: scale(0.95);
            box-shadow: -5px -15px 30px 0px rgba(51, 101, 77, 0.44);
            align-items: stretch;
            padding-top: var(--dl-layout-space-twounits);
            aspect-ratio: auto;
            border-color: rgba(220, 21, 205, 0.48);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-buttonradius);
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/images/jivayubackgroundimage-1500w.webp');
            background-repeat: no-repeat;
            background-position: center;
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
          }
          .contact-desktop-container11 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .contact-desktop-container12 {
            flex: 0 0 auto;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .contact-desktop-container13 {
            gap: 2px;
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-text10 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
            letter-spacing: 1.2px;
          }
          .contact-desktop-text11 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
            letter-spacing: 1.2px;
          }
          .contact-desktop-text12 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
            letter-spacing: 1.2px;
          }
          .contact-desktop-text13 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
            letter-spacing: 1.2px;
          }
          .contact-desktop-container14 {
            flex: 0 0 auto;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-end;
          }
          .contact-desktop-container15 {
            flex: 0 0 auto;
            height: 22%;
            display: none;
            padding: var(--dl-layout-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .contact-desktop-container16 {
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
          .contact-desktop-container17 {
            flex: 0 0 auto;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            justify-content: flex-end;
          }
          .contact-desktop-text14 {
            display: inline-block;
            font-weight: 700;
          }
          .contact-desktop-text15 {
            display: inline-block;
            font-style: normal;
          }
          .contact-desktop-text16 {
            display: inline-block;
            font-weight: 700;
          }
          .contact-desktop-text17 {
            display: inline-block;
            font-weight: 300;
            line-height: 1.6;
          }
          .contact-desktop-text18 {
            display: inline-block;
            line-height: 1.4;
          }
          .contact-desktop-container18 {
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
          .contact-desktop-container19 {
            gap: 4px;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-text19 {
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
          .contact-desktop-text20 {
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
          .contact-desktop-container20 {
            display: flex;
            margin-top: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-text21 {
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
          .contact-desktop-text22 {
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
          .contact-desktop-container21 {
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
          .contact-desktop-container22 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .contact-desktop-text23 {
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
          .contact-desktop-text24 {
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
          .contact-desktop-container23 {
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
          .contact-desktop-container24 {
            flex: 1;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .contact-desktop-text25 {
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
          .contact-desktop-text26 {
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
          .contact-desktop-container25 {
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
          .contact-desktop-text27 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            align-self: center;
            font-style: normal;
          }
          .contact-desktop-container26 {
            flex: 0 0 auto;
            display: block;
            align-self: stretch;
            margin-top: var(--dl-layout-space-unit);
          }
          .contact-desktop-container27 {
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
          .contact-desktop-container28 {
            flex: 0 0 auto;
            width: 300px;
            height: 100%;
            display: flex;
            transform: scaleX(1) scaleY(1) scaleZ(1);
            align-items: flex-start;
            justify-content: flex-end;
          }
          .contact-desktop-container29 {
            gap: 2px;
            width: 100%;
            height: 100%;
            display: flex;
            box-shadow: -10px -15px 25px 0px rgba(43, 97, 70, 0.22);
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: rgba(220, 21, 205, 0.4);
            border-style: groove;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: flex-end;
            background-color: rgba(255, 255, 255, 0.4);
            border-top-width: 0.5px;
            border-left-width: 1px;
            border-right-width: 0px;
            border-bottom-width: 0.5px;
            border-top-left-radius: 50px;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .contact-desktop-container30 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            transform: scale(0.95);
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .contact-desktop-container31 {
            flex: 0 0 auto;
            width: 100%;
            height: 22px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: contain;
            justify-content: center;
            background-image: url('https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA');
            background-repeat: no-repeat;
            background-position: center;
          }
          .contact-desktop-container32 {
            flex: 0 0 auto;
            width: 100%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-text28 {
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
          .contact-desktop-text29 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 12px;
            align-self: center;
            text-align: center;
            font-family: 'PoiretOne-Regular';
            line-height: 2;
            letter-spacing: 1.1px;
          }
          .contact-desktop-container33 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-text30 {
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
          .contact-desktop-container34 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            padding-left: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .contact-desktop-container35 {
            flex: 0 0 auto;
            width: auto;
            height: 30px;
            display: flex;
            align-self: center;
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: flex-end;
          }
          .contact-desktop-text31 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.8;
            letter-spacing: 1.2px;
            text-transform: none;
            text-decoration: none;
          }
          .contact-desktop-container36 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-self: center;
            box-shadow: -10px -10px 25px 0px rgba(68, 138, 114, 0.41);
            align-items: center;
            border-color: var(--dl-color-theme-accent1);
            border-style: double;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: row;
            justify-content: center;
            background-color: rgba(232, 241, 237, 0.88);
            border-right-width: 0px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .contact-desktop-icon10 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffcf00;
            height: 24px;
            margin-left: var(--dl-layout-space-halfunit);
          }
          .contact-desktop-icon12 {
            fill: #ffcf00;
            color: #ffcf00;
            height: 24px;
          }
          .contact-desktop-icon14 {
            fill: #ffcf00;
            color: #ffcf00;
            height: 24px;
          }
          .contact-desktop-icon16 {
            fill: #ffcf00;
            color: #ffcf00;
            height: 24px;
          }
          .contact-desktop-icon18 {
            fill: #ffcf00;
            color: #ffcf00;
            height: 24px;
          }
          .contact-desktop-container37 {
            flex: 0 0 auto;
            width: auto;
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
          .contact-desktop-container37:hover {
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
            border-bottom-left-radius: var(--dl-layout-radius-radius4);
            border-bottom-right-radius: var(--dl-layout-radius-radius4);
          }
          .contact-desktop-button1 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .contact-desktop-text32 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .contact-desktop-text33 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 14px;
            align-self: center;
            text-align: center;
            font-family: 'PoiretOne-Regular';
            line-height: 1.4;
            letter-spacing: 1.1px;
          }
          .contact-desktop-container38 {
            flex: 0 0 auto;
            width: 300px;
            height: 100%;
            display: flex;
            transform: scaleX(1) scaleY(1) scaleZ(1);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .contact-desktop-container39 {
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
          .contact-desktop-container40 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            transform: scale(0.95);
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-text34 {
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
          .contact-desktop-container41 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-container42 {
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
          .contact-desktop-container42:hover {
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
          .contact-desktop-button2 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .contact-desktop-text35 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .contact-desktop-text36 {
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
          .contact-desktop-container43 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-container44 {
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
          .contact-desktop-container44:hover {
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
          .contact-desktop-button3 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .contact-desktop-text37 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .contact-desktop-text38 {
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
          .contact-desktop-container45 {
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
          .contact-desktop-container46 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            transform: scale(0.95);
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-text39 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 18px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.2;
          }
          .contact-desktop-container47 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-container48 {
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
          .contact-desktop-container48:hover {
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
          .contact-desktop-button4 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .contact-desktop-text40 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .contact-desktop-text41 {
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
          .contact-desktop-container49 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-container50 {
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
          .contact-desktop-container50:hover {
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
          .contact-desktop-button5 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .contact-desktop-text42 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .contact-desktop-text43 {
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
          .contact-desktop-container51 {
            flex: 0 0 auto;
            width: 300px;
            height: 100%;
            display: flex;
            transform: scaleX(1) scaleY(1) scaleZ(1);
            align-items: flex-start;
            justify-content: center;
          }
          .contact-desktop-container52 {
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
          .contact-desktop-container53 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            transform: scale(0.95);
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-text44 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 18px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.2;
          }
          .contact-desktop-container54 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-container55 {
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
          .contact-desktop-container55:hover {
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
          .contact-desktop-button6 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .contact-desktop-text45 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .contact-desktop-text46 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 16px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            line-height: 2;
            letter-spacing: 1.1px;
          }
          .contact-desktop-container56 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-container57 {
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
          .contact-desktop-container57:hover {
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
          .contact-desktop-button7 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .contact-desktop-text47 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .contact-desktop-text48 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 16px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            line-height: 2;
            letter-spacing: 1.1px;
          }
          .contact-desktop-container58 {
            flex: 0 0 auto;
            width: 300px;
            height: 100%;
            display: none;
            transform: scaleX(1) scaleY(1) scaleZ(1);
            align-items: flex-start;
            justify-content: center;
          }
          .contact-desktop-container59 {
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
          .contact-desktop-container60 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            transform: scale(0.95);
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-text49 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 18px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.2;
          }
          .contact-desktop-container61 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-container62 {
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
          .contact-desktop-container62:hover {
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
          .contact-desktop-button8 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .contact-desktop-text50 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .contact-desktop-text51 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 16px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            line-height: 2;
            letter-spacing: 1.1px;
          }
          .contact-desktop-container63 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-desktop-container64 {
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
          .contact-desktop-container64:hover {
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
          .contact-desktop-button9 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .contact-desktop-text52 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .contact-desktop-text53 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 16px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            line-height: 2;
            letter-spacing: 1.1px;
          }
          .contact-desktop-container65 {
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
          .contact-desktop-text54 {
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
          .contact-desktop-text55 {
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
          .contact-desktop-text56 {
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
          .contact-desktop-text57 {
            display: inline-block;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 300;
          }
          .contact-desktop-text58 {
            display: inline-block;
          }
          .contact-desktop-text59 {
            display: inline-block;
            line-height: 1.8;
          }
          .contact-desktop-text60 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contact-desktop-text61 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .contact-desktop-text62 {
            display: inline-block;
          }
          .contact-desktop-text63 {
            display: inline-block;
            line-height: 1.8;
          }
          .contact-desktop-text64 {
            display: inline-block;
            font-family: 'Inter';
          }
          .contact-desktop-text65 {
            display: inline-block;
            line-height: 1.8;
          }
          .contact-desktop-text66 {
            display: inline-block;
            line-height: 1.8;
          }
          .contact-desktop-text67 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contact-desktop-text68 {
            display: inline-block;
            line-height: 1.4;
          }
          .contact-desktop-text69 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contact-desktop-text70 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .contact-desktop-text71 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contact-desktop-text72 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contact-desktop-text73 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contact-desktop-text74 {
            display: inline-block;
            font-size: 14px;
            font-weight: 700;
          }
          .contact-desktop-text77 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contact-desktop-text78 {
            display: inline-block;
            font-size: 14px;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.8;
            letter-spacing: 1.2px;
          }
          .contact-desktop-text82 {
            display: inline-block;
            line-height: 1.8;
          }
          .contact-desktop-text83 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contact-desktop-text84 {
            display: inline-block;
            line-height: 1.8;
          }
          .contact-desktop-text85 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contact-desktoproot-class-name {
            position: static;
            margin-top: var(--dl-layout-space-halfunit);
          }
          .contact-desktoproot-class-name1 {
            position: static;
            align-self: center;
            margin-top: var(--dl-layout-space-threeunits);
          }
          .contact-desktoproot-class-name2 {
            position: relative;
            margin-top: var(--dl-layout-space-halfunit);
          }
          @media (max-width: 1200px) {
            .contact-desktop-container11 {
              justify-content: space-between;
            }
            .contact-desktop-container12 {
              width: 5%;
            }
            .contact-desktop-container13 {
              width: 90%;
            }
            .contact-desktop-container14 {
              width: 5%;
            }
            .contact-desktop-container26 {
              display: flex;
              align-self: stretch;
              justify-content: center;
            }
            .contact-desktop-container27 {
              width: auto;
              transform: scaleX(0.9) scaleY(0.9) scaleZ(0.9);
            }
          }
          @media (max-width: 991px) {
            .contact-desktop-container10 {
              box-shadow: 0px -15px 30px 0px rgba(51, 101, 77, 0.44);
              justify-content: center;
            }
            .contact-desktop-container12 {
              width: 2.5%;
              align-items: center;
            }
            .contact-desktop-container13 {
              width: 95%;
            }
            .contact-desktop-container14 {
              width: 2.5%;
              height: auto;
              align-self: stretch;
              align-items: stretch;
            }
            .contact-desktop-container18 {
              width: 33%;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .contact-desktop-container19 {
              width: auto;
              align-self: center;
            }
            .contact-desktop-text19 {
              font-size: 1.5em;
              margin-bottom: 0px;
            }
            .contact-desktop-text20 {
              font-size: 12px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .contact-desktop-container21 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .contact-desktop-container22 {
              justify-content: flex-start;
            }
            .contact-desktop-text23 {
              font-size: 1.5em;
              text-align: center;
            }
            .contact-desktop-text24 {
              font-size: 12px;
              margin-top: 4px;
              text-align: center;
            }
            .contact-desktop-text25 {
              font-size: 1.5em;
            }
            .contact-desktop-container25 {
              width: 100%;
            }
            .contact-desktop-container26 {
              width: 100%;
              height: auto;
              display: flex;
              align-self: stretch;
              align-items: center;
              justify-content: center;
            }
            .contact-desktop-container27 {
              height: auto;
              display: flex;
              transform: scaleX(0.85) scaleY(0.85) scaleZ(0.85);
              align-self: center;
              align-items: stretch;
              justify-content: center;
            }
            .contact-desktop-container28 {
              width: 285px;
              height: auto;
              display: block;
              align-self: stretch;
              justify-items: center;
            }
            .contact-desktop-container29 {
              width: auto;
              height: 100%;
              align-items: center;
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-halfunit);
              justify-content: flex-end;
            }
            .contact-desktop-container30 {
              transform: scale(0.9);
            }
            .contact-desktop-text28 {
              font-size: 25px;
            }
            .contact-desktop-container34 {
              gap: 2px;
              align-self: center;
            }
            .contact-desktop-container35 {
              justify-content: center;
            }
            .contact-desktop-text31 {
              font-style: normal;
              font-weight: 400;
            }
            .contact-desktop-container36 {
              width: 90%;
              align-self: flex-end;
              justify-content: flex-end;
            }
            .contact-desktop-container37 {
              align-items: stretch;
            }
            .contact-desktop-container38 {
              width: 285px;
              height: auto;
              display: block;
              align-self: stretch;
              justify-items: center;
            }
            .contact-desktop-container39 {
              width: auto;
              height: 100%;
              opacity: 1;
              padding: var(--dl-layout-space-halfunit);
              align-items: center;
              justify-content: flex-end;
            }
            .contact-desktop-container40 {
              transform: scale(0.9);
            }
            .contact-desktop-text34 {
              font-size: 25px;
            }
            .contact-desktop-container45 {
              height: 100%;
              padding: var(--dl-layout-space-halfunit);
              align-items: center;
              justify-content: flex-end;
            }
            .contact-desktop-container46 {
              transform: scale(0.9);
            }
            .contact-desktop-text41 {
              font-size: 14px;
            }
            .contact-desktop-text43 {
              font-size: 14px;
            }
            .contact-desktop-container51 {
              width: 285px;
              height: auto;
              display: block;
              align-self: stretch;
              justify-items: center;
            }
            .contact-desktop-container52 {
              height: 100%;
              padding: var(--dl-layout-space-halfunit);
              align-items: center;
              justify-content: flex-end;
            }
            .contact-desktop-container53 {
              transform: scale(0.9);
            }
            .contact-desktop-text46 {
              font-size: 14px;
            }
            .contact-desktop-text48 {
              font-size: 14px;
            }
            .contact-desktop-container58 {
              width: 285px;
              height: auto;
              align-self: stretch;
              justify-items: center;
            }
            .contact-desktop-container59 {
              height: 100%;
              padding: var(--dl-layout-space-halfunit);
              align-items: center;
              justify-content: flex-end;
              border-top-right-radius: 50px;
              border-bottom-right-radius: 50px;
            }
            .contact-desktop-container60 {
              transform: scale(0.9);
            }
            .contact-desktop-text51 {
              font-size: 14px;
            }
            .contact-desktop-text53 {
              font-size: 14px;
            }
            .contact-desktop-text74 {
              font-size: 12px;
            }
            .contact-desktop-text78 {
              font-family: PoiretOne-Regular;
            }
          }
          @media (max-width: 767px) {
            .contact-desktop-container10 {
              left: 0px;
              right: 0px;
              margin: auto;
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .contact-desktop-container11 {
              height: 100%;
              justify-content: center;
            }
            .contact-desktop-container12 {
              display: none;
            }
            .contact-desktop-container14 {
              display: none;
            }
            .contact-desktop-container26 {
              display: none;
            }
            .contact-desktop-container27 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              transform: scaleX(1) scaleY(1) scaleZ(1);
            }
            .contact-desktop-container28 {
              display: none;
            }
            .contact-desktop-container31 {
              background-image: url('https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA');
            }
            .contact-desktop-container38 {
              width: 100%;
            }
            .contact-desktop-container51 {
              display: none;
            }
            .contact-desktop-container58 {
              width: 100%;
            }
            .contact-desktop-container65 {
              display: none;
            }
            .contact-desktoproot-class-name {
              position: static;
            }
          }
          @media (max-width: 400px) {
            .contact-desktop-container10 {
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

ContactDesktop.defaultProps = {
  text1: undefined,
  text8: undefined,
  text: undefined,
  button2133: undefined,
  text12: undefined,
  text81: undefined,
  text3: undefined,
  text811: undefined,
  text321: undefined,
  rootClassName1: '',
  rootClassName12: '',
  text31: undefined,
  button21321: undefined,
  text13: undefined,
  button213: undefined,
  text1211: undefined,
  button211: undefined,
  button2134: undefined,
  button21: undefined,
  rootClassName: '',
  text2: undefined,
  button2132: undefined,
  text32: undefined,
  text311: undefined,
  button2112: undefined,
  rootClassName2: '',
  text5: undefined,
  button: undefined,
}

ContactDesktop.propTypes = {
  text1: PropTypes.element,
  text8: PropTypes.element,
  text: PropTypes.element,
  button2133: PropTypes.element,
  text12: PropTypes.element,
  text81: PropTypes.element,
  text3: PropTypes.element,
  text811: PropTypes.element,
  text321: PropTypes.element,
  rootClassName1: PropTypes.string,
  rootClassName12: PropTypes.string,
  text31: PropTypes.element,
  button21321: PropTypes.element,
  text13: PropTypes.element,
  button213: PropTypes.element,
  text1211: PropTypes.element,
  button211: PropTypes.element,
  button2134: PropTypes.element,
  button21: PropTypes.element,
  rootClassName: PropTypes.string,
  text2: PropTypes.element,
  button2132: PropTypes.element,
  text32: PropTypes.element,
  text311: PropTypes.element,
  button2112: PropTypes.element,
  rootClassName2: PropTypes.string,
  text5: PropTypes.element,
  button: PropTypes.element,
}

export default ContactDesktop
