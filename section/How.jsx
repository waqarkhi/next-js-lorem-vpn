import Title from "../components/Title"
import List from "../components/List"

const How = () => {
    return (
        <section id="work">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="work-image" data-aos="fade-right">
                        <a href="#"><img className="img-fluid" src="/images/team-work.webp" /></a>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="work-content" data-aos="fade-left">
                        <Title info={{title:"How Lorem VPN Works?"}} />
                        <List config={{
                            class:"no-style-ul",
                            items: ["What is VPN?","Lorem VPN Features?","Why Choose Lorem VPN?"]
                        }} />
                        <a className="btn btn-secondary">Learn More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default How