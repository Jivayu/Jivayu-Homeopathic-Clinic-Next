import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import NavbarInteractiveMobile from '../components/navbar-interactive-mobile'
import NavbarInteractiveDesktop from '../components/navbar-interactive-desktop'
import ContactDesktop from '../components/contact-desktop'
import AccordionMobile from '../components/accordion-mobile'
import FooterDesktop from '../components/footer-desktop'
import FooterMobile from '../components/footer-mobile'

const Contacts = (props) => {
  return (
    <>
      <div className="contacts-container1">
        <Head>
          <title>Homeopathic Doctor | Clinic Location</title>
          <meta
            name="description"
            content="Homeopathic Consultation With Dr. Priyanka A Vishwakarma at Jivayu Homeopathic Clinic  in Nagpur. Visit Via Google Location."
          />
          <meta
            property="og:title"
            content="Homeopathic Doctor | Clinic Location"
          />
          <meta
            property="og:description"
            content="Restore your health naturally with Dr. Priyanka A. Vishwakarma. Safe, effective homeopathic treatments for skin, hair, and chronic ailments. Click to book your visit."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/febb924d-f351-4876-832a-cc978a689445/9e8a7fe5-fdea-4c08-9115-4edcb489d808?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
          <link
            rel="canonical"
            href="https://jivayu.in/contacts"
          />
        </Head>
        <NavbarInteractiveMobile
          text={
            <Fragment>
              <span className="contacts-text10">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="contacts-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="contacts-text12">Features</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="contacts-text13">Pricing</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="contacts-text14">Team</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="contacts-text15">Blog</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="contacts-text16">Home</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="contacts-text17">About</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="contacts-text18">Contact Us</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="contacts-text19">Book Now !</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="contacts-text20">Register</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="contacts-text21">Register</span>
            </Fragment>
          }
          rootClassName="navbar-interactive-mobileroot-class-name3"
        ></NavbarInteractiveMobile>
        <NavbarInteractiveDesktop
          login={
            <Fragment>
              <span className="contacts-text22">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="contacts-text23">About Me</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="contacts-text24">Contacts</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="contacts-text25">Team</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="contacts-text26">Blog</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="contacts-text27">Home</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="contacts-text28">Features</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="contacts-text29">Pricing</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="contacts-text30">Team</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="contacts-text31">Blog</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="contacts-text32">Call Now !</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="contacts-text33">Google Profile</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="contacts-text34">Register</span>
            </Fragment>
          }
          button2112={
            <Fragment>
              <span className="contacts-text35">Visit Google Profile</span>
            </Fragment>
          }
          text121112={
            <Fragment>
              <span className="contacts-text36">Goolge Profile</span>
            </Fragment>
          }
          rootClassName="navbar-interactive-desktoproot-class-name4"
        ></NavbarInteractiveDesktop>
        <ContactDesktop
          text={
            <Fragment>
              <span className="contacts-text37">Location</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="contacts-text38">Google Rating</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="contacts-text39">
                <span>Day Session    </span>
                <span>12:01 PM To 02:00 PM</span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="contacts-text42">Monday To Saturday</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="contacts-text43">Get Directions On Map</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="contacts-text44">
                Please Call Before Clinic Visit
              </span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="contacts-text45">Visit Google Profile</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="contacts-text46">Google Profile</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="contacts-text47">Verified</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="contacts-text48">+91 9823203912</span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="contacts-text49">
                <span>Please Call</span>
                <br></br>
                <span>Before Any Visit To Clinic.</span>
              </span>
            </Fragment>
          }
          text81={
            <Fragment>
              <span className="contacts-text53">
                कृपया क्लिनिकला भेट देण्याआधी कॉल करा
              </span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="contacts-text54">Location</span>
            </Fragment>
          }
          text321={
            <Fragment>
              <span className="contacts-text55">Get Location Information.</span>
            </Fragment>
          }
          text811={
            <Fragment>
              <span className="contacts-text56">
                क्लिनिक विजिट से पहले कृपया कॉल करें
              </span>
            </Fragment>
          }
          button21={
            <Fragment>
              <span className="contacts-text57">Visit Google Profile</span>
            </Fragment>
          }
          text1211={
            <Fragment>
              <span className="contacts-text58">12:01 PM To 02:00 PM</span>
            </Fragment>
          }
          button211={
            <Fragment>
              <span className="contacts-text59">Visit Google Profile</span>
            </Fragment>
          }
          button213={
            <Fragment>
              <span className="contacts-text60">Visit Google Profile</span>
            </Fragment>
          }
          button2112={
            <Fragment>
              <span className="contacts-text61">Visit Google Profile</span>
            </Fragment>
          }
          button2132={
            <Fragment>
              <span className="contacts-text62">Visit Google Profile</span>
            </Fragment>
          }
          button2133={
            <Fragment>
              <span className="contacts-text63">Visit Google Profile</span>
            </Fragment>
          }
          button2134={
            <Fragment>
              <span className="contacts-text64">Visit Google Profile</span>
            </Fragment>
          }
          button21321={
            <Fragment>
              <span className="contacts-text65">Visit Google Profile</span>
            </Fragment>
          }
          rootClassName="contact-desktoproot-class-name2"
        ></ContactDesktop>
        <AccordionMobile
          text1={
            <Fragment>
              <span className="contacts-text66">
                <span className="contacts-text67">
                  Bachelor of Homeopathic Medicine &amp; Surgery
                </span>
                <br className="contacts-text68"></br>
                <span className="contacts-text69">
                  Gondia Homeopathic Medical College Hospital, Gondia
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="contacts-text71">
                Rajiv Nagar, Beside Indian Auto Gas pump, Front of Orient hotel,
                Hingna Road, Nagpur, Maharashtra, 440016
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="contacts-text72">
                <span className="contacts-text73">
                  Certificate in Clinical Medicine
                </span>
                <br className="contacts-text74"></br>
                <span className="contacts-text75">
                  Maharashtra University of Health Sciences, Pune
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          button1={
            <Fragment>
              <span className="contacts-text77">Visit Google Profile</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="contacts-text78">
                <span>
                  Registration No:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="contacts-text80">66327</span>
                <br className="contacts-text81"></br>
                <span className="contacts-text82">
                  Maharashtra Council of Homoeopathy, Mumbai
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          button2132={
            <Fragment>
              <span className="contacts-text84">Visit Google Profile</span>
            </Fragment>
          }
          text121132={
            <Fragment>
              <span className="contacts-text85">12:01 PM To 02:00 PM</span>
            </Fragment>
          }
          button21321={
            <Fragment>
              <span className="contacts-text86">Visit Google Profile</span>
            </Fragment>
          }
          text1211321={
            <Fragment>
              <span className="contacts-text87">06:01 PM To 08:00 PM</span>
            </Fragment>
          }
          rootClassName="accordion-mobileroot-class-name2"
        ></AccordionMobile>
        <FooterDesktop
          text52={
            <Fragment>
              <span className="contacts-text88">About Me</span>
            </Fragment>
          }
          text53={
            <Fragment>
              <span className="contacts-text89">My Mentors</span>
            </Fragment>
          }
          text212={
            <Fragment>
              <span className="contacts-text90">Facebook Connect</span>
            </Fragment>
          }
          text213={
            <Fragment>
              <span className="contacts-text91">InstaGram Connect</span>
            </Fragment>
          }
          text521={
            <Fragment>
              <span className="contacts-text92">Google Profile</span>
            </Fragment>
          }
          text2121={
            <Fragment>
              <span className="contacts-text93">WhatsApp Connect</span>
            </Fragment>
          }
          text5211={
            <Fragment>
              <span className="contacts-text94">Contact Us</span>
            </Fragment>
          }
          text21211={
            <Fragment>
              <span className="contacts-text95">Google Reviews</span>
            </Fragment>
          }
          rootClassName="footer-desktoproot-class-name4"
        ></FooterDesktop>
        <FooterMobile
          text={
            <Fragment>
              <span className="contacts-text96">Privacy Policy</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="contacts-text97">Term of Use</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="contacts-text98">Cookies Policy</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="contacts-text99">My Mentors</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="contacts-text100">
                Website is in Development !
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="contacts-text101">Google Reviews</span>
            </Fragment>
          }
          text56={
            <Fragment>
              <span className="contacts-text102">Contact Us</span>
            </Fragment>
          }
          text57={
            <Fragment>
              <span className="contacts-text103">Google Business Profile</span>
            </Fragment>
          }
          text58={
            <Fragment>
              <span className="contacts-text104">About Me</span>
            </Fragment>
          }
          text216={
            <Fragment>
              <span className="contacts-text105">WhatsApp Connect</span>
            </Fragment>
          }
          text217={
            <Fragment>
              <span className="contacts-text106">Facebook Connect</span>
            </Fragment>
          }
          text218={
            <Fragment>
              <span className="contacts-text107">Instagram Connect</span>
            </Fragment>
          }
          rootClassName="footer-mobileroot-class-name3"
        ></FooterMobile>
        </div>
      <style jsx>
        {`
          .contacts-container1 {
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
          .contacts-text10 {
            display: inline-block;
          }
          .contacts-text11 {
            display: inline-block;
          }
          .contacts-text12 {
            display: inline-block;
          }
          .contacts-text13 {
            display: inline-block;
          }
          .contacts-text14 {
            display: inline-block;
          }
          .contacts-text15 {
            display: inline-block;
          }
          .contacts-text16 {
            display: inline-block;
          }
          .contacts-text17 {
            display: inline-block;
          }
          .contacts-text18 {
            display: inline-block;
          }
          .contacts-text19 {
            display: inline-block;
          }
          .contacts-text20 {
            display: inline-block;
          }
          .contacts-text21 {
            display: inline-block;
          }
          .contacts-text22 {
            display: inline-block;
          }
          .contacts-text23 {
            display: inline-block;
          }
          .contacts-text24 {
            display: inline-block;
          }
          .contacts-text25 {
            display: inline-block;
          }
          .contacts-text26 {
            display: inline-block;
          }
          .contacts-text27 {
            display: inline-block;
          }
          .contacts-text28 {
            display: inline-block;
          }
          .contacts-text29 {
            display: inline-block;
          }
          .contacts-text30 {
            display: inline-block;
          }
          .contacts-text31 {
            display: inline-block;
          }
          .contacts-text32 {
            display: inline-block;
          }
          .contacts-text33 {
            display: inline-block;
          }
          .contacts-text34 {
            display: inline-block;
          }
          .contacts-text35 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contacts-text36 {
            display: inline-block;
            line-height: 1.6;
          }
          .contacts-text37 {
            display: inline-block;
            line-height: 1.8;
          }
          .contacts-text38 {
            display: inline-block;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 300;
          }
          .contacts-text39 {
            display: inline-block;
            font-size: 14px;
            font-weight: 700;
          }
          .contacts-text42 {
            display: inline-block;
            line-height: 1.8;
          }
          .contacts-text43 {
            display: inline-block;
            line-height: 1.8;
          }
          .contacts-text44 {
            display: inline-block;
          }
          .contacts-text45 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contacts-text46 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .contacts-text47 {
            display: inline-block;
            line-height: 1.4;
          }
          .contacts-text48 {
            display: inline-block;
            line-height: 1.8;
          }
          .contacts-text49 {
            display: inline-block;
            font-size: 14px;
            font-family: 'PoiretOne-Regular';
            font-weight: 700;
            line-height: 1.8;
            letter-spacing: 1.2px;
          }
          .contacts-text53 {
            display: inline-block;
          }
          .contacts-text54 {
            display: inline-block;
            line-height: 1.8;
          }
          .contacts-text55 {
            display: inline-block;
            line-height: 1.8;
          }
          .contacts-text56 {
            display: inline-block;
            font-family: 'Inter';
          }
          .contacts-text57 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contacts-text58 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .contacts-text59 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contacts-text60 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contacts-text61 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contacts-text62 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contacts-text63 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contacts-text64 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contacts-text65 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contacts-text66 {
            display: inline-block;
          }
          .contacts-text67 {
            color: var(--dl-color-theme-primary1);
          }
          .contacts-text69 {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .contacts-text71 {
            display: inline-block;
          }
          .contacts-text72 {
            display: inline-block;
          }
          .contacts-text73 {
            color: var(--dl-color-theme-primary1);
          }
          .contacts-text75 {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .contacts-text77 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contacts-text78 {
            display: inline-block;
          }
          .contacts-text80 {
            font-weight: 700;
          }
          .contacts-text82 {
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .contacts-text84 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contacts-text85 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .contacts-text86 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .contacts-text87 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .contacts-text88 {
            display: inline-block;
          }
          .contacts-text89 {
            display: inline-block;
          }
          .contacts-text90 {
            display: inline-block;
          }
          .contacts-text91 {
            display: inline-block;
          }
          .contacts-text92 {
            display: inline-block;
          }
          .contacts-text93 {
            display: inline-block;
          }
          .contacts-text94 {
            display: inline-block;
          }
          .contacts-text95 {
            display: inline-block;
          }
          .contacts-text96 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: inline-block;
          }
          .contacts-text97 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: inline-block;
          }
          .contacts-text98 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: inline-block;
          }
          .contacts-text99 {
            display: inline-block;
          }
          .contacts-text100 {
            display: inline-block;
            line-height: 1.4;
          }
          .contacts-text101 {
            display: inline-block;
          }
          .contacts-text102 {
            display: inline-block;
          }
          .contacts-text103 {
            display: inline-block;
          }
          .contacts-text104 {
            display: inline-block;
          }
          .contacts-text105 {
            display: inline-block;
          }
          .contacts-text106 {
            display: inline-block;
          }
          .contacts-text107 {
            display: inline-block;
          }
          .contacts-link {
            display: contents;
          }
          .contacts-container2 {
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
          .contacts-icon1 {
            width: 24px;
            margin-right: 4px;
          }
          .contacts-text108 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .contacts-container1 {
              justify-content: flex-start;
            }
            .contacts-text39 {
              font-size: 12px;
            }
            .contacts-text49 {
              font-family: PoiretOne-Regular;
            }
          }
          @media (max-width: 767px) {
            .contacts-text19 {
              color: #fdfcfc;
            }
            .contacts-text67 {
              color: var(--dl-color-theme-primary1);
            }
            .contacts-text68 {
              font-size: 10px;
            }
            .contacts-text69 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .contacts-text71 {
              color: var(--dl-color-theme-primary1);
              font-size: 12px;
            }
            .contacts-text73 {
              color: var(--dl-color-theme-primary1);
            }
            .contacts-text74 {
              font-size: 10px;
            }
            .contacts-text75 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .contacts-text80 {
              font-weight: 700;
            }
            .contacts-text81 {
              font-size: 10px;
            }
            .contacts-text82 {
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .contacts-text96 {
              color: var(--dl-color-theme-accent2);
            }
            .contacts-text97 {
              color: var(--dl-color-theme-accent2);
            }
            .contacts-text98 {
              color: var(--dl-color-theme-accent2);
            }
            .contacts-text99 {
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .contacts-text100 {
              font-size: 10px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
              line-height: 1.4;
            }
          }
          @media (max-width: 400px) {
            .contacts-container1 {
              gap: 6px;
              align-items: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contacts
