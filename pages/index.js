import Head from 'next/head'
import Header from '../components/Header'
import About from '../section/About'
import Clients from '../section/Clients'
import How from '../section/How'
import License from '../section/License'
import News from '../section/News'
import Price from '../section/Price'
import Testimonial from '../section/Testimonial'
import Why from '../section/Why'
import Footer from '../section/Footer'
import Script from 'next/script'

export default function Home() {
  return (
    <div id="home">
        <Script src="vendor/jquery/jquery-3.6.0.min.js" />
        <Script strategy="lazyOnload" src="vendor/bootstrap/bootstrap.min.js" />
        <Script strategy="lazyOnload" src="vendor/owl-carousel/owl.carousel.min.js" />
        <Script strategy="lazyOnload" src="vendor/aos/aos.js" />
        <Script strategy="lazyOnload" src="js/script.js" />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <title>Lorem VPN</title>
        <link rel="shortcut icon" href="images/favicon.webp" type="image/x-icon" />
      </Head>
      <Header banner="true" />
      <About />
      <How />
      <Why />
      <Price />
      <Testimonial />
      <Clients />
      <License />
      <News />
      <Footer />
    </div>
  )
}
