
const Rate = ({rate}) => {

    const stars = []
    for ( let i = 0; i < 5; i++ ) {
        if (i < rate) {
            stars.push(<i key={i} className="fa-solid fa-star"></i>)
        } else {
            stars.push(<i key={i} className="fa-regular fa-star"></i>)
        }
    }

    return (
        <div className="rate">
            {stars}
        </div>
    )
}

export default Rate