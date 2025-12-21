import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import NavbarInteractiveMobile from '../components/navbar-interactive-mobile'
import NavbarInteractiveDesktop from '../components/navbar-interactive-desktop'
import AboutUsMain from '../components/about-us-main'
import AccordionMobile from '../components/accordion-mobile'
import FooterDesktop from '../components/footer-desktop'
import FooterMobile from '../components/footer-mobile'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container1">
        <Head>
          <title>About Dr. Priyanka Vishwakarma | Jivayu Homeopathy Nagpur</title>
          <meta
            name="description"
            content="Learn about Dr. Priyanka Vishwakarma, a leading Homeopathic doctor in Wanadongri, Nagpur. dedicated to natural and safe healing at Jivayu Clinic."
          />
          <meta
            property="og:title"
            content="About Dr. Priyanka Vishwakarma | Jivayu Homeopathy Nagpur"
          />
          <meta
            property="og:description"
            content="Learn about Dr. Priyanka Vishwakarma, a leading Homeopathic doctor in Wanadongri, Nagpur. dedicated to natural and safe healing at Jivayu Clinic."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/febb924d-f351-4876-832a-cc978a689445/5b3e8592-8d1e-4a94-b316-5581eecbdacb?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
          <link rel="canonical" href="https://jivayu.in/about-us" />
        </Head>
        <NavbarInteractiveMobile
          text={
            <Fragment>
              <span className="about-us-text10">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="about-us-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-us-text12">Features</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-us-text13">Pricing</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="about-us-text14">Team</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="about-us-text15">Blog</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="about-us-text16">Home</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="about-us-text17">About</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="about-us-text18">Contact Us</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="about-us-text19">Book Now !</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="about-us-text20">Register</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="about-us-text21">Register</span>
            </Fragment>
          }
          rootClassName="navbar-interactive-mobileroot-class-name2"
        ></NavbarInteractiveMobile>
        <NavbarInteractiveDesktop
          login={
            <Fragment>
              <span className="about-us-text22">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-us-text23">About Me</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-us-text24">Contacts</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="about-us-text25">Team</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="about-us-text26">Blog</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="about-us-text27">Home</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="about-us-text28">Features</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="about-us-text29">Pricing</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="about-us-text30">Team</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="about-us-text31">Blog</span>
            </Fragment>
          }
          login1={
            <Fragment>
              <span className="about-us-text32">Call Now !</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="about-us-text33">Google Profile</span>
            </Fragment>
          }
          register1={
            <Fragment>
              <span className="about-us-text34">Register</span>
            </Fragment>
          }
          button2112={
            <Fragment>
              <span className="about-us-text35">Visit Google Profile</span>
            </Fragment>
          }
          text121112={
            <Fragment>
              <span className="about-us-text36">Goolge Profile</span>
            </Fragment>
          }
          rootClassName="navbar-interactive-desktoproot-class-name3"
        ></NavbarInteractiveDesktop>
        <AboutUsMain
          text={
            <Fragment>
              <span className="about-us-text37">
                Please Call Before Clinic Visit
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-us-text38">
                कृपया क्लिनिकला भेट देण्याआधी कॉल करा
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-us-text39">
                क्लिनिक विजिट से पहले कृपया कॉल करें
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="about-us-text40">Location</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="about-us-text41">Monday To Saturday</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="about-us-text42">
                <span>Please Call</span>
                <br></br>
                <span>Before Any Visit To Clinic.</span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="about-us-text46">Location</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="about-us-text47">Get Location Information.</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="about-us-text48">
                <span>Day Session    </span>
                <span>12:01 PM To 02:00 PM</span>
              </span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="about-us-text51">
                Evening Session 6:01 PM To 08:00 PM
              </span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="about-us-text52">Get Directions On Map</span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="about-us-text53">
                Dr. Priyanka Nagpure is a seasoned homeopathic physician with 8
                years of experience in providing compassionate and effective
                care. She completed her Bachelor of Homeopathic Medicine and
                Surgery (BHMS) degree in 2017 from Maharashtra University of
                Health Sciences, Nashik, and College of Gondia Homeopathic
                Medical College Hospital.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-us-text54">
                &quot;I successfully completed my Bachelor of Homeopathic
                Medicine and Surgery (BHMS) degree from &quot;Gondia Homeopathic
                Medical College Hospital&quot; in 2017.&quot; &quot;Throughout
                my undergraduate studies, I consistently achieved high academic
                standing, culminating in a 2nd rank in my graduating
                class.&quot; &quot;My strong academic performance was a result
                of my dedication, hard work, and passion for homeopathic
                medicine.&quot;
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="about-us-text55">+91 9823203912</span>
            </Fragment>
          }
          rootClassName="about-us-mainroot-class-name"
        ></AboutUsMain>
        <AccordionMobile
          text1={
            <Fragment>
              <span className="about-us-text56">
                <span className="about-us-text57">
                  Bachelor of Homeopathic Medicine &amp; Surgery
                </span>
                <br className="about-us-text58"></br>
                <span className="about-us-text59">
                  Gondia Homeopathic Medical College Hospital, Gondia
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="about-us-text61">
                Rajiv Nagar, Beside Indian Auto Gas pump, Front of Orient hotel,
                Hingna Road, Nagpur, Maharashtra, 440016
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="about-us-text62">
                <span className="about-us-text63">
                  Certificate in Clinical Medicine
                </span>
                <br className="about-us-text64"></br>
                <span className="about-us-text65">
                  Maharashtra University of Health Sciences, Pune
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          button1={
            <Fragment>
              <span className="about-us-text67">Visit Google Profile</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="about-us-text68">
                <span>
                  Registration No:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="about-us-text70">66327</span>
                <br className="about-us-text71"></br>
                <span className="about-us-text72">
                  Maharashtra Council of Homoeopathy, Mumbai
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          button2132={
            <Fragment>
              <span className="about-us-text74">Visit Google Profile</span>
            </Fragment>
          }
          text121132={
            <Fragment>
              <span className="about-us-text75">12:01 PM To 02:00 PM</span>
            </Fragment>
          }
          button21321={
            <Fragment>
              <span className="about-us-text76">Visit Google Profile</span>
            </Fragment>
          }
          text1211321={
            <Fragment>
              <span className="about-us-text77">06:01 PM To 08:00 PM</span>
            </Fragment>
          }
          rootClassName="accordion-mobileroot-class-name1"
        ></AccordionMobile>
        <FooterDesktop
          text52={
            <Fragment>
              <span className="about-us-text78">About Me</span>
            </Fragment>
          }
          text53={
            <Fragment>
              <span className="about-us-text79">My Mentors</span>
            </Fragment>
          }
          text212={
            <Fragment>
              <span className="about-us-text80">Facebook Connect</span>
            </Fragment>
          }
          text213={
            <Fragment>
              <span className="about-us-text81">InstaGram Connect</span>
            </Fragment>
          }
          text521={
            <Fragment>
              <span className="about-us-text82">Google Profile</span>
            </Fragment>
          }
          text2121={
            <Fragment>
              <span className="about-us-text83">WhatsApp Connect</span>
            </Fragment>
          }
          text5211={
            <Fragment>
              <span className="about-us-text84">Contact Us</span>
            </Fragment>
          }
          text21211={
            <Fragment>
              <span className="about-us-text85">Google Reviews</span>
            </Fragment>
          }
          rootClassName="footer-desktoproot-class-name3"
        ></FooterDesktop>
        <FooterMobile
          text={
            <Fragment>
              <span className="about-us-text86">Privacy Policy</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-us-text87">Term of Use</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-us-text88">Cookies Policy</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="about-us-text89">My Mentors</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="about-us-text90">
                Website is in Development !
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="about-us-text91">Google Reviews</span>
            </Fragment>
          }
          text56={
            <Fragment>
              <span className="about-us-text92">Contact Us</span>
            </Fragment>
          }
          text57={
            <Fragment>
              <span className="about-us-text93">Google Business Profile</span>
            </Fragment>
          }
          text58={
            <Fragment>
              <span className="about-us-text94">About Me</span>
            </Fragment>
          }
          text216={
            <Fragment>
              <span className="about-us-text95">WhatsApp Connect</span>
            </Fragment>
          }
          text217={
            <Fragment>
              <span className="about-us-text96">Facebook Connect</span>
            </Fragment>
          }
          text218={
            <Fragment>
              <span className="about-us-text97">Instagram Connect</span>
            </Fragment>
          }
          rootClassName="footer-mobileroot-class-name2"
        ></FooterMobile>
       </div>
      <style jsx>
        {`
          .about-us-container1 {
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
          .about-us-text10 {
            display: inline-block;
          }
          .about-us-text11 {
            display: inline-block;
          }
          .about-us-text12 {
            display: inline-block;
          }
          .about-us-text13 {
            display: inline-block;
          }
          .about-us-text14 {
            display: inline-block;
          }
          .about-us-text15 {
            display: inline-block;
          }
          .about-us-text16 {
            display: inline-block;
          }
          .about-us-text17 {
            display: inline-block;
          }
          .about-us-text18 {
            display: inline-block;
          }
          .about-us-text19 {
            display: inline-block;
          }
          .about-us-text20 {
            display: inline-block;
          }
          .about-us-text21 {
            display: inline-block;
          }
          .about-us-text22 {
            display: inline-block;
          }
          .about-us-text23 {
            display: inline-block;
          }
          .about-us-text24 {
            display: inline-block;
          }
          .about-us-text25 {
            display: inline-block;
          }
          .about-us-text26 {
            display: inline-block;
          }
          .about-us-text27 {
            display: inline-block;
          }
          .about-us-text28 {
            display: inline-block;
          }
          .about-us-text29 {
            display: inline-block;
          }
          .about-us-text30 {
            display: inline-block;
          }
          .about-us-text31 {
            display: inline-block;
          }
          .about-us-text32 {
            display: inline-block;
          }
          .about-us-text33 {
            display: inline-block;
          }
          .about-us-text34 {
            display: inline-block;
          }
          .about-us-text35 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .about-us-text36 {
            display: inline-block;
            line-height: 1.6;
          }
          .about-us-text37 {
            display: inline-block;
          }
          .about-us-text38 {
            display: inline-block;
          }
          .about-us-text39 {
            display: inline-block;
          }
          .about-us-text40 {
            display: inline-block;
          }
          .about-us-text41 {
            display: inline-block;
          }
          .about-us-text42 {
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
          .about-us-text46 {
            display: inline-block;
          }
          .about-us-text47 {
            display: inline-block;
          }
          .about-us-text48 {
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
          .about-us-text51 {
            display: inline-block;
          }
          .about-us-text52 {
            display: inline-block;
          }
          .about-us-text53 {
            display: inline-block;
          }
          .about-us-text54 {
            display: inline-block;
          }
          .about-us-text55 {
            display: inline-block;
          }
          .about-us-text56 {
            display: inline-block;
          }
          .about-us-text57 {
            color: var(--dl-color-theme-primary1);
          }
          .about-us-text59 {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .about-us-text61 {
            display: inline-block;
          }
          .about-us-text62 {
            display: inline-block;
          }
          .about-us-text63 {
            color: var(--dl-color-theme-primary1);
          }
          .about-us-text65 {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .about-us-text67 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .about-us-text68 {
            display: inline-block;
          }
          .about-us-text70 {
            font-weight: 700;
          }
          .about-us-text72 {
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
          }
          .about-us-text74 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .about-us-text75 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .about-us-text76 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.4;
          }
          .about-us-text77 {
            display: inline-block;
            font-weight: 700;
            line-height: 1.6;
          }
          .about-us-text78 {
            display: inline-block;
          }
          .about-us-text79 {
            display: inline-block;
          }
          .about-us-text80 {
            display: inline-block;
          }
          .about-us-text81 {
            display: inline-block;
          }
          .about-us-text82 {
            display: inline-block;
          }
          .about-us-text83 {
            display: inline-block;
          }
          .about-us-text84 {
            display: inline-block;
          }
          .about-us-text85 {
            display: inline-block;
          }
          .about-us-text86 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: inline-block;
          }
          .about-us-text87 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: inline-block;
          }
          .about-us-text88 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            display: inline-block;
          }
          .about-us-text89 {
            display: inline-block;
          }
          .about-us-text90 {
            display: inline-block;
            line-height: 1.4;
          }
          .about-us-text91 {
            display: inline-block;
          }
          .about-us-text92 {
            display: inline-block;
          }
          .about-us-text93 {
            display: inline-block;
          }
          .about-us-text94 {
            display: inline-block;
          }
          .about-us-text95 {
            display: inline-block;
          }
          .about-us-text96 {
            display: inline-block;
          }
          .about-us-text97 {
            display: inline-block;
          }
          .about-us-link {
            display: contents;
          }
          .about-us-container2 {
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
          .about-us-icon1 {
            width: 24px;
            margin-right: 4px;
          }
          .about-us-text98 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .about-us-container1 {
              justify-content: flex-start;
            }
            .about-us-text42 {
              font-size: 12px;
              margin-top: 4px;
              text-align: center;
              font-family: PoiretOne-Regular;
            }
            .about-us-text48 {
              font-size: 12px;
            }
          }
          @media (max-width: 767px) {
            .about-us-text19 {
              color: #fdfcfc;
            }
            .about-us-text57 {
              color: var(--dl-color-theme-primary1);
            }
            .about-us-text58 {
              font-size: 10px;
            }
            .about-us-text59 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .about-us-text61 {
              color: var(--dl-color-theme-primary1);
              font-size: 12px;
            }
            .about-us-text63 {
              color: var(--dl-color-theme-primary1);
            }
            .about-us-text64 {
              font-size: 10px;
            }
            .about-us-text65 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .about-us-text70 {
              font-weight: 700;
            }
            .about-us-text71 {
              font-size: 10px;
            }
            .about-us-text72 {
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .about-us-text86 {
              color: var(--dl-color-theme-accent2);
            }
            .about-us-text87 {
              color: var(--dl-color-theme-accent2);
            }
            .about-us-text88 {
              color: var(--dl-color-theme-accent2);
            }
            .about-us-text89 {
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .about-us-text90 {
              font-size: 10px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
              line-height: 1.4;
            }
          }
          @media (max-width: 400px) {
            .about-us-container1 {
              gap: 6px;
              align-items: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
