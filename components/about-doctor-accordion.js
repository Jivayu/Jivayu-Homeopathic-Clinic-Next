import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const AboutDoctorAccordion = (props) => {
  return (
    <>
      <div
        className={`about-doctor-accordion-container1 ${props.rootClassName} `}
      >
        <div data-thq="accordion" className="about-doctor-accordion-accordion">
          <details
            open
            data-thq="accordion-trigger"
            className="about-doctor-accordion-thq-trigger-elm"
          >
            <summary
              data-thq="accordion-summary"
              className="about-doctor-accordion-thq-summary-elm"
            >
              <span className="about-doctor-accordion-text10">
                About The Doctor
              </span>
              <div
                data-thq="accordion-icon"
                className="about-doctor-accordion-thq-icon-container-elm"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="about-doctor-accordion-icon1"
                >
                  <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                </svg>
              </div>
            </summary>
          </details>
          <div data-thq="accordion-content">
            <div className="about-doctor-accordion-container2">
              <span className="about-doctor-accordion-text11">
                Dr. Priyanka A Vishwakarma
              </span>
              <p className="about-doctor-accordion-text12">
                <span className="about-doctor-accordion-text13">
                  Bachelor of Homeopathic Medicine &amp; Surgery
                </span>
                <br className="about-doctor-accordion-text14"></br>
                <span className="about-doctor-accordion-text15">
                  Gondia Homeopathic Medical College Hospital, Gondia
                </span>
                <br></br>
              </p>
              <p className="about-doctor-accordion-text17">
                <span className="about-doctor-accordion-text18">
                  Certificate in Clinical Medicine
                </span>
                <br className="about-doctor-accordion-text19"></br>
                <span className="about-doctor-accordion-text20">
                  Maharashtra University of Health Sciences, Pune
                </span>
                <br></br>
              </p>
              <p className="about-doctor-accordion-text22">
                <span>
                  Registration No:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>66327</span>
                <br className="about-doctor-accordion-text25"></br>
                <span className="about-doctor-accordion-text26">
                  Maharashtra Council of Homoeopathy, Mumbai
                </span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .about-doctor-accordion-container1 {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            transform: scale(0.95);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .about-doctor-accordion-accordion {
            gap: 4px;
            width: auto;
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
          .about-doctor-accordion-thq-trigger-elm {
            width: 100%;
            cursor: pointer;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: rgba(238, 10, 231, 0.44);
            border-width: 0.6px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            backdrop-filter: blur(5px);
            background-color: rgba(220, 21, 205, 0.14);
          }
          .about-doctor-accordion-thq-summary-elm {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .about-doctor-accordion-text10 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.6;
            letter-spacing: 1.2px;
            text-transform: none;
            text-decoration: none;
          }
          .about-doctor-accordion-thq-icon-container-elm {
            transition: transform 0.3s ease-in-out;
          }
          .about-doctor-accordion-icon1 {
            border-radius: var(--dl-layout-radius-round);
          }
          .about-doctor-accordion-container2 {
            display: flex;
            position: relative;
            padding-top: var(--dl-layout-space-unit);
            border-color: rgba(220, 21, 205, 0.35);
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            backdrop-filter: blur(5px);
            background-color: rgba(220, 21, 205, 0.07);
            border-bottom-width: 0px;
          }
          .about-doctor-accordion-text11 {
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.6;
            margin-bottom: var(--dl-layout-space-halfunit);
            letter-spacing: 1.2px;
            text-transform: none;
            text-decoration: none;
          }
          .about-doctor-accordion-text12 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 12px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.6;
            border-color: rgba(220, 21, 205, 0.35);
            border-width: 0.6px;
            margin-bottom: var(--dl-layout-space-halfunit);
            letter-spacing: 1px;
            text-transform: none;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .about-doctor-accordion-text13 {
            color: var(--dl-color-theme-primary1);
          }
          .about-doctor-accordion-text14 {
            font-size: 10px;
          }
          .about-doctor-accordion-text15 {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 10px;
          }
          .about-doctor-accordion-text17 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 12px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.6;
            border-color: rgba(220, 21, 205, 0.35);
            border-width: 0.6px;
            margin-bottom: var(--dl-layout-space-halfunit);
            letter-spacing: 1px;
            text-transform: none;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .about-doctor-accordion-text18 {
            color: var(--dl-color-theme-primary1);
          }
          .about-doctor-accordion-text19 {
            font-size: 10px;
          }
          .about-doctor-accordion-text20 {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 10px;
          }
          .about-doctor-accordion-text22 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 12px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.6;
            margin-bottom: var(--dl-layout-space-halfunit);
            letter-spacing: 1px;
            text-transform: none;
            text-decoration: none;
          }
          .about-doctor-accordion-text25 {
            font-size: 10px;
          }
          .about-doctor-accordion-text26 {
            font-size: 10px;
          }
          .about-doctor-accordionroot-class-name {
            width: 300px;
            height: auto;
            position: static;
            align-self: center;
          }
          .about-doctor-accordionroot-class-name1 {
            width: 300px;
            height: auto;
            position: static;
            align-self: center;
          }
          .about-doctor-accordionroot-class-name2 {
            width: 300px;
            height: auto;
            position: static;
            align-self: center;
          }

          @media (max-width: 991px) {
            .about-doctor-accordion-accordion {
              transform: scaleX(0.95) scaleY(0.95) scaleZ(0.95);
            }
          }
        `}
      </style>
    </>
  )
}

AboutDoctorAccordion.defaultProps = {
  rootClassName: '',
}

AboutDoctorAccordion.propTypes = {
  rootClassName: PropTypes.string,
}

export default AboutDoctorAccordion
