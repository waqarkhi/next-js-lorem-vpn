import Review from '../components/Review'
import Title from '../components/Title'
import reviews from '../data/testimonial.json'

const Testimonial = () => {
    return (
        <section id="reviews" className="bg-cen bg-no-rep" style={{backgroundImage: "url(images/reviews-bg.webp)"}}>
        <div className="container text-center" data-aos="fade-up">
            <Title info={{
                title:"We are transforming digital Privacy across all industries"
            }} />
            <div className="owl-carousel owl-theme reviews">
                {reviews.map((item,i) => (
                    <div className="item" key={i}><Review info={item} /></div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Testimonial