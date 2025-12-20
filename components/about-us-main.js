import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Slider from './slider'
import DoctorProfilePic from './doctor-profile-pic'
import AboutDoctorAccordion from './about-doctor-accordion'
import GoogleProfileRatings from './google-profile-ratings'

const AboutUsMain = (props) => {
  return (
    <>
      <main
        className={`about-us-main-thq-about-us-main-elm ${props.rootClassName} `}
      >
        <div className="about-us-main-container10">
          <div className="about-us-main-container11"></div>
          <div className="about-us-main-container12">
            <div className="about-us-main-container13">
              <div className="about-us-main-container14">
                <Slider rootClassName="sliderroot-class-name9"></Slider>
              </div>
              <div className="about-us-main-container15">
                <div className="about-us-main-container16">
                  <DoctorProfilePic
                    heading={
                      <Fragment>
                        <span className="about-us-main-text10">
                          Dr. Priyanka Vishwakarma
                        </span>
                      </Fragment>
                    }
                    heading1={
                      <Fragment>
                        <span className="about-us-main-text11">
                          Jivayu Homeopathic Clinic
                        </span>
                      </Fragment>
                    }
                    heading11={
                      <Fragment>
                        <span className="about-us-main-text12">
                          Bachelor of Homeopathic Medicine &amp; Surgery
                        </span>
                      </Fragment>
                    }
                    heading111={
                      <Fragment>
                        <span className="about-us-main-text13">
                          Gondia Homeopathic Medical College Hospital, Gondia
                        </span>
                      </Fragment>
                    }
                    heading113={
                      <Fragment>
                        <span className="about-us-main-text14">
                          Maharashtra Council of Homoeopathy, Mumbai Reg : 66327
                        </span>
                      </Fragment>
                    }
                    heading1112={
                      <Fragment>
                        <span className="about-us-main-text15">
                          www.jivayu.in
                        </span>
                      </Fragment>
                    }
                    rootClassName="doctor-profile-picroot-class-name1"
                  ></DoctorProfilePic>
                </div>
                <div className="about-us-main-container17">
                  <AboutDoctorAccordion rootClassName="about-doctor-accordionroot-class-name3"></AboutDoctorAccordion>
                </div>
              </div>
              <div className="about-us-main-container18">
                <h1 className="about-us-main-text16">
                  {props.heading ?? (
                    <Fragment>
                      <span className="about-us-main-text53">
                        Dr. Priyanka Nagpure is a seasoned homeopathic physician
                        with 8 years of experience in providing compassionate
                        and effective care. She completed her Bachelor of
                        Homeopathic Medicine and Surgery (BHMS) degree in 2017
                        from Maharashtra University of Health Sciences, Nashik,
                        and College of Gondia Homeopathic Medical College
                        Hospital.
                      </span>
                    </Fragment>
                  )}
                </h1>
              </div>
              <div className="about-us-main-container19">
                <h1 className="about-us-main-text17">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="about-us-main-text40">
                        &quot;I successfully completed my Bachelor of
                        Homeopathic Medicine and Surgery (BHMS) degree from
                        &quot;Gondia Homeopathic Medical College Hospital&quot;
                        in 2017.&quot; &quot;Throughout my undergraduate
                        studies, I consistently achieved high academic standing,
                        culminating in a 2nd rank in my graduating class.&quot;
                        &quot;My strong academic performance was a result of my
                        dedication, hard work, and passion for homeopathic
                        medicine.&quot;
                      </span>
                    </Fragment>
                  )}
                </h1>
              </div>
            </div>
          </div>
          <div className="about-us-main-container20"></div>
        </div>
        <div className="about-us-main-container21">
          <div className="about-us-main-container22">
            <div className="about-us-main-container23">
              <GoogleProfileRatings
                text={
                  <Fragment>
                    <span className="about-us-main-text18">4.9</span>
                  </Fragment>
                }
                text1={
                  <Fragment>
                    <span className="about-us-main-text19">Google Rating</span>
                  </Fragment>
                }
                button={
                  <Fragment>
                    <span className="about-us-main-text20">
                      Visit Google Profile
                    </span>
                  </Fragment>
                }
                text12={
                  <Fragment>
                    <span className="about-us-main-text21">Google Profile</span>
                  </Fragment>
                }
                text13={
                  <Fragment>
                    <span className="about-us-main-text22">Verified</span>
                  </Fragment>
                }
                rootClassName="google-profile-ratingsroot-class-name6"
              ></GoogleProfileRatings>
            </div>
            <div className="about-us-main-container24">
              <div className="about-us-main-container25">
                <span className="about-us-main-text23">
                  {props.text3 ?? (
                    <Fragment>
                      <span className="about-us-main-text47">Location</span>
                    </Fragment>
                  )}
                </span>
                <span className="about-us-main-text24">
                  {props.text4 ?? (
                    <Fragment>
                      <span className="about-us-main-text49">
                        Monday To Saturday
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="about-us-main-container26">
                  <span className="about-us-main-text25">
                    {props.text8 ?? (
                      <Fragment>
                        <span className="about-us-main-text42">
                          <span>Day Session    </span>
                          <span>12:01 PM To 02:00 PM</span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="about-us-main-text26">
                    {props.text9 ?? (
                      <Fragment>
                        <span className="about-us-main-text48">
                          Evening Session 6:01 PM To 08:00 PM
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="about-us-main-container27">
              <div className="about-us-main-container28">
                <h1 className="about-us-main-text27">
                  {props.heading2 ?? (
                    <Fragment>
                      <span className="about-us-main-text45">
                        +91 9823203912
                      </span>
                    </Fragment>
                  )}
                </h1>
                <span className="about-us-main-text28">
                  {props.text5 ?? (
                    <Fragment>
                      <span className="about-us-main-text35">
                        <span>Please Call</span>
                        <br></br>
                        <span>Before Any Visit To Clinic.</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="about-us-main-container29">
              <div className="about-us-main-container30">
                <span className="about-us-main-text29">
                  {props.text6 ?? (
                    <Fragment>
                      <span className="about-us-main-text46">Location</span>
                    </Fragment>
                  )}
                </span>
                <span className="about-us-main-text30">
                  {props.text7 ?? (
                    <Fragment>
                      <span className="about-us-main-text51">
                        Get Location Information.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="about-us-main-container31">
                  <span className="about-us-main-text31 PoiretOne-Regular">
                    {props.text10 ?? (
                      <Fragment>
                        <span className="about-us-main-text41">
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
        <div className="about-us-main-container32">
          <span className="about-us-main-text32">
            {props.text ?? (
              <Fragment>
                <span className="about-us-main-text52">
                  Please Call Before Clinic Visit
                </span>
              </Fragment>
            )}
          </span>
          <span className="about-us-main-text33">
            {props.text1 ?? (
              <Fragment>
                <span className="about-us-main-text39">
                  कृपया क्लिनिकला भेट देण्याआधी कॉल करा
                </span>
              </Fragment>
            )}
          </span>
          <span className="about-us-main-text34">
            {props.text2 ?? (
              <Fragment>
                <span className="about-us-main-text50">
                  क्लिनिक विजिट से पहले कृपया कॉल करें
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </main>
      <style jsx>
        {`
          .about-us-main-thq-about-us-main-elm {
            width: 100vw;
            height: 800px;
            display: flex;
            position: relative;
            transform: scale(0.95);
            box-shadow: -5px -15px 30px 0px rgba(51, 101, 77, 0.44);
            align-items: stretch;
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
          .about-us-main-container10 {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .about-us-main-container11 {
            flex: 0 0 auto;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-main-container12 {
            gap: 2px;
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .about-us-main-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: stretch;
            padding-top: var(--dl-layout-space-unit);
            border-color: rgba(238, 10, 231, 0.52);
            border-width: 0.5px;
            border-radius: var(--dl-layout-radius-buttonradius);
            flex-direction: column;
            backdrop-filter: blur(10px);
            justify-content: space-between;
          }
          .about-us-main-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: 10%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .about-us-main-container15 {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-main-container16 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-us-main-text10 {
            display: inline-block;
          }
          .about-us-main-text11 {
            display: inline-block;
          }
          .about-us-main-text12 {
            display: inline-block;
          }
          .about-us-main-text13 {
            display: inline-block;
          }
          .about-us-main-text14 {
            display: inline-block;
          }
          .about-us-main-text15 {
            display: inline-block;
          }
          .about-us-main-container17 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-us-main-container18 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: center;
            margin-top: var(--dl-layout-space-halfunit);
            align-items: center;
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: row;
            backdrop-filter: blur(5px);
            justify-content: center;
            background-color: rgba(238, 10, 231, 0.06);
          }
          .about-us-main-text16 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 100%;
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: 'Inter';
            font-weight: 500;
            line-height: 1.4;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            letter-spacing: 1px;
            padding-bottom: var(--dl-layout-space-halfunit);
            backdrop-filter: blur(5px);
          }
          .about-us-main-container19 {
            height: auto;
            display: flex;
            align-self: stretch;
            border-radius: var(--dl-layout-radius-buttonradius);
            flex-direction: row;
            backdrop-filter: blur(5px);
            justify-content: center;
            background-color: rgba(238, 10, 231, 0.06);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          .about-us-main-text17 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            width: 100%;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-family: 'Inter';
            font-weight: 500;
            line-height: 1.4;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            letter-spacing: 1px;
            padding-bottom: var(--dl-layout-space-halfunit);
            backdrop-filter: blur(5px);
          }
          .about-us-main-container20 {
            flex: 0 0 auto;
            width: 20%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-end;
          }
          .about-us-main-container21 {
            flex: 0 0 auto;
            height: 22%;
            display: none;
            padding: var(--dl-layout-space-halfunit);
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .about-us-main-container22 {
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
          .about-us-main-container23 {
            flex: 0 0 auto;
            height: 100%;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            justify-content: flex-end;
          }
          .about-us-main-text18 {
            display: inline-block;
            font-weight: 700;
          }
          .about-us-main-text19 {
            display: inline-block;
            font-style: normal;
          }
          .about-us-main-text20 {
            display: inline-block;
            font-weight: 700;
          }
          .about-us-main-text21 {
            display: inline-block;
            font-weight: 700;
          }
          .about-us-main-text22 {
            display: inline-block;
            line-height: 1.4;
          }
          .about-us-main-container24 {
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
          .about-us-main-container25 {
            gap: 4px;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-main-text23 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 2em;
            align-self: center;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.8;
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            letter-spacing: 1;
            text-transform: none;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .about-us-main-text24 {
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
            line-height: 1.8;
            letter-spacing: 1;
            text-transform: none;
            text-decoration: none;
          }
          .about-us-main-container26 {
            display: flex;
            margin-top: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-main-text25 {
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
          .about-us-main-text26 {
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
          .about-us-main-container27 {
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
          .about-us-main-container28 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-main-text27 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 2em;
            font-style: normal;
            text-align: center;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.8;
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            letter-spacing: 1.5;
            text-transform: none;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .about-us-main-text28 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.8;
            letter-spacing: 1.2px;
            text-transform: none;
            text-decoration: none;
          }
          .about-us-main-container29 {
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
          .about-us-main-container30 {
            flex: 1;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-main-text29 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 2em;
            align-self: center;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.8;
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
          .about-us-main-text30 {
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
          .about-us-main-container31 {
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
          .about-us-main-text31 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            align-self: center;
            font-style: normal;
            line-height: 1.8;
          }
          .about-us-main-container32 {
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
          .about-us-main-text32 {
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
          .about-us-main-text33 {
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
          .about-us-main-text34 {
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
          .about-us-main-text35 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: inline-block;
            font-size: 14px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.8;
            letter-spacing: 1.2px;
            text-transform: none;
            text-decoration: none;
          }
          .about-us-main-text39 {
            display: inline-block;
          }
          .about-us-main-text40 {
            display: inline-block;
          }
          .about-us-main-text41 {
            display: inline-block;
          }
          .about-us-main-text42 {
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
          .about-us-main-text45 {
            display: inline-block;
          }
          .about-us-main-text46 {
            display: inline-block;
          }
          .about-us-main-text47 {
            display: inline-block;
          }
          .about-us-main-text48 {
            display: inline-block;
          }
          .about-us-main-text49 {
            display: inline-block;
          }
          .about-us-main-text50 {
            display: inline-block;
          }
          .about-us-main-text51 {
            display: inline-block;
          }
          .about-us-main-text52 {
            display: inline-block;
          }
          .about-us-main-text53 {
            display: inline-block;
          }
          .about-us-mainroot-class-name {
            position: static;
          }
          @media (max-width: 1200px) {
            .about-us-main-container10 {
              justify-content: space-between;
            }
            .about-us-main-container11 {
              width: 5%;
            }
            .about-us-main-container12 {
              width: 90%;
            }
            .about-us-main-container20 {
              width: 5%;
            }
          }
          @media (max-width: 991px) {
            .about-us-main-thq-about-us-main-elm {
              box-shadow: 0px -15px 30px 0px rgba(51, 101, 77, 0.44);
              justify-content: center;
            }
            .about-us-main-container11 {
              width: 2.5%;
              align-items: center;
            }
            .about-us-main-container12 {
              width: 95%;
            }
            .about-us-main-container14 {
              justify-content: center;
            }
            .about-us-main-container18 {
              width: 100%;
            }
            .about-us-main-container19 {
              width: 100%;
            }
            .about-us-main-container20 {
              width: 2.5%;
              height: auto;
              align-self: stretch;
              align-items: stretch;
            }
            .about-us-main-container24 {
              width: 33%;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .about-us-main-container25 {
              width: auto;
              align-self: center;
            }
            .about-us-main-text23 {
              font-size: 1.5em;
              margin-bottom: 0px;
            }
            .about-us-main-text24 {
              font-size: 12px;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .about-us-main-text25 {
              font-size: 12px;
            }
            .about-us-main-container27 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .about-us-main-container28 {
              justify-content: flex-start;
            }
            .about-us-main-text27 {
              font-size: 1.5em;
              text-align: center;
            }
            .about-us-main-text28 {
              font-size: 12px;
              margin-top: 4px;
              text-align: center;
              font-family: PoiretOne-Regular;
            }
            .about-us-main-text29 {
              font-size: 1.5em;
            }
            .about-us-main-container31 {
              width: 100%;
            }
            .about-us-main-text35 {
              font-size: 12px;
              margin-top: 4px;
              text-align: center;
              font-family: PoiretOne-Regular;
            }
            .about-us-main-text42 {
              font-size: 12px;
            }
          }
          @media (max-width: 767px) {
            .about-us-main-thq-about-us-main-elm {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .about-us-main-container10 {
              height: 100%;
              justify-content: center;
            }
            .about-us-main-container11 {
              display: none;
            }
            .about-us-main-container12 {
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .about-us-main-container16 {
              width: 100%;
            }
            .about-us-main-container17 {
              display: none;
            }
            .about-us-main-container18 {
              padding-left: 0px;
              flex-direction: column;
            }
            .about-us-main-text16 {
              width: 100%;
              font-size: 12px;
              text-align: left;
            }
            .about-us-main-container19 {
              padding-left: 0px;
              flex-direction: column;
            }
            .about-us-main-text17 {
              width: 100%;
              font-size: 12px;
              text-align: left;
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .about-us-main-container20 {
              display: none;
            }
            .about-us-main-container32 {
              display: none;
            }
          }
          @media (max-width: 400px) {
            .about-us-main-thq-about-us-main-elm {
              height: auto;
            }
            .about-us-main-text16 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

AboutUsMain.defaultProps = {
  text5: undefined,
  text1: undefined,
  heading1: undefined,
  text10: undefined,
  text8: undefined,
  heading2: undefined,
  text6: undefined,
  text3: undefined,
  text9: undefined,
  text4: undefined,
  text2: undefined,
  rootClassName: '',
  text7: undefined,
  text: undefined,
  heading: undefined,
}

AboutUsMain.propTypes = {
  text5: PropTypes.element,
  text1: PropTypes.element,
  heading1: PropTypes.element,
  text10: PropTypes.element,
  text8: PropTypes.element,
  heading2: PropTypes.element,
  text6: PropTypes.element,
  text3: PropTypes.element,
  text9: PropTypes.element,
  text4: PropTypes.element,
  text2: PropTypes.element,
  rootClassName: PropTypes.string,
  text7: PropTypes.element,
  text: PropTypes.element,
  heading: PropTypes.element,
}

export default AboutUsMain
