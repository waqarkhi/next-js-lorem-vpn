import Title from '../components/Title'
import PriceBox from '../components/PriceBox'
import pricing from '../data/price.json'


const Price = () => {
    return (
        <section id="pricing" className="bg-bot-cen bg-no-rep bg-contain" style={{backgroundImage: "url(images/price-bg.webp)"}}>
        <div className="container text-center">
            <Title info={{
                title:"Personal VPN Plan Pricing",
                desc:"Every plan includes 5 simultaneous connections in one household"
            }} />
        </div>
        <div className="plans">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    {pricing.map((item,i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <PriceBox info={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    )
}

export default Price