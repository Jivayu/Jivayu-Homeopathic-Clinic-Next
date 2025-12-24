import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HeroImage = (props) => {
  return (
    <>
      <div className="hero-image-container">
        <img
          alt={props.imageAlt1}
          sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
          src="/images/consultation-1500w.webp"
          srcSet="/images/consultation-1500w.webp 1200w, /images/consultation-tablet.webp 800w, /images/consultation-mobile.webp 480w"
          className="hero-image-image"
        />
      </div>
      <style jsx>
        {`
          .hero-image-container {
            display: contents;
          }
          .hero-image-image {
            width: 20em;
            align-self: center;
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .hero-image-image {
              width: 24em;
              align-self: center;
              border-radius: var(--dl-layout-radius-buttonradius);
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

HeroImage.defaultProps = {
  imageAlt1: 'image',
}

HeroImage.propTypes = {
  imageAlt1: PropTypes.string,
}

export default HeroImage
