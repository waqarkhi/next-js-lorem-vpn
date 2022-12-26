import Rate from '../components/Rate'
import Image from 'next/image'

const Review = ({info}) => {
    return (
        <div className="review">
            <div className="photo">
                <Image src={info.photo} width="130" height="130" alt={info.name} />
            </div>
            <div className="comment">&quot;{info.comment}&quot;</div>
            <div className="about-person">
                <h3>{info.name}</h3>
                <Rate rate={info.rate} />
            </div>
        </div>
    )
}

export default Review