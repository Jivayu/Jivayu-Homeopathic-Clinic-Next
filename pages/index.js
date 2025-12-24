import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import NavbarInteractiveMobile from '../components/navbar-interactive-mobile'
import NavbarInteractiveDesktop from '../components/navbar-interactive-desktop'
import HeroMobile from '../components/hero-mobile'
import AccordionMobile from '../components/accordion-mobile'
import HeroDesktop from '../components/hero-desktop'
import FooterDesktop from '../components/footer-desktop'
import FooterMobile from '../components/footer-mobile'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>
            Jivayu Homeopathy Clinic | Best Homeopath in Wanadongri, Nagpur
          </title>
          <meta
            name="description"
            content="Jivayu Homeopathy Clinic Nagpur: Safe, effective cures by Dr. Priyanka Vishwakarma. Specializing in skin &amp; chronic ailments. Book your visit now!"
          />
          <meta
            property="og:title"
            content="Jivayu Homeopathy Clinic | Best Homeopath in Wanadongri, Nagpur"
          />
          <meta
            property="og:description"
            content="Restore your health naturally with Dr. Priyanka A. Vishwakarma. Safe, effective homeopathic treatments for skin, hair, and chronic ailments. Click to book your visit."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/febb924d-f351-4876-832a-cc978a689445/fc6f114e-5526-4eb4-a910-e5ebfc2c17da?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
          <link rel="canonical" href="https://jivayu.in" />
        </Head>
        <NavbarInteractiveMobile
          text={
            <Fragment>
              <span className="home-text100">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="home-text101">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text102">Features</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text103">Pricing</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text104">Team</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text105">Blog</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text106">Home</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text107">About</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-text108">Contact Us</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="home-text109">Book Now !</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="home-text110">Register</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="home-text111">Register</span>
            </Fragment>
          }
          rootClassName="navbar-interactive-mobileroot-class-name"
        ></NavbarInteractiveMobile>
        <NavbarInteractiveDesktop
          login={
            <Fragment>
              <span className="home-text112">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text113">About Me</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text114">Contacts</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text115">Team</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text116">Blog</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text117">Home</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text118">Features</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text119">Pricing</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text120">Team</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-text121">Blog</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="home-text122">Call Now !</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="home-text123">Google Profile</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="home-text124">Register</span>
            </Fragment>
          }
          button2112={
            <Fragment>
              <span className="home-text125">Visit Google Profile</span>
            </Fragment>
          }
          text121112={
            <Fragment>
              <span className="home-text126">Goolge Profile</span>
            </Fragment>
          }
          rootClassName="navbar-interactive-desktoproot-class-name"
        ></NavbarInteractiveDesktop>
        <HeroMobile
          text6={
            <Fragment>
              <span className="home-text127">
                Let&apos;s Up-Root Your Health Issues Naturally.
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-text128">
                Let&apos;s Up-Root Your Health Issues Naturally.
              </span>
            </Fragment>
          }
          text811={
            <Fragment>
              <span className="home-text129">
                क्लिनिक विजिट से पहले कृपया कॉल करें !
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text130">
                Where Health And Time Are Valued, Trust is Homeopathy.
              </span>
            </Fragment>
          }
          rootClassName="hero-mobileroot-class-name"
        ></HeroMobile>
        <AccordionMobile
          text1={
            <Fragment>
              <span className="home-text131">
                <span className="home-text132">
                  Bachelor of Homeopathic Medicine &amp; Surgery
                </span>
                <br className="home-text133"></br>
                <span className="home-text134">
                  Gondia Homeopathic Medical College Hospital, Gondia
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text136">
                Rajiv Nagar, Beside Indian Auto Gas pump, Front of Orient hotel,
                Hingna Road, Nagpur, Maharashtra, 440016
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="home-text137">
                <span className="home-text138">
                  Certificate in Clinical Medicine
                </span>
                <br className="home-text139"></br>
                <span className="home-text140">
                  Maharashtra University of Health Sciences, Pune
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          button1={
            <Fragment>
              <span className="home-text142">Visit Google Profile</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="home-text143">
                <span>
                  Registration No:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text145">66327</span>
                <br className="home-text146"></br>
                <span className="home-text147">
                  Maharashtra Council of Homoeopathy, Mumbai
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          button2132={
            <Fragment>
              <span className="home-text149">Visit Google Profile</span>
            </Fragment>
          }
          text121132={
            <Fragment>
              <span className="home-text150">12:01 PM To 02:00 PM</span>
            </Fragment>
          }
          button21321={
            <Fragment>
              <span className="home-text151">Visit Google Profile</span>
            </Fragment>
          }
          text1211321={
            <Fragment>
              <span className="home-text152">06:01 PM To 08:00 PM</span>
            </Fragment>
          }
          rootClassName="accordion-mobileroot-class-name"
        ></AccordionMobile>
        <HeroDesktop
          text={
            <Fragment>
              <span className="home-text153">Location</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text154">
                <span>Day Session    </span>
                <span>12:01 PM To 02:00 PM</span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text157">Monday To Saturday</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text158">Get Directions On Map</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text159">
                Please Call Before Clinic Visit
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="home-text160">+91 9823203912</span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="home-text161">
                <span>Please Call</span>
                <br></br>
                <span>Before Any Visit To Clinic.</span>
              </span>
            </Fragment>
          }
          text81={
            <Fragment>
              <span className="home-text165">
                कृपया क्लिनिकला भेट देण्याआधी कॉल करा
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-text166">
                Where Health And Time Are Valued, Trust is Homeopathy.
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="home-text167">Location</span>
            </Fragment>
          }
          text321={
            <Fragment>
              <span className="home-text168">Get Location Information.</span>
            </Fragment>
          }
          text811={
            <Fragment>
              <span className="home-text169">
                क्लिनिक विजिट से पहले कृपया कॉल करें
              </span>
            </Fragment>
          }
          button21={
            <Fragment>
              <span className="home-text170">Visit Google Profile</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text171">
                Let&apos;s Up-Root Your Health Issues Naturally.
              </span>
            </Fragment>
          }
          text1211={
            <Fragment>
              <span className="home-text172">12:01 PM To 02:00 PM</span>
            </Fragment>
          }
          button211={
            <Fragment>
              <span className="home-text173">Visit Google Profile</span>
            </Fragment>
          }
          button213={
            <Fragment>
              <span className="home-text174">Visit Google Profile</span>
            </Fragment>
          }
          button2112={
            <Fragment>
              <span className="home-text175">Visit Google Profile</span>
            </Fragment>
          }
          button2132={
            <Fragment>
              <span className="home-text176">Visit Google Profile</span>
            </Fragment>
          }
          button2133={
            <Fragment>
              <span className="home-text177">Visit Google Profile</span>
            </Fragment>
          }
          button2134={
            <Fragment>
              <span className="home-text178">Visit Google Profile</span>
            </Fragment>
          }
          button21321={
            <Fragment>
              <span className="home-text179">Visit Google Profile</span>
            </Fragment>
          }
          rootClassName="hero-desktoproot-class-name"
        ></HeroDesktop>
        <FooterDesktop
          text52={
            <Fragment>
              <span className="home-text180">About Me</span>
            </Fragment>
          }
          text53={
            <Fragment>
              <span className="home-text181">My Mentors</span>
            </Fragment>
          }
          text212={
            <Fragment>
              <span className="home-text182">Facebook Connect</span>
            </Fragment>
          }
          text213={
            <Fragment>
              <span className="home-text183">InstaGram Connect</span>
            </Fragment>
          }
          text521={
            <Fragment>
              <span className="home-text184">Google Profile</span>
            </Fragment>
          }
          text2121={
            <Fragment>
              <span className="home-text185">WhatsApp Connect</span>
            </Fragment>
          }
          text5211={
            <Fragment>
              <span className="home-text186">Contact Us</span>
            </Fragment>
          }
          text21211={
            <Fragment>
              <span className="home-text187">Google Reviews</span>
            </Fragment>
          }
          rootClassName="footer-desktoproot-class-name"
        ></FooterDesktop>
        <FooterMobile
          text={
            <Fragment>
              <span className="home-text188">Privacy Policy</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text189">Term of Use</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text190">Cookies Policy</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text191">My Mentors</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="home-text192">Website is in Development !</span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="home-text193">Google Reviews</span>
            </Fragment>
          }
          text56={
            <Fragment>
              <span className="home-text194">Contact Us</span>
            </Fragment>
          }
          text57={
            <Fragment>
              <span className="home-text195">Google Business Profile</span>
            </Fragment>
          }
          text58={
            <Fragment>
              <span className="home-text196">About Me</span>
            </Fragment>
          }
          text216={
            <Fragment>
              <span className="home-text197">WhatsApp Connect</span>
            </Fragment>
          }
          text217={
            <Fragment>
              <span className="home-text198">Facebook Connect</span>
            </Fragment>
          }
          text218={
            <Fragment>
              <span className="home-text199">Instagram Connect</span>
            </Fragment>
          }
          rootClassName="footer-mobileroot-class-name"
        ></FooterMobile>
        <a href="https://play.teleporthq.io/signup" className="home-link">
          <div aria-label="Sign up to TeleportHQ" className="home-container2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon1"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="home-text200">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .home-container1 {
            gap: 4;
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/images/jivayubackgroundimage-1500w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
          }
          .home-text105 {
            display: inline-block;
          }
          .home-text106 {
            display: inline-block;
          }
          .home-text107 {
            display: inline-block;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
          }
          .home-text117 {
            display: inline-block;
          }
          .home-text118 {
            display: inline-block;
          }
          .home-text119 {
            display: inline-block;
          }
          .home-text120 {
            display: inline-block;
          }
          .home-text121 {
            display: inline-block;
          }
          .home-text122 {
            display: inline-block;
          }
          .home-text123 {
            display: inline-block;
          }
          .home-text124 {
            display: inline-block;
          }
          .home-text125 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .home-text126 {
            display: inline-block;
            line-height: 1.6;
          }
          .home-text127 {
            display: inline-block;
          }
          .home-text128 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
          }
          .home-text129 {
            display: inline-block;
          }
          .home-text130 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
          }
          .home-text131 {
            display: inline-block;
          }
          .home-text132 {
            color: var(--dl-color-theme-primary1);
          }
          .home-text134 {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text136 {
            display: inline-block;
          }
          .home-text137 {
            display: inline-block;
          }
          .home-text138 {
            color: var(--dl-color-theme-primary1);
          }
          .home-text140 {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text142 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .home-text143 {
            display: inline-block;
          }
          .home-text145 {
            font-weight: 700;
          }
          .home-text147 {
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text149 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .home-text150 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .home-text151 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .home-text152 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .home-text153 {
            display: inline-block;
            line-height: 1.8;
          }
          .home-text154 {
            display: inline-block;
            font-size: 14px;
            font-weight: 700;
          }
          .home-text157 {
            display: inline-block;
            line-height: 1.8;
          }
          .home-text158 {
            display: inline-block;
            line-height: 1.8;
          }
          .home-text159 {
            display: inline-block;
          }
          .home-text160 {
            display: inline-block;
            line-height: 1.8;
          }
          .home-text161 {
            display: inline-block;
            font-size: 14px;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.8;
            letter-spacing: 1.2px;
          }
          .home-text165 {
            display: inline-block;
          }
          .home-text166 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
          }
          .home-text167 {
            display: inline-block;
            line-height: 1.8;
          }
          .home-text168 {
            display: inline-block;
            line-height: 1.8;
          }
          .home-text169 {
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text170 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .home-text171 {
            display: inline-block;
            border-color: var(--dl-color-theme-neutral-dark);
          }
          .home-text172 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .home-text173 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .home-text174 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .home-text175 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .home-text176 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .home-text177 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .home-text178 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .home-text179 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .home-text180 {
            display: inline-block;
          }
          .home-text181 {
            display: inline-block;
          }
          .home-text182 {
            display: inline-block;
          }
          .home-text183 {
            display: inline-block;
          }
          .home-text184 {
            display: inline-block;
          }
          .home-text185 {
            display: inline-block;
          }
          .home-text186 {
            display: inline-block;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: inline-block;
          }
          .home-text189 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: inline-block;
          }
          .home-text190 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: inline-block;
          }
          .home-text191 {
            display: inline-block;
          }
          .home-text192 {
            display: inline-block;
            line-height: 1.4;
          }
          .home-text193 {
            display: inline-block;
          }
          .home-text194 {
            display: inline-block;
          }
          .home-text195 {
            display: inline-block;
          }
          .home-text196 {
            display: inline-block;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
          }
          .home-text199 {
            display: inline-block;
          }
          .home-link {
            display: contents;
          }
          .home-container2 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon1 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text200 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .home-container1 {
              justify-content: flex-start;
            }
            .home-text154 {
              font-size: 12px;
            }
            .home-text161 {
              font-family: PoiretOne-Regular;
            }
          }
          @media (max-width: 767px) {
            .home-text109 {
              color: #fdfcfc;
            }
            .home-text132 {
              color: var(--dl-color-theme-primary1);
            }
            .home-text133 {
              font-size: 10px;
            }
            .home-text134 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .home-text136 {
              color: var(--dl-color-theme-primary1);
              font-size: 12px;
            }
            .home-text138 {
              color: var(--dl-color-theme-primary1);
            }
            .home-text139 {
              font-size: 10px;
            }
            .home-text140 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .home-text145 {
              font-weight: 700;
            }
            .home-text146 {
              font-size: 10px;
            }
            .home-text147 {
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .home-text188 {
              color: var(--dl-color-theme-accent2);
            }
            .home-text189 {
              color: var(--dl-color-theme-accent2);
            }
            .home-text190 {
              color: var(--dl-color-theme-accent2);
            }
            .home-text191 {
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .home-text192 {
              font-size: 10px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
              line-height: 1.4;
            }
          }
          @media (max-width: 400px) {
            .home-container1 {
              gap: 6px;
              align-items: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
