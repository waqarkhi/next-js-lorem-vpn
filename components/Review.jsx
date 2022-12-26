import Rate from '../components/Rate'

const Review = ({info}) => {
    return (
        <div className="review">
            <div className="photo">
                <img src={info.photo} alt={info.name} />
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