import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const DoctorProfilePic = (props) => {
  return (
    <>
      <div
        id="Brand Jivayu"
        className={`doctor-profile-pic-container1 ${props.rootClassName} `}
      >
        <div className="doctor-profile-pic-container2">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="doctor-profile-pic-image"
          />
          <div className="doctor-profile-pic-container3">
            <div className="doctor-profile-pic-container4">
              <h1 className="doctor-profile-pic-text10">
                {props.heading ?? (
                  <Fragment>
                    <span className="doctor-profile-pic-text19">
                      Dr. Priyanka Vishwakarma
                    </span>
                  </Fragment>
                )}
              </h1>
              <h1 className="doctor-profile-pic-text11">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="doctor-profile-pic-text21">
                      Jivayu Homeopathic Clinic
                    </span>
                  </Fragment>
                )}
              </h1>
            </div>
            <div className="doctor-profile-pic-container5">
              <h1 className="doctor-profile-pic-text12">
                {props.heading11 ?? (
                  <Fragment>
                    <span className="doctor-profile-pic-text20">
                      Bachelor of Homeopathic Medicine &amp; Surgery
                    </span>
                  </Fragment>
                )}
              </h1>
              <h1 className="doctor-profile-pic-text13">
                {props.heading111 ?? (
                  <Fragment>
                    <span className="doctor-profile-pic-text17">
                      Gondia Homeopathic Medical College Hospital, Gondia
                    </span>
                  </Fragment>
                )}
              </h1>
            </div>
            <div className="doctor-profile-pic-container6">
              <h1 className="doctor-profile-pic-text14">
                {props.heading113 ?? (
                  <Fragment>
                    <span className="doctor-profile-pic-text16">
                      Maharashtra Council of Homoeopathy, Mumbai Reg : 66327
                    </span>
                  </Fragment>
                )}
              </h1>
              <a
                href="https://jivayu.in"
                target="_blank"
                rel="noreferrer noopener"
                className="doctor-profile-pic-link"
              >
                <h1 className="doctor-profile-pic-text15">
                  {props.heading1112 ?? (
                    <Fragment>
                      <span className="doctor-profile-pic-text18">
                        www.jivayu.in
                      </span>
                    </Fragment>
                  )}
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .doctor-profile-pic-container1 {
            width: 400px;
            height: 340px;
            display: flex;
            transform: scaleX(0.9) scaleY(0.9) scaleZ(0.9);
            align-items: stretch;
            border-radius: var(--dl-layout-radius-buttonradius);
            flex-direction: column-reverse;
            padding-bottom: 4px;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/images/jivayubackgroundimage-400h.webp');
            background-position: top right;
            border-top-left-radius: var(--dl-layout-radius-round);
            border-top-right-radius: var(--dl-layout-radius-round);
          }
          .doctor-profile-pic-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .doctor-profile-pic-image {
            width: var(--dl-layout-size-xxlarge);
            align-self: center;
            object-fit: cover;
          }
          .doctor-profile-pic-container3 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 98%;
            bottom: 0px;
            height: 35%;
            display: flex;
            position: absolute;
            align-self: flex-end;
            margin-top: auto;
            align-items: flex-start;
            margin-left: auto;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: rgba(14, 58, 47, 0.61);
            border-width: 0.5px;
            margin-right: auto;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: var(--dl-layout-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            backdrop-filter: blur(5px);
            justify-content: space-between;
            background-color: rgba(0, 0, 0, 0.34);
            border-bottom-width: 0px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .doctor-profile-pic-container4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: 4px;
            flex-direction: column;
          }
          .doctor-profile-pic-text10 {
            color: #feffff;
            width: 100%;
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 1.4;
            padding-left: var(--dl-layout-space-oneandhalfunits);
          }
          .doctor-profile-pic-text11 {
            color: #feffff;
            width: 100%;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 1.4;
            padding-left: var(--dl-layout-space-oneandhalfunits);
          }
          .doctor-profile-pic-container5 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 2px;
            flex-direction: column;
            justify-content: center;
          }
          .doctor-profile-pic-text12 {
            color: #feffff;
            width: 100%;
            font-size: 10px;
            font-style: normal;
            text-align: left;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 1.4;
          }
          .doctor-profile-pic-text13 {
            color: #feffff;
            width: 100%;
            font-size: 10px;
            font-style: normal;
            text-align: left;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 1.4;
          }
          .doctor-profile-pic-container6 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .doctor-profile-pic-text14 {
            color: #feffff;
            width: 100%;
            font-size: 10px;
            font-style: normal;
            text-align: left;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 1.4;
          }
          .doctor-profile-pic-link {
            display: contents;
          }
          .doctor-profile-pic-text15 {
            color: #feffff;
            width: 100%;
            font-size: 10px;
            font-style: normal;
            text-align: right;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 1.4;
            text-decoration: none;
          }
          .doctor-profile-pic-text16 {
            display: inline-block;
          }
          .doctor-profile-pic-text17 {
            display: inline-block;
          }
          .doctor-profile-pic-text18 {
            display: inline-block;
          }
          .doctor-profile-pic-text19 {
            display: inline-block;
          }
          .doctor-profile-pic-text20 {
            display: inline-block;
          }
          .doctor-profile-pic-text21 {
            display: inline-block;
          }
          .doctor-profile-picroot-class-name {
            width: 100%;
          }

          @media (max-width: 1200px) {
            .doctor-profile-pic-container2 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .doctor-profile-pic-container1 {
              transform: scaleX(0.9) scaleY(0.9) scaleZ(0.9);
            }
            .doctor-profile-pic-container2 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .doctor-profile-pic-container1 {
              transform: scaleX(0.9) scaleY(0.9) scaleZ(0.9);
              padding-top: var(--dl-layout-space-threeunits);
              flex-direction: column-reverse;
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .doctor-profile-pic-container2 {
              width: 100%;
            }
            .doctor-profile-pic-container3 {
              width: 90%;
              height: 40%;
              border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
            }
          }
          @media (max-width: 400px) {
            .doctor-profile-pic-container1 {
              transform: scaleX(0.8) scaleY(0.8) scaleZ(0.8);
              box-shadow: -4px -4px 15px 0.5px rgba(6, 6, 6, 0.3);
              border-color: #ffffff;
              border-style: solid;
              border-width: 6px;
              border-top-left-radius: var(--dl-layout-radius-round);
              border-top-right-radius: var(--dl-layout-radius-round);
            }
            .doctor-profile-pic-container3 {
              width: 95%;
              height: 40%;
            }
            .doctor-profile-pic-text15 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

DoctorProfilePic.defaultProps = {
  imageAlt1: 'image',
  imageSrc1: '/images/priyanka%20pic-300w.webp',
  heading113: undefined,
  heading111: undefined,
  heading1112: undefined,
  heading: undefined,
  heading11: undefined,
  heading1: undefined,
  rootClassName: '',
}

DoctorProfilePic.propTypes = {
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  heading113: PropTypes.element,
  heading111: PropTypes.element,
  heading1112: PropTypes.element,
  heading: PropTypes.element,
  heading11: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default DoctorProfilePic
