import FooterBottom from "../components/FooterBottom"
import List from "../components/List"
import contactInfo from '../data/contact.json'

const Footer = () => {
    return (
        <footer className="text-light">
        <div id="site_footer" className="bg-cover" style={{backgroundImage: "url(images/footer-bg.webp)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4" data-aos="fade-up">
                        <h3>Contact Us</h3>
                        <ul className="no-style-ul">
                            <li>{contactInfo.address}</li>
                            <li>Cell : <a href="tel:1234567890">{contactInfo.phone}</a></li>
                            <li>E-mail : <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <h3>About Us</h3>
                        <List config={{
                            class:"no-style-ul",
                            items:[
                                "<a href='#'>Features</a>",
                                "<a href='#'>Download</a>",
                                "<a href='#'>Pricing</a>",
                                "<a href='#'>Support</a>"
                            ]
                        }}/>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                        <a href="#"><img className="footer-logo" src="images/light-logo.webp" alt="Lorem VPN"/></a>
                        <form action="#">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="you@yourmail.com" />
                            </div>
                            <button className="btn btn-secondary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <FooterBottom />
    </footer>
    )
}

export default Footer