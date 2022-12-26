import logos from '../data/clients.json'
import Image from 'next/image'

const Clients = () => {
    return (
        <section id="clients" data-aos="fade-up">
        <div className="container">
            <div className="owl-carousel owl-theme clients">
                {logos.map((item,i) => (
                    <div key={i} className="item"><Image width="176" height="80" src={item} alt="Client" /></div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Clients