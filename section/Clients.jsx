import logos from '../data/clients.json'

const Clients = () => {
    return (
        <section id="clients" data-aos="fade-up">
        <div className="container">
            <div className="owl-carousel owl-theme clients">
                {logos.map((item,i) => (
                    <div key={i} className="item"><img src={item} /></div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Clients