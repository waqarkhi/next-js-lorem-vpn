import Image from "next/image"

const Banner = () => {
    return (
        <section id="banner">
            <div className="container" id="home">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-content" data-aos="fade-right" data-aos-delay="700" data-aos-duration="1000">
                            <h2 className="big-heading">
                                Fast and secure VPN Technology leader in VPN services.
                            </h2>
                            <p className="text">
                                Surf anonymously. Surf like from home wherever you are
                                VPN servers in 106 cities across 56 countries. Trusted by
                                millions around the world
                            </p>
                            <div className="actions">
                                <a className="btn btn-secondary" href="#">Sign up</a>
                                <a className="btn btn-link" href="#">Sign in</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div id="animation">
                            <Image src="images/animation.svg" alt="Lorem VPN" width="814" height="741" />
                        </div>
                    </div>
                </div>
            </div>
          </section>
    )
}

export default Banner