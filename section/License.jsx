import boxes from '../data/license.json'
import Title from '../components/Title'

const License = () => {
    return (
        <section id="license" className="bg-cover" style={{backgroundImage: "url(images/license-bg.webp)"}}>
        <div className="container text-light">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <Title info={{title:"Each license <br>includes VPN <br>Software"}} />
                    <div className="detail" data-aos="fade-up">
                        <p>
                            Lorem VPN provides free easy-to-use VPN applications for Windows, macOS, Linux, iOS, Android and router. Enjoy website and device filters, app guard, smart mode and other features. Connect any device to VPN with Lorem VPN on your wifi router.
                        </p>
                    </div>
                    <a href="#" className="btn btn-secondary" data-aos="fade-left">Sign up</a>
                </div>
                <div className="col-lg-6">
                    <div className="boxs">
                        {boxes.map((box,i) => (
                            <div key={i} className={`box ${(box.focus)?" focus":""}`} data-aos="flip-right" data-aos-delay="1000">
                                <i className="box-icon"><img src={box.icon} alt={box.title} /></i>
                                <h3 className="box-title">{box.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default License