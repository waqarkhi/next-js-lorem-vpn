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

export default function Home() {
  return (
    <div id="home">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <title>Lorem VPN</title>
        <link rel="shortcut icon" href="images/favicon.webp" type="image/x-icon" />
        
        <script src="vendor/jquery/jquery-3.6.0.min.js"></script>
        <script src="vendor/bootstrap/bootstrap.min.js" defer></script>
        <script src="vendor/owl-carousel/owl.carousel.min.js"></script>
        <script src="vendor/aos/aos.js" defer></script>
        <script src="js/script.js" defer></script>
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
