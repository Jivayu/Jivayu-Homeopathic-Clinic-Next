import React from 'react'

import { useTranslations } from 'next-intl'

const MapComponent = (props) => {
  return (
    <>
      <div className="map-component-container">
        <iframe
          src="https://www.google.com/maps?q=Jivayu Homeopathy Clinic&amp;output=embed"
          address="Jivayu Homeopathy Clinic"
          className="map-component-google-maps"
        ></iframe>
      </div>
      <style jsx>
        {`
          .map-component-container {
            display: contents;
          }
          .map-component-google-maps {
            width: 100%;
            height: 450px;
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

export default MapComponent
