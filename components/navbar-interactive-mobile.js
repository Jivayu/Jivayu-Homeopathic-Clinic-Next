import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NavbarInteractiveMobile = (props) => {
  return (
    <>
      <div
        className={`navbar-interactive-mobile-container ${props.rootClassName} `}
      >
        <header
          data-thq="thq-navbar"
          className="navbar-interactive-mobile-thq-navbar-interactive-elm"
        >
          <a
            href="https://jivayu.in/homeopathic-clinic-in-nagpur"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt={props.imageAlt}
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/images/jivayu%20clinic-1500h.webp"
              srcSet="/images/jivayu%20clinic-1500h.webp 1200w, /images/jivayu%20clinic-tablet.webp 800w, /images/jivayu%20clinic-mobile.webp 480w"
              className="navbar-interactive-mobile-image"
            />
          </a>
          <div
            data-thq="thq-navbar-nav"
            className="navbar-interactive-mobile-thq-desktop-menu-elm"
          >
            <nav className="navbar-interactive-mobile-thq-links-elm1">
              <span>
                {props.text ?? (
                  <Fragment>
                    <span className="navbar-interactive-mobile-text21">
                      About
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="navbar-interactive-mobile-text11">
                {props.text1 ?? (
                  <Fragment>
                    <span className="navbar-interactive-mobile-text24">
                      Features
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="navbar-interactive-mobile-text12">
                {props.text2 ?? (
                  <Fragment>
                    <span className="navbar-interactive-mobile-text22">
                      Pricing
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="navbar-interactive-mobile-text13">
                {props.text3 ?? (
                  <Fragment>
                    <span className="navbar-interactive-mobile-text19">
                      Team
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="navbar-interactive-mobile-text14">
                {props.text4 ?? (
                  <Fragment>
                    <span className="navbar-interactive-mobile-text27">
                      Blog
                    </span>
                  </Fragment>
                )}
              </span>
            </nav>
            <div className="navbar-interactive-mobile-thq-buttons-elm1">
              <button className="navbar-interactive-mobile-thq-login-elm1 button">
                <span>
                  {props.login ?? (
                    <Fragment>
                      <span className="navbar-interactive-mobile-text25">
                        Login
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="button">
                <span>
                  {props.register ?? (
                    <Fragment>
                      <span className="navbar-interactive-mobile-text29">
                        Register
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="navbar-interactive-mobile-thq-burger-menu-elm"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="navbar-interactive-mobile-icon10"
            >
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="navbar-interactive-mobile-thq-mobile-menu-elm"
          >
            <div className="navbar-interactive-mobile-thq-nav-elm">
              <div className="navbar-interactive-mobile-thq-top-elm">
                <img
                  alt={props.logoAlt}
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/images/jivayu%20clinic%20logo-1500h.webp"
                  srcSet="/images/jivayu%20clinic%20logo-1500h.webp 1200w, /images/jivayu%20clinic%20logo-tablet.webp 800w, /images/jivayu%20clinic%20logo-mobile.webp 480w"
                  className="navbar-interactive-mobile-thq-logo-elm"
                />
                <div
                  data-thq="thq-close-menu"
                  className="navbar-interactive-mobile-thq-close-menu-elm"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-mobile-icon12"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-interactive-mobile-thq-links-elm2">
                <Link href="/">
                  <a className="navbar-interactive-mobile-link2 InterRegular">
                    {props.text5 ?? (
                      <Fragment>
                        <span className="navbar-interactive-mobile-text23">
                          Home
                        </span>
                      </Fragment>
                    )}
                  </a>
                </Link>
                <Link href="/about-us">
                  <a className="navbar-interactive-mobile-link3 InterRegular">
                    {props.text6 ?? (
                      <Fragment>
                        <span className="navbar-interactive-mobile-text30">
                          About
                        </span>
                      </Fragment>
                    )}
                  </a>
                </Link>
                <Link href="/contacts">
                  <a className="navbar-interactive-mobile-link4 InterRegular">
                    {props.text9 ?? (
                      <Fragment>
                        <span className="navbar-interactive-mobile-text26">
                          Contact Us
                        </span>
                      </Fragment>
                    )}
                  </a>
                </Link>
              </nav>
              <div className="navbar-interactive-mobile-thq-buttons-elm2">
                <a
                  href="tel:+91 9823203912"
                  className="navbar-interactive-mobile-thq-login-elm2 button"
                >
                  <span className="InterRegular navbar-interactive-mobile-text17">
                    {props.login1 ?? (
                      <Fragment>
                        <span className="navbar-interactive-mobile-text20">
                          Book Now !
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
                <button className="button navbar-interactive-mobile-thq-register-elm2">
                  <span>
                    {props.register1 ?? (
                      <Fragment>
                        <span className="navbar-interactive-mobile-text28">
                          Register
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="navbar-interactive-mobile-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navbar-interactive-mobile-icon16"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navbar-interactive-mobile-icon18"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-interactive-mobile-container {
            display: contents;
          }
          .navbar-interactive-mobile-thq-navbar-interactive-elm {
            width: 100%;
            display: none;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .navbar-interactive-mobile-image {
            height: 2rem;
            text-decoration: none;
          }
          .navbar-interactive-mobile-thq-desktop-menu-elm {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar-interactive-mobile-thq-links-elm1 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-interactive-mobile-text11 {
            margin-left: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-mobile-text12 {
            margin-left: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-mobile-text13 {
            margin-left: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-mobile-text14 {
            margin-left: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-mobile-thq-buttons-elm1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-interactive-mobile-thq-login-elm1 {
            border-width: 0px;
            margin-right: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-mobile-thq-burger-menu-elm {
            display: none;
          }
          .navbar-interactive-mobile-icon10 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-interactive-mobile-thq-mobile-menu-elm {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateY(-100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navbar-interactive-mobile-thq-nav-elm {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-mobile-thq-top-elm {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .navbar-interactive-mobile-thq-logo-elm {
            height: 2rem;
          }
          .navbar-interactive-mobile-thq-close-menu-elm {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-interactive-mobile-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-interactive-mobile-thq-links-elm2 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-mobile-link2 {
            margin-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-mobile-link3 {
            margin-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-mobile-link4 {
            margin-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
          }
          .navbar-interactive-mobile-thq-buttons-elm2 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-interactive-mobile-thq-login-elm2 {
            margin-right: var(--dl-layout-space-twounits);
            text-decoration: none;
          }
          .navbar-interactive-mobile-icon14 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-mobile-icon16 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-mobile-icon18 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-interactive-mobile-text19 {
            display: inline-block;
          }
          .navbar-interactive-mobile-text20 {
            display: inline-block;
          }
          .navbar-interactive-mobile-text21 {
            display: inline-block;
          }
          .navbar-interactive-mobile-text22 {
            display: inline-block;
          }
          .navbar-interactive-mobile-text23 {
            display: inline-block;
          }
          .navbar-interactive-mobile-text24 {
            display: inline-block;
          }
          .navbar-interactive-mobile-text25 {
            display: inline-block;
          }
          .navbar-interactive-mobile-text26 {
            display: inline-block;
          }
          .navbar-interactive-mobile-text27 {
            display: inline-block;
          }
          .navbar-interactive-mobile-text28 {
            display: inline-block;
          }
          .navbar-interactive-mobile-text29 {
            display: inline-block;
          }
          .navbar-interactive-mobile-text30 {
            display: inline-block;
          }

          .navbar-interactive-mobileroot-class-name1 {
            display: none;
          }

          @media (max-width: 767px) {
            .navbar-interactive-mobile-container {
              position: fixed;
            }
            .navbar-interactive-mobile-thq-navbar-interactive-elm {
              display: flex;
              z-index: 100;
              position: sticky;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-unit);
              backdrop-filter: blur(5px);
            }
            .navbar-interactive-mobile-image {
              height: 2.2rem;
            }
            .navbar-interactive-mobile-thq-desktop-menu-elm {
              display: none;
            }
            .navbar-interactive-mobile-thq-burger-menu-elm {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navbar-interactive-mobile-icon10 {
              fill: var(--dl-color-theme-primary1);
              width: 28px;
              height: 28px;
            }
            .navbar-interactive-mobile-thq-mobile-menu-elm {
              height: 90vh;
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
              backdrop-filter: blur(15px);
            }
            .navbar-interactive-mobile-thq-logo-elm {
              height: 2.5rem;
            }
            .navbar-interactive-mobile-icon12 {
              fill: var(--dl-color-theme-primary1);
              width: 28px;
              height: 28px;
            }
            .navbar-interactive-mobile-thq-links-elm2 {
              width: 100%;
              align-self: center;
              align-items: center;
            }
            .navbar-interactive-mobile-link2 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navbar-interactive-mobile-link3 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navbar-interactive-mobile-link4 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navbar-interactive-mobile-thq-buttons-elm2 {
              align-self: center;
              justify-content: center;
            }
            .navbar-interactive-mobile-thq-login-elm2 {
              font-family: Inter;
              margin-right: 0px;
            }
            .navbar-interactive-mobile-text17 {
              color: rgba(251, 251, 251, 0.6509803921568628);
            }
            .navbar-interactive-mobile-thq-register-elm2 {
              display: none;
            }
            .navbar-interactive-mobile-text20 {
              color: #fdfcfc;
            }
            .navbar-interactive-mobileroot-class-name {
              top: 0px;
              position: sticky;
              align-self: stretch;
            }
            .navbar-interactive-mobileroot-class-name1 {
              display: flex;
              align-self: stretch;
            }
          }
          @media (max-width: 400px) {
            .navbar-interactive-mobile-thq-navbar-interactive-elm {
              padding: var(--dl-layout-space-unit);
              padding-right: 16px;
              justify-content: space-between;
            }
            .navbar-interactive-mobile-thq-mobile-menu-elm {
              height: 95vh;
              padding-top: var(--dl-layout-space-twounits);
              padding-left: 16px;
              padding-right: 16px;
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .navbar-interactive-mobile-thq-logo-elm {
              height: 3rem;
            }
          }
        `}
      </style>
    </>
  )
}

NavbarInteractiveMobile.defaultProps = {
  text3: undefined,
  login1: undefined,
  text: undefined,
  text2: undefined,
  text5: undefined,
  text1: undefined,
  rootClassName: '',
  logoAlt: 'image',
  login: undefined,
  text9: undefined,
  text4: undefined,
  register1: undefined,
  imageAlt: 'logo',
  register: undefined,
  text6: undefined,
}

NavbarInteractiveMobile.propTypes = {
  text3: PropTypes.element,
  login1: PropTypes.element,
  text: PropTypes.element,
  text2: PropTypes.element,
  text5: PropTypes.element,
  text1: PropTypes.element,
  rootClassName: PropTypes.string,
  logoAlt: PropTypes.string,
  login: PropTypes.element,
  text9: PropTypes.element,
  text4: PropTypes.element,
  register1: PropTypes.element,
  imageAlt: PropTypes.string,
  register: PropTypes.element,
  text6: PropTypes.element,
}

export default NavbarInteractiveMobile
