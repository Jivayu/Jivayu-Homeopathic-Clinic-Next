import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HConsultationImage = (props) => {
  return (
    <>
      <div className="h-consultation-image-container">
        <img
          alt={props.imageAlt3}
          src="/images/homeopathic%20consultations-200h.webp"
          className="h-consultation-image-image"
        />
      </div>
      <style jsx>
        {`
          .h-consultation-image-container {
            display: contents;
          }
          .h-consultation-image-image {
            width: 200px;
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .h-consultation-image-image {
              top: 43px;
              left: 0px;
              right: 0px;
              width: var(--dl-layout-size-xlarge);
              margin: auto;
              position: absolute;
            }
          }
          @media (max-width: 400px) {
            .h-consultation-image-image {
              top: -52px;
              left: 0px;
              right: 0px;
              width: var(--dl-layout-size-xlarge);
              margin: auto;
              margin-left: auto;
            }
          }
        `}
      </style>
    </>
  )
}

HConsultationImage.defaultProps = {
  imageAlt3: 'image',
}

HConsultationImage.propTypes = {
  imageAlt3: PropTypes.string,
}

export default HConsultationImage
