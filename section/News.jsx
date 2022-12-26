import NewsBox from "../components/NewsBox"
import Title from "../components/Title"
import news from '../data/news.json'

const News = () => {
    return (
        <section id="news">
        <div className="container">
            <div className="mb-5 text-center">
                <Title info={{title:"Latest News & Insights"}} />
            </div>
            <div className="row justify-content-center">
                {news.map((item,i) => (
                    <div key={i} className="col-md-6 col-lg-4">
                        <NewsBox news={item} />
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default News