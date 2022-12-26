
const IconBox = ({info}) => {
    return (
        <div className="card" data-aos="fade-right">
            <div className="card-body">
                <div className="icon-box">
                    <img src={info.icon} className="img-fluid" alt={info.title} />
                </div>
                <h3>{info.title}</h3>
                <p>{info.desc}</p>
            </div>
        </div>
    )
}

export default IconBox