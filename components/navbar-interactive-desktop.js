import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NavbarInteractiveDesktop = (props) => {
  return (
    <>
      <div
        className={`navbar-interactive-desktop-container1 ${props.rootClassName} `}
      >
        <header
          data-thq="thq-navbar"
          className="navbar-interactive-desktop-thq-navbar-interactive-elm"
        >
          <a
            href="https://jivayu.in/homeopathic-clinic-in-nagpur"
            target="_blank"
            rel="noreferrer noopener"
            className="navbar-interactive-desktop-link1"
          >
            <img
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              alt="/images/jivayu%20clinic-1500h.webp"
              src="/images/jivayu%20clinic-1500h.webp"
              loading="lazy"
              srcSet="/images/jivayu%20clinic-1500h.webp 1200w, /images/jivayu%20clinic-tablet.webp 800w, /images/jivayu%20clinic-mobile.webp 480w"
              className="navbar-interactive-desktop-image"
            />
          </a>
          <div
            data-thq="thq-navbar-nav"
            className="navbar-interactive-desktop-thq-desktop-menu-elm"
          >
            <nav className="navbar-interactive-desktop-thq-links-elm1">
              <Link href="/">
                <a className="navbar-interactive-desktop-link2">Home</a>
              </Link>
              <Link href="/about-us">
                <a className="navbar-interactive-desktop-link3">
                  {props.text1 ?? (
                    <Fragment>
                      <span className="navbar-interactive-desktop-text24">
                        About Me
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/contacts">
                <a className="navbar-interactive-desktop-link4">
                  {props.text2 ?? (
                    <Fragment>
                      <span className="navbar-interactive-desktop-text23">
                        Contacts
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <span className="navbar-interactive-desktop-text10">
                {props.text3 ?? (
                  <Fragment>
                    <span className="navbar-interactive-desktop-text26">
                      Team
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="navbar-interactive-desktop-text11">
                {props.text4 ?? (
                  <Fragment>
                    <span className="navbar-interactive-desktop-text36">
                      Blog
                    </span>
                  </Fragment>
                )}
              </span>
            </nav>
            <div className="navbar-interactive-desktop-thq-buttons-elm1">
              <button className="navbar-interactive-desktop-thq-login-elm1 button">
                <span>
                  {props.login ?? (
                    <Fragment>
                      <span className="navbar-interactive-desktop-text35">
                        Login
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="navbar-interactive-desktop-thq-register-elm1 button">
                <span className="navbar-interactive-desktop-text13">
                  {props.register ?? (
                    <Fragment>
                      <span className="navbar-interactive-desktop-text33">
                        Google Profile
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <a
                href="https://www.google.com/search?q=jivayu+homeoapthic+clinic&amp;rlz=1C1ONGR_enIN1065IN1065&amp;oq=&amp;gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQg5MTY3ajBqN6gCCLACAQ&amp;sourceid=chrome&amp;ie=UTF-8"
                target="_blank"
                rel="noreferrer noopener"
                className="navbar-interactive-desktop-link5"
              >
                <div className="navbar-interactive-desktop-container2">
                  <button
                    type="button"
                    className="navbar-interactive-desktop-button button"
                  >
                    <span className="navbar-interactive-desktop-text14">
                      {props.button2112 ?? (
                        <Fragment>
                          <span className="navbar-interactive-desktop-text32">
                            Visit Google Profile
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <span className="navbar-interactive-desktop-text15">
                    {props.text121112 ?? (
                      <Fragment>
                        <span className="navbar-interactive-desktop-text28">
                          Goolge Profile
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="navbar-interactive-desktop-thq-burger-menu-elm"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="navbar-interactive-desktop-icon10"
            >
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="navbar-interactive-desktop-thq-mobile-menu-elm"
          >
            <div className="navbar-interactive-desktop-thq-nav-elm">
              <div className="navbar-interactive-desktop-thq-top-elm">
                <img
                  alt={props.logoAlt}
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/images/jivayu%20clinic-1500h.webp"
                  srcSet="/images/jivayu%20clinic-1500h.webp 1200w, /images/jivayu%20clinic-tablet.webp 800w, /images/jivayu%20clinic-mobile.webp 480w"
                  className="navbar-interactive-desktop-thq-logo-elm"
                />
                <div
                  data-thq="thq-close-menu"
                  className="navbar-interactive-desktop-thq-close-menu-elm"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-desktop-icon12"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-interactive-desktop-thq-links-elm2">
                <span className="navbar-interactive-desktop-text16">
                  {props.text5 ?? (
                    <Fragment>
                      <span className="navbar-interactive-desktop-text30">
                        Home
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="navbar-interactive-desktop-text17">
                  {props.text6 ?? (
                    <Fragment>
                      <span className="navbar-interactive-desktop-text29">
                        Features
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="navbar-interactive-desktop-text18">
                  {props.text7 ?? (
                    <Fragment>
                      <span className="navbar-interactive-desktop-text37">
                        Pricing
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="navbar-interactive-desktop-text19">
                  {props.text8 ?? (
                    <Fragment>
                      <span className="navbar-interactive-desktop-text34">
                        Team
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="navbar-interactive-desktop-text20">
                  {props.text9 ?? (
                    <Fragment>
                      <span className="navbar-interactive-desktop-text31">
                        Blog
                      </span>
                    </Fragment>
                  )}
                </span>
              </nav>
              <div className="navbar-interactive-desktop-thq-buttons-elm2">
                <button className="navbar-interactive-desktop-thq-login-elm2 button">
                  <span className="navbar-interactive-desktop-text21">
                    {props.login1 ?? (
                      <Fragment>
                        <span className="navbar-interactive-desktop-text27">
                          Call Now !
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button className="button navbar-interactive-desktop-thq-register-elm2">
                  <span>
                    {props.register1 ?? (
                      <Fragment>
                        <span className="navbar-interactive-desktop-text25">
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
                className="navbar-interactive-desktop-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navbar-interactive-desktop-icon16"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navbar-interactive-desktop-icon18"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-interactive-desktop-container1 {
            left: 0px;
            right: 0px;
            width: 100%;
            margin: auto;
            display: flex;
            position: fixed;
            transform: scale(0.95);
            margin-top: auto;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: auto;
            justify-content: center;
          }
          .navbar-interactive-desktop-thq-navbar-interactive-elm {
            width: 99%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: 4px;
            border-color: rgba(69, 146, 125, 0.6);
            border-width: 1px;
            padding-left: var(--dl-layout-space-threeunits);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: 6px;
            padding-bottom: 4px;
            backdrop-filter: blur(5px);
            justify-content: space-between;
            background-color: rgba(69, 146, 125, 0.39);
          }
          .navbar-interactive-desktop-link1 {
            display: contents;
          }
          .navbar-interactive-desktop-image {
            height: 1.8rem;
            transform: scale(0.96);
            padding-top: 2px;
            padding-left: 4px;
            padding-right: 4px;
            padding-bottom: 2px;
            text-decoration: none;
          }
          .navbar-interactive-desktop-thq-desktop-menu-elm {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar-interactive-desktop-thq-links-elm1 {
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-interactive-desktop-link2 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            cursor: pointer;
            display: block;
            padding: 4px;
            font-size: 14px;
            transition: 0.3s;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.4;
            border-color: rgba(24, 61, 44, 0.05);
            border-width: 1px;
            letter-spacing: 1.15px;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .navbar-interactive-desktop-link2:hover {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .navbar-interactive-desktop-link3 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            cursor: pointer;
            padding: 4px;
            font-size: 14px;
            transition: 0.3s;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.4;
            margin-left: var(--dl-layout-space-twounits);
            border-color: rgba(24, 61, 44, 0.05);
            border-width: 1px;
            letter-spacing: 1.15px;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .navbar-interactive-desktop-link3:hover {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .navbar-interactive-desktop-link4 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            cursor: pointer;
            padding: 4px;
            font-size: 14px;
            transition: 0.3s;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.4;
            margin-left: var(--dl-layout-space-twounits);
            border-color: rgba(24, 61, 44, 0.05);
            border-width: 1px;
            letter-spacing: 1.15px;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .navbar-interactive-desktop-link4:hover {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            border-color: var(--dl-color-theme-primary1);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .navbar-interactive-desktop-text10 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            font-size: 14px;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.4;
            margin-left: var(--dl-layout-space-twounits);
            letter-spacing: 1.15px;
          }
          .navbar-interactive-desktop-text11 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            font-size: 14px;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.4;
            margin-left: var(--dl-layout-space-twounits);
            letter-spacing: 1.15px;
          }
          .navbar-interactive-desktop-thq-buttons-elm1 {
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-interactive-desktop-thq-login-elm1 {
            display: none;
            border-width: 0px;
            margin-right: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-desktop-thq-register-elm1 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            font-size: 14px;
            transform: scale(0.96);
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            border-radius: var(--dl-layout-radius-buttonradius);
            letter-spacing: 1.2px;
            background-color: rgba(220, 21, 205, 0.14);
          }
          .navbar-interactive-desktop-text13 {
            line-height: 1.4;
            letter-spacing: 1.4px;
          }
          .navbar-interactive-desktop-link5 {
            display: contents;
          }
          .navbar-interactive-desktop-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 38px;
            display: flex;
            transform: scaleX(0.9) scaleY(0.9) scaleZ(0.9);
            align-self: center;
            transition: 0.5s;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            backdrop-filter: blur(5px);
            justify-content: center;
            text-decoration: none;
          }
          .navbar-interactive-desktop-container2:hover {
            transform: scaleX(0.85) scaleY(0.85) scaleZ(0.85);
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
          .navbar-interactive-desktop-button {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: none;
            align-self: flex-end;
            background-color: #e7f1e9;
          }
          .navbar-interactive-desktop-text14 {
            font-style: normal;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          .navbar-interactive-desktop-text15 {
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
          .navbar-interactive-desktop-thq-burger-menu-elm {
            display: none;
          }
          .navbar-interactive-desktop-icon10 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-interactive-desktop-thq-mobile-menu-elm {
            top: -25px;
            left: 0px;
            width: 100%;
            bottom: var(--dl-layout-space-twounits);
            height: 100vh;
            margin: auto;
            display: flex;
            padding: 32px;
            z-index: 98;
            position: absolute;
            transform: translateY(-100%);
            margin-top: auto;
            transition: 0.5s;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: auto;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navbar-interactive-desktop-thq-nav-elm {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-desktop-thq-top-elm {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .navbar-interactive-desktop-thq-logo-elm {
            height: 2rem;
          }
          .navbar-interactive-desktop-thq-close-menu-elm {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-interactive-desktop-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-interactive-desktop-thq-links-elm2 {
            flex: 0 0 auto;
            display: none;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-desktop-text16 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .navbar-interactive-desktop-text17 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .navbar-interactive-desktop-text18 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .navbar-interactive-desktop-text19 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .navbar-interactive-desktop-text20 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .navbar-interactive-desktop-thq-buttons-elm2 {
            width: 100%;
            display: none;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-interactive-desktop-thq-login-elm2 {
            transition: 0.3s;
            margin-right: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-desktop-thq-login-elm2:hover {
            box-shadow: 0px -5px 20px 0px rgba(0, 0, 0, 0.46);
          }
          .navbar-interactive-desktop-icon14 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-desktop-icon16 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .navbar-interactive-desktop-icon18 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-interactive-desktop-text23 {
            display: inline-block;
          }
          .navbar-interactive-desktop-text24 {
            display: inline-block;
          }
          .navbar-interactive-desktop-text25 {
            display: inline-block;
          }
          .navbar-interactive-desktop-text26 {
            display: inline-block;
          }
          .navbar-interactive-desktop-text27 {
            display: inline-block;
          }
          .navbar-interactive-desktop-text28 {
            display: inline-block;
            line-height: 1.6;
          }
          .navbar-interactive-desktop-text29 {
            display: inline-block;
          }
          .navbar-interactive-desktop-text30 {
            display: inline-block;
          }
          .navbar-interactive-desktop-text31 {
            display: inline-block;
          }
          .navbar-interactive-desktop-text32 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .navbar-interactive-desktop-text33 {
            display: inline-block;
          }
          .navbar-interactive-desktop-text34 {
            display: inline-block;
          }
          .navbar-interactive-desktop-text35 {
            display: inline-block;
          }
          .navbar-interactive-desktop-text36 {
            display: inline-block;
          }
          .navbar-interactive-desktop-text37 {
            display: inline-block;
          }
          .navbar-interactive-desktoproot-class-name {
            top: 22px;
            left: 0px;
            right: 0px;
            z-index: 100;
            position: sticky;
          }
          .navbar-interactive-desktoproot-class-name1 {
            top: var(--dl-layout-space-unit);
            left: 0px;
            right: 0px;
            position: fixed;
          }
          .navbar-interactive-desktoproot-class-name2 {
            top: 22px;
            left: 0px;
            right: 0px;
            z-index: 100;
            position: sticky;
          }
          .navbar-interactive-desktoproot-class-name3 {
            top: 22px;
            left: 0px;
            right: 0px;
            z-index: 100;
            position: sticky;
          }
          .navbar-interactive-desktoproot-class-name4 {
            top: 22px;
            left: 0px;
            right: 0px;
            z-index: 100;
            position: sticky;
          }
          @media (max-width: 991px) {
            .navbar-interactive-desktop-icon12 {
              fill: var(--dl-color-theme-accent1);
              width: 24px;
              height: 24px;
            }
            .navbar-interactive-desktop-thq-links-elm2 {
              width: 100%;
              align-items: center;
            }
            .navbar-interactive-desktop-text16 {
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .navbar-interactive-desktop-text17 {
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .navbar-interactive-desktop-text18 {
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .navbar-interactive-desktop-text19 {
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .navbar-interactive-desktop-text20 {
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .navbar-interactive-desktop-thq-buttons-elm2 {
              align-self: center;
              justify-content: center;
            }
            .navbar-interactive-desktop-thq-login-elm2 {
              border-color: var(--dl-color-theme-secondary2);
              margin-right: 0px;
              background-color: var(--dl-color-theme-neutral-light);
            }
            .navbar-interactive-desktop-text21 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
            }
            .navbar-interactive-desktop-thq-register-elm2 {
              display: none;
            }
            .navbar-interactive-desktoproot-class-name {
              margin-top: auto;
            }
            .navbar-interactive-desktoproot-class-name3 {
              margin-top: auto;
            }
            .navbar-interactive-desktoproot-class-name4 {
              margin-top: auto;
            }
          }
          @media (max-width: 767px) {
            .navbar-interactive-desktop-container1 {
              left: 0px;
              right: 0px;
              display: none;
              position: sticky;
            }
            .navbar-interactive-desktop-thq-navbar-interactive-elm {
              width: 100vw;
              position: relative;
              box-shadow: -5px -15px 20px 0px rgba(66, 150, 126, 0.41);
              margin-top: var(--dl-layout-space-unit);
              padding-top: 10px;
              border-color: rgba(14, 58, 47, 0.57);
              border-width: 0.6px;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: 10px;
              background-color: rgba(116, 198, 157, 0.55);
              border-top-width: 1px;
              border-left-width: 1px;
              border-right-width: 1px;
            }
            .navbar-interactive-desktop-thq-desktop-menu-elm {
              display: none;
            }
            .navbar-interactive-desktop-thq-burger-menu-elm {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navbar-interactive-desktop-icon10 {
              fill: var(--dl-color-theme-primary1);
              width: 28px;
              height: 28px;
            }
            .navbar-interactive-desktop-thq-mobile-menu-elm {
              top: 850px;
              left: 0px;
              right: 0px;
              bottom: 0px;
              height: 85vh;
              margin: auto;
              padding: var(--dl-layout-space-twounits);
              position: absolute;
              box-shadow: -13px -7px 25px 0px rgba(46, 99, 79, 0.22);
              border-color: rgba(238, 10, 231, 0.26);
              border-width: 1px;
              border-radius: var(--dl-layout-radius-buttonradius);
              justify-content: space-between;
            }
            .navbar-interactive-desktop-thq-top-elm {
              padding-top: var(--dl-layout-space-halfunit);
              border-color: rgba(238, 10, 231, 0.28);
              border-width: 1px;
              padding-bottom: var(--dl-layout-space-unit);
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
            }
            .navbar-interactive-desktop-icon12 {
              fill: var(--dl-color-theme-primary1);
              width: 28px;
              height: 28px;
            }
            .navbar-interactive-desktop-thq-links-elm2 {
              width: 100%;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar-interactive-desktop-text16 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              font-style: normal;
              font-family: Inter;
              font-weight: 500;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navbar-interactive-desktop-text17 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              font-style: normal;
              font-family: Inter;
              font-weight: 500;
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navbar-interactive-desktop-text18 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              font-style: normal;
              font-family: Inter;
              font-weight: 500;
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navbar-interactive-desktop-text19 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              font-style: normal;
              font-family: Inter;
              font-weight: 500;
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navbar-interactive-desktop-text20 {
              fill: var(--dl-color-theme-primary1);
              color: var(--dl-color-theme-primary1);
              font-style: normal;
              font-family: Inter;
              font-weight: 500;
              margin-left: 0;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .navbar-interactive-desktop-thq-buttons-elm2 {
              height: 50px;
            }
            .navbar-interactive-desktop-thq-login-elm2 {
              width: 100%;
              height: 40px;
              background-color: var(--dl-color-theme-primary1);
            }
            .navbar-interactive-desktop-text21 {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 500;
              border-color: var(--dl-color-theme-primary1);
              border-width: 1px;
            }
            .navbar-interactive-desktop-thq-register-elm2 {
              display: none;
            }
            .navbar-interactive-desktoproot-class-name {
              top: 0px;
              width: auto;
              display: none;
              position: fixed;
              margin-top: auto;
            }
            .navbar-interactive-desktoproot-class-name2 {
              display: none;
            }
            .navbar-interactive-desktoproot-class-name3 {
              top: 0px;
              width: auto;
              display: none;
              position: fixed;
              margin-top: auto;
            }
            .navbar-interactive-desktoproot-class-name4 {
              top: 0px;
              width: auto;
              display: none;
              position: fixed;
              margin-top: auto;
            }
          }
          @media (max-width: 400px) {
            .navbar-interactive-desktop-container1 {
              top: 0px;
              left: 0px;
              right: 0px;
              bottom: 0px;
              margin: auto;
              position: sticky;
            }
            .navbar-interactive-desktop-thq-navbar-interactive-elm {
              width: 100vw;
              margin-top: var(--dl-layout-space-unit);
            }
            .navbar-interactive-desktop-thq-mobile-menu-elm {
              top: 900px;
              left: 0px;
              right: 0px;
              height: 80vh;
              margin: auto;
              padding: 16px;
              position: absolute;
              margin-top: auto;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: 16px;
              justify-content: space-between;
            }
            .navbar-interactive-desktop-thq-links-elm2 {
              width: 100%;
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar-interactive-desktop-text21 {
              font-style: normal;
              font-family: Inter;
              font-weight: 500;
            }
            .navbar-interactive-desktoproot-class-name {
              left: 0px;
              right: 0px;
            }
            .navbar-interactive-desktoproot-class-name3 {
              left: 0px;
              right: 0px;
            }
            .navbar-interactive-desktoproot-class-name4 {
              left: 0px;
              right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

NavbarInteractiveDesktop.defaultProps = {
  text2: undefined,
  text1: undefined,
  register1: undefined,
  text3: undefined,
  login1: undefined,
  text121112: undefined,
  text6: undefined,
  text5: undefined,
  text9: undefined,
  button2112: undefined,
  rootClassName: '',
  register: undefined,
  text8: undefined,
  logoAlt: 'image',
  login: undefined,
  text4: undefined,
  text7: undefined,
}

NavbarInteractiveDesktop.propTypes = {
  text2: PropTypes.element,
  text1: PropTypes.element,
  register1: PropTypes.element,
  text3: PropTypes.element,
  login1: PropTypes.element,
  text121112: PropTypes.element,
  text6: PropTypes.element,
  text5: PropTypes.element,
  text9: PropTypes.element,
  button2112: PropTypes.element,
  rootClassName: PropTypes.string,
  register: PropTypes.element,
  text8: PropTypes.element,
  logoAlt: PropTypes.string,
  login: PropTypes.element,
  text4: PropTypes.element,
  text7: PropTypes.element,
}

export default NavbarInteractiveDesktop
