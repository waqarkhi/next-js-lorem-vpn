import List from "../components/List"
import Title from "../components/Title"
import Image from 'next/image'

const Why = () => {
    return (
        <section id="why" className="bg-cover text-light" style={{backgroundImage: "url(/images/why.webp)"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <Title info={{title:"Why is Lorem VPN the best choice?"}} />
                        <List config={{
                            class:"secondary-dots",
                            aos: 'fade-down',
                            items: [
                                "Connect unlimited devices",
                                "Unlimited bandwidth",
                                "Unlimited server switches",
                                "Unlimited speed"
                            ]
                        }} />
                    </div>
                    <div className="col-lg-7 pos-rel">
                        <Image src="/images/phones.svg" width="551" height="823" className="pos-abs" alt="Lorem VPN" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why