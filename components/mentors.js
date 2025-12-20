import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Mentors = (props) => {
  return (
    <>
      <section className="mentors-container1">
        <div className="mentors-container2">
          <div className="mentors-container3">
            <div data-thq="accordion" className="mentors-accordion1">
              <details
                open
                data-thq="accordion-trigger"
                className="mentors-thq-trigger-elm1"
              >
                <summary
                  data-thq="accordion-summary"
                  className="mentors-thq-summary-elm1"
                >
                  <span className="mentors-text10">Dr. Prashant Katre</span>
                  <div
                    data-thq="accordion-icon"
                    className="mentors-thq-icon-container-elm1"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="mentors-icon1"
                    >
                      <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </summary>
              </details>
              <div
                data-thq="accordion-content"
                className="mentors-thq-content-elm1"
              >
                <div className="mentors-container4">
                  <span className="mentors-text11 PoiretOne-Regular">
                    {props.text21 ?? (
                      <Fragment>
                        <span className="mentors-text47">
                          <span>Day Session    </span>
                          <span>12:01 PM To 02:00 PM</span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <p className="mentors-text12">
                    {props.text12 ?? (
                      <Fragment>
                        <span className="mentors-text45">
                          Default label. This can be anything that you want
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="mentors-text13">
                    {props.text112 ?? (
                      <Fragment>
                        <span className="mentors-text20">
                          <span className="mentors-text21">
                            Certificate in Clinical Medicine
                          </span>
                          <br className="mentors-text22"></br>
                          <span className="mentors-text23">
                            Maharashtra University of Health Sciences, Pune
                          </span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="mentors-text14">
                    {props.text1111 ?? (
                      <Fragment>
                        <span className="mentors-text28">
                          <span>
                            Registration No:
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="mentors-text30">66327</span>
                          <br className="mentors-text31"></br>
                          <span className="mentors-text32">
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
            <animate-on-reveal>
              <img
                alt={props.imageAlt2}
                src="https://jivayu.in/images/dr.%20prashant%20katre-1400w.webp"
                loading="lazy"
                data-thq-animate-on-reveal="true"
                className="mentors-image1"
              />
            </animate-on-reveal>
          </div>
          <div className="mentors-container5">
            <div data-thq="accordion" className="mentors-accordion2">
              <details
                open
                data-thq="accordion-trigger"
                className="mentors-thq-trigger-elm2"
              >
                <summary
                  data-thq="accordion-summary"
                  className="mentors-thq-summary-elm2"
                >
                  <span className="mentors-text15">Dr. Preeti Katre</span>
                  <div
                    data-thq="accordion-icon"
                    className="mentors-thq-icon-container-elm2"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="mentors-icon3"
                    >
                      <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </summary>
              </details>
              <div
                data-thq="accordion-content"
                className="mentors-thq-content-elm2"
              >
                <div className="mentors-container6">
                  <span className="mentors-text16 PoiretOne-Regular">
                    {props.text211 ?? (
                      <Fragment>
                        <span className="mentors-text25">
                          <span>Day Session    </span>
                          <span>12:01 PM To 02:00 PM</span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <p className="mentors-text17">
                    {props.text121 ?? (
                      <Fragment>
                        <span className="mentors-text46">
                          Default label. This can be anything that you want
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="mentors-text18">
                    {props.text1121 ?? (
                      <Fragment>
                        <span className="mentors-text40">
                          <span className="mentors-text41">
                            Certificate in Clinical Medicine
                          </span>
                          <br className="mentors-text42"></br>
                          <span className="mentors-text43">
                            Maharashtra University of Health Sciences, Pune
                          </span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="mentors-text19">
                    {props.text11111 ?? (
                      <Fragment>
                        <span className="mentors-text34">
                          <span>
                            Registration No:
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="mentors-text36">66327</span>
                          <br className="mentors-text37"></br>
                          <span className="mentors-text38">
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
            <animate-on-reveal>
              <img
                alt={props.imageAlt4}
                src="https://jivayu.in/images/dr%20priti%20katre-1400w.webp"
                loading="lazy"
                data-thq-animate-on-reveal="true"
                className="mentors-image2"
              />
            </animate-on-reveal>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .mentors-container1 {
            width: 100%;
            height: 500px;
            display: flex;
            transform: scale(0.95);
            box-shadow: -5px -15px 30px 0px rgba(51, 101, 77, 0.44);
            margin-top: -8px;
            align-items: center;
            border-color: rgba(220, 21, 205, 0.48);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-buttonradius);
            margin-bottom: var(--dl-layout-space-halfunit);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/images/jivayubackgroundimage-1500w.webp');
            background-repeat: no-repeat;
            background-position: center;
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
          }
          .mentors-container2 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .mentors-container3 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column-reverse;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            background-image: linear-gradient(
              0deg,
              rgba(190, 236, 206, 0.5) 0%,
              rgba(175, 204, 117, 0.8) 100%
            );
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
          }
          .mentors-accordion1 {
            gap: 4px;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            justify-content: center;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .mentors-thq-trigger-elm1 {
            width: 100%;
            cursor: pointer;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: rgba(238, 10, 231, 0.44);
            border-width: 0.6px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: rgba(220, 21, 205, 0.15);
          }
          .mentors-thq-summary-elm1 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .mentors-text10 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 14px;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.6;
            letter-spacing: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .mentors-thq-icon-container-elm1 {
            transition: transform 0.3s ease-in-out;
          }
          .mentors-icon1 {
            border-radius: var(--dl-layout-radius-round);
          }
          .mentors-thq-content-elm1 {
            width: 100%;
          }
          .mentors-container4 {
            display: flex;
            position: relative;
            padding-top: var(--dl-layout-space-unit);
            border-color: rgba(220, 21, 205, 0.35);
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            background-color: rgba(220, 21, 205, 0.07);
            border-bottom-width: 0px;
          }
          .mentors-text11 {
            font-style: normal;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .mentors-text12 {
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
          .mentors-text13 {
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
          .mentors-text14 {
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
          .mentors-image1 {
            width: 200px;
            height: var(--dl-layout-size-xlarge);
            object-fit: cover;
            border-color: var(--dl-color-theme-primary1);
            border-width: 3px;
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .mentors-container5 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column-reverse;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            background-image: linear-gradient(
              0deg,
              rgba(190, 236, 206, 0.5) 0%,
              rgba(175, 204, 117, 0.8) 100%
            );
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .mentors-accordion2 {
            gap: 4px;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            justify-content: center;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .mentors-thq-trigger-elm2 {
            width: 100%;
            cursor: pointer;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: rgba(238, 10, 231, 0.44);
            border-width: 0.6px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: rgba(220, 21, 205, 0.15);
          }
          .mentors-thq-summary-elm2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .mentors-text15 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-size: 14px;
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.6;
            letter-spacing: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .mentors-thq-icon-container-elm2 {
            transition: transform 0.3s ease-in-out;
          }
          .mentors-icon3 {
            border-radius: var(--dl-layout-radius-round);
          }
          .mentors-thq-content-elm2 {
            width: 100%;
          }
          .mentors-container6 {
            display: flex;
            position: relative;
            padding-top: var(--dl-layout-space-unit);
            border-color: rgba(220, 21, 205, 0.35);
            border-width: 1px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            background-color: rgba(220, 21, 205, 0.07);
            border-bottom-width: 0px;
          }
          .mentors-text16 {
            font-style: normal;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .mentors-text17 {
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
          .mentors-text18 {
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
          .mentors-text19 {
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
          .mentors-image2 {
            width: 200px;
            height: var(--dl-layout-size-xlarge);
            object-fit: cover;
            border-color: var(--dl-color-theme-primary1);
            border-width: 3px;
            border-radius: var(--dl-layout-radius-buttonradius);
          }
          .mentors-text20 {
            display: inline-block;
          }
          .mentors-text21 {
            color: var(--dl-color-theme-primary1);
          }
          .mentors-text22 {
            font-size: 10px;
          }
          .mentors-text23 {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .mentors-text25 {
            display: inline-block;
            font-size: 14px;
            font-weight: 700;
          }
          .mentors-text28 {
            display: inline-block;
          }
          .mentors-text30 {
            font-weight: 700;
          }
          .mentors-text31 {
            font-size: 10px;
          }
          .mentors-text32 {
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .mentors-text34 {
            display: inline-block;
          }
          .mentors-text36 {
            font-weight: 700;
          }
          .mentors-text37 {
            font-size: 10px;
          }
          .mentors-text38 {
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .mentors-text40 {
            display: inline-block;
          }
          .mentors-text41 {
            color: var(--dl-color-theme-primary1);
          }
          .mentors-text42 {
            font-size: 10px;
          }
          .mentors-text43 {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .mentors-text45 {
            display: inline-block;
          }
          .mentors-text46 {
            display: inline-block;
          }
          .mentors-text47 {
            display: inline-block;
            font-size: 14px;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .mentors-container1 {
              box-shadow: 0px -15px 30px 0px rgba(51, 101, 77, 0.44);
              justify-content: center;
            }
            .mentors-image1 {
              animation-name: pulse;
              animation-delay: 0s;
              animation-duration: 500ms;
              animation-direction: normal;
              animation-iteration-count: 3;
              animation-timing-function: ease;
            }
            .mentors-image2 {
              animation-name: pulse;
              animation-delay: 0s;
              animation-duration: 500ms;
              animation-direction: normal;
              animation-iteration-count: 3;
              animation-timing-function: linear;
            }
            .mentors-text25 {
              font-size: 12px;
            }
            .mentors-text47 {
              font-size: 12px;
            }
          }
          @media (max-width: 767px) {
            .mentors-container1 {
              height: auto;
            }
            .mentors-container2 {
              gap: 2px;
              flex: 0 0 auto;
              align-items: center;
              border-radius: var(--dl-layout-radius-buttonradius);
              flex-direction: column;
            }
            .mentors-container3 {
              width: 100%;
              padding-top: var(--dl-layout-space-twounits);
              border-radius: var(--dl-layout-radius-buttonradius);
              flex-direction: row;
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .mentors-image1 {
              height: auto;
              border-width: 2px;
            }
            .mentors-container5 {
              width: 100%;
              padding-top: var(--dl-layout-space-twounits);
              border-radius: var(--dl-layout-radius-radius8);
              flex-direction: row;
              padding-bottom: var(--dl-layout-space-twounits);
              background-image: linear-gradient(
                180deg,
                rgba(190, 236, 206, 0.5) 0%,
                rgba(175, 204, 117, 0.8) 100%
              );
              border-top-left-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
              border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
            }
            .mentors-image2 {
              width: 300px;
              height: 200px;
              border-width: 2px;
            }
          }
          @media (max-width: 400px) {
            .mentors-container3 {
              flex-direction: column-reverse;
            }
            .mentors-image1 {
              height: 200px;
            }
            .mentors-container5 {
              flex-direction: column-reverse;
            }
            .mentors-image2 {
              width: 200px;
              height: 200px;
            }
          }
        `}
      </style>
    </>
  )
}

Mentors.defaultProps = {
  rootClassName: '',
  text112: undefined,
  text211: undefined,
  text1111: undefined,
  text11111: undefined,
  text1121: undefined,
  text12: undefined,
  imageAlt2: 'image',
  text121: undefined,
  text21: undefined,
  imageAlt4: 'image',
}

Mentors.propTypes = {
  rootClassName: PropTypes.string,
  text112: PropTypes.element,
  text211: PropTypes.element,
  text1111: PropTypes.element,
  text11111: PropTypes.element,
  text1121: PropTypes.element,
  text12: PropTypes.element,
  imageAlt2: PropTypes.string,
  text121: PropTypes.element,
  text21: PropTypes.element,
  imageAlt4: PropTypes.string,
}

export default Mentors
