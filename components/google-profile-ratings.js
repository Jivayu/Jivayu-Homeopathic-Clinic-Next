import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const GoogleProfileRatings = (props) => {
  return (
    <>
      <div
        className={`google-profile-ratings-container1 ${props.rootClassName} `}
      >
        <div className="google-profile-ratings-container2">
          <div className="google-profile-ratings-container3"></div>
          <div className="google-profile-ratings-container4">
            <span className="google-profile-ratings-text10">
              {props.text ?? (
                <Fragment>
                  <span className="google-profile-ratings-text20">4.9</span>
                </Fragment>
              )}
            </span>
            <span className="google-profile-ratings-text11">
              {props.text1 ?? (
                <Fragment>
                  <span className="google-profile-ratings-text18">
                    Google Rating
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="google-profile-ratings-container5">
            <span className="google-profile-ratings-text12">
              {props.text13 ?? (
                <Fragment>
                  <span className="google-profile-ratings-text19">
                    Verified
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="google-profile-ratings-container6">
          <div className="google-profile-ratings-container7">
            <span className="google-profile-ratings-text13">
              Google Profile
            </span>
          </div>
          <div className="google-profile-ratings-container8">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="google-profile-ratings-icon10"
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
              className="google-profile-ratings-icon12"
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
              className="google-profile-ratings-icon14"
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
              className="google-profile-ratings-icon16"
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
              className="google-profile-ratings-icon18"
            >
              <path
                d="M11.45 11.22L1.28 12.7l7.36 7.17L6.9 30l9.1-4.78V2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="google-profile-ratings-container9">
            <button
              type="button"
              className="google-profile-ratings-button button"
            >
              <span className="google-profile-ratings-text14">
                {props.button ?? (
                  <Fragment>
                    <span className="google-profile-ratings-text16">
                      Visit Google Profile
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <span className="google-profile-ratings-text15">
              {props.text12 ?? (
                <Fragment>
                  <span className="google-profile-ratings-text17">
                    Google Profile
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .google-profile-ratings-container1 {
            gap: 2px;
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
            backdrop-filter: blur(5px);
            justify-content: flex-end;
            background-color: rgba(255, 255, 255, 0.4);
            border-top-width: 0.5px;
            border-left-width: 1px;
            border-bottom-width: 0.5px;
            border-top-left-radius: 50px;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .google-profile-ratings-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            transform: scale(0.95);
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .google-profile-ratings-container3 {
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
          .google-profile-ratings-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .google-profile-ratings-text10 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 28px;
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
          .google-profile-ratings-text11 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 12px;
            align-self: center;
            text-align: center;
            font-family: 'PoiretOne-Regular';
            line-height: 2;
            letter-spacing: 1.1px;
          }
          .google-profile-ratings-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: 35px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .google-profile-ratings-text12 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 10px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 300;
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
          .google-profile-ratings-container6 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            padding-left: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .google-profile-ratings-container7 {
            flex: 0 0 auto;
            width: auto;
            height: 30px;
            display: flex;
            align-self: center;
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: flex-end;
          }
          .google-profile-ratings-text13 {
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
          .google-profile-ratings-container8 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-self: center;
            box-shadow: -5px -3px 10px 1px rgba(68, 138, 114, 0.41);
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
          .google-profile-ratings-icon10 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffcf00;
            height: 24px;
            margin-left: var(--dl-layout-space-halfunit);
          }
          .google-profile-ratings-icon12 {
            fill: #ffcf00;
            color: #ffcf00;
            height: 24px;
          }
          .google-profile-ratings-icon14 {
            fill: #ffcf00;
            color: #ffcf00;
            height: 24px;
          }
          .google-profile-ratings-icon16 {
            fill: #ffcf00;
            color: #ffcf00;
            height: 24px;
          }
          .google-profile-ratings-icon18 {
            fill: #ffcf00;
            color: #ffcf00;
            height: 24px;
          }
          .google-profile-ratings-container9 {
            flex: 0 0 auto;
            width: auto;
            height: 40px;
            display: flex;
            transform: scale(0.8);
            align-self: center;
            transition: 0.5s;
            align-items: center;
            border-color: rgba(64, 145, 108, 0.35);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            backdrop-filter: blur(5px);
            justify-content: center;
          }
          .google-profile-ratings-container9:hover {
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
          .google-profile-ratings-button {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .google-profile-ratings-text14 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .google-profile-ratings-text15 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 12px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            line-height: 1.4;
            letter-spacing: 1.1px;
            text-transform: none;
            text-decoration: none;
          }
          .google-profile-ratings-text16 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .google-profile-ratings-text17 {
            display: inline-block;
            font-weight: 300;
            line-height: 1.6;
          }
          .google-profile-ratings-text18 {
            display: inline-block;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 300;
          }
          .google-profile-ratings-text19 {
            display: inline-block;
            line-height: 1.4;
          }
          .google-profile-ratings-text20 {
            display: inline-block;
            font-weight: 700;
          }

          .google-profile-ratingsroot-class-name2 {
            width: 90%;
            backdrop-filter: blur(5px);
          }

          @media (max-width: 991px) {
            .google-profile-ratings-container1 {
              width: auto;
              height: 100%;
              align-items: center;
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-halfunit);
              justify-content: flex-end;
            }
            .google-profile-ratings-container2 {
              transform: scale(0.9);
            }
            .google-profile-ratings-text10 {
              font-size: 25px;
            }
            .google-profile-ratings-container6 {
              gap: 2px;
              align-self: center;
            }
            .google-profile-ratings-container7 {
              justify-content: center;
            }
            .google-profile-ratings-text13 {
              font-style: normal;
              font-weight: 400;
            }
            .google-profile-ratings-container8 {
              width: 90%;
              align-self: flex-end;
              justify-content: flex-end;
            }
            .google-profile-ratings-container9 {
              align-items: stretch;
            }
          }
          @media (max-width: 767px) {
            .google-profile-ratings-container3 {
              background-image: url('https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA');
            }
          }
        `}
      </style>
    </>
  )
}

GoogleProfileRatings.defaultProps = {
  button: undefined,
  text12: undefined,
  text1: undefined,
  text13: undefined,
  text: undefined,
  rootClassName: '',
}

GoogleProfileRatings.propTypes = {
  button: PropTypes.element,
  text12: PropTypes.element,
  text1: PropTypes.element,
  text13: PropTypes.element,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default GoogleProfileRatings
