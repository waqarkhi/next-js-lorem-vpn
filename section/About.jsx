import IconBox from "../components/IconBox"
import Title from "../components/Title"
import about from '../data/about.json'

const About = () => {
    const info = {
        title: "We are more than just a Privacy Partner",
        desc:"PRODUCT OVERVIEW"
    }
    return (
        <section id="about">
            <div className="container text-center">
                <Title info={info} />
                
                <div className="row about-boxes justify-content-center">
                    {about.map((item,i) => (
                    <div className="col-lg-4 col-md-6" key={i}>
                        <IconBox info={{
                            icon:item.icon,
                            title: item.title,
                            desc: item.desc
                        }} />
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About