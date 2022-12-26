import moment from 'moment'

const NewsBox = ({news}) => {
    return (
        <div className="card news-item" data-aos="fade-up" data-aos-delay="500">
            <img src={news.image} alt="" />
            <div className="card-body">
                <h3>{news.title}</h3>
                <div className="news-meta">
                    By <span className="name">{news.author}</span> on <span className="date">{moment().subtract(news.date,'days').format('ll')}</span>
                </div>
                <div className="news-brief">{news.content}</div>
                <div className="news-act">
                    <a href={news.link} className="link">View More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsBox