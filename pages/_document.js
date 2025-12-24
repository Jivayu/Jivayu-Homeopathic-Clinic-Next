import Document, { Html, Head, Main, NextScript } from 'next/document'
class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;  -webkit-font-smoothing: antialiased;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;  color: inherit;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}pre {  white-space: normal;}input {  padding: 2px 4px;}img {  display: block;}details {  display: block;  margin: 0;  padding: 0;}summary::-webkit-details-marker {  display: none;}[data-thq="accordion"] [data-thq="accordion-content"] {  max-height: 0;  overflow: hidden;  transition: max-height 0.3s ease-in-out;  padding: 0;}[data-thq="accordion"] details[data-thq="accordion-trigger"][open] + [data-thq="accordion-content"] {  max-height: 1000vh;}details[data-thq="accordion-trigger"][open] summary [data-thq="accordion-icon"] {  transform: rotate(180deg);}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: PoiretOne-Regular;\n    font-size: 14px;\n  }\n\n  body {\n    font-weight: 700;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: 1.1;\n    line-height: 1.6;\n    color: var(--dl-color-theme-neutral-dark);\n    background: var(--dl-color-theme-neutral-light);\n    \n    fill: var(--dl-color-theme-neutral-dark);\n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="stylesheet"
            href="https://unpkg.com/animate.css@4.1.1/animate.css"
          ></link>
          <link
            rel="shortcut icon"
            href="/jivayu-icon-32x32.png"
            type="icon/png"
            sizes="32x32"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
          ></link>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                "</noscript><script>\r\n  // 1. Initialize dataLayer immediately (Critical so pushes don't fail)\r\n  window.dataLayer = window.dataLayer || [];\r\n  function gtag(){dataLayer.push(arguments);}\r\n\r\n  // 2. The Delayed Loader Function\r\n  (function() {\r\n    var gtmId = 'GTM-5ZK6WDS'; \r\n    var gtmLoaded = false;\r\n\r\n    function loadGTM() {\r\n        if (gtmLoaded) return;\r\n        gtmLoaded = true;\r\n\r\n        // The Standard GTM Snippet (Wrapped to execute later)\r\n        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\r\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\r\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\r\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\r\n        })(window,document,'script','dataLayer', gtmId);\r\n\r\n        // Remove listeners so it doesn't try to load again\r\n        ['mousemove', 'touchstart', 'scroll', 'keydown'].forEach(function(e) {\r\n            window.removeEventListener(e, loadGTM);\r\n        });\r\n    }\r\n\r\n    // Trigger 1: Load on User Interaction (Mouse, Touch, Scroll)\r\n    ['mousemove', 'touchstart', 'scroll', 'keydown'].forEach(function(e) {\r\n        window.addEventListener(e, loadGTM, { passive: true });\r\n    });\r\n\r\n    // Trigger 2: Fallback - Load automatically after 4 seconds (Safety net)\r\n    setTimeout(loadGTM, 4000);\r\n  })();\r\n</script><noscript>",
            }}
          ></noscript>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <script
            type="text/javascript"
            src="https://www.googletagmanager.com/gtag/js?id=325427178"
            async
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', '325427178');",
            }}
          ></script>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<script data-section-id=\'navbar\' src=\'https://unpkg.com/@teleporthq/teleport-custom-scripts\'></script>\r\n<style>\r\n  html {\r\n    scroll-behavior: smooth;\r\n  }\r\n</style>\r\n<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5ZK6WDS" height="0" width="0"\r\n    style="display:none;visibility:hidden"></iframe></noscript>\n        <script defer src=\'https://unpkg.com/@teleporthq/react-components/dist/animate-on-reveal.umd.js\'></script>',
            }}
          ></div>
        </body>
      </Html>
    )
  }
}
export default CustomDocument
