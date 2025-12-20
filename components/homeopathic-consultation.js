import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HomeopathicConsultation = (props) => {
  return (
    <>
      <div
        className={`homeopathic-consultation-container ${props.rootClassName} `}
      >
        <img
          id="doctor"
          alt={props.imageAlt3}
          src="/images/homeopathic%20consultations-200h.webp"
          loading="lazy"
          className="homeopathic-consultation-image"
        />
      </div>
      <style jsx>
        {`
          .homeopathic-consultation-container {
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .homeopathic-consultation-image {
            width: 60%;
            height: auto;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-buttonradius);
            backdrop-filter: blur(5px);
          }

          @media (max-width: 991px) {
            .homeopathic-consultation-image {
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

HomeopathicConsultation.defaultProps = {
  imageAlt3: 'image',
  rootClassName: '',
}

HomeopathicConsultation.propTypes = {
  imageAlt3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HomeopathicConsultation
