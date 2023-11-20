'use client'
import React from 'react'
import Script from 'next/script'

const Gtag = () => {
  return (
    <div className='gtag-script'>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-926XD88T4C"></Script>
        <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-926XD88T4C');
        `}
        </Script>
  </div>
  )
}

export default Gtag