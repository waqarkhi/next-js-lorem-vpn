const PriceBox = ({info}) => {
    return (
        <div className={`price-box${(info.focus) ? " box-focus":""}`} data-aos="fade-right">
            {info.focus && <center><span className="label label-primary">{info.focus}</span></center>}
            <div className="price">
                <div className="left">{info.title}</div>
                <div className="right">${info.price}</div>
            </div>
            <div className="duration">
                <h4>{info.duration}</h4>
                <div className="amount">
                    <span className="sign">$</span><strong>{info.price}</strong>
                    <span className="dur">{info.duration_basis}</span>
                </div>
            </div>
            <div className="detail">
                <p dangerouslySetInnerHTML={{__html:info.desc}}></p>
            </div>
            <div className="action">
                <a href="#" className={`btn ${(info.focus)?"btn-light":"btn-secondary"}`}>{info.btn_text}</a>
            </div>
        </div>
    )
}

export default PriceBox