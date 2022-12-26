import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Script src="vendor/jquery/jquery-3.6.0.min.js" />
        <Script strategy="lazyOnload" src="vendor/bootstrap/bootstrap.min.js" />
        <Script strategy="lazyOnload" src="vendor/owl-carousel/owl.carousel.min.js" />
        <Script strategy="lazyOnload" src="vendor/aos/aos.js" />
        <Script strategy="lazyOnload" src="js/script.js" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
