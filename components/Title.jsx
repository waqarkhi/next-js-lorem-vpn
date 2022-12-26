const Title = ({info}) => {
    return (
        <div className="title" data-aos="fade-up">
            <h2 dangerouslySetInnerHTML={{__html:info.title}}></h2>
            {info.desc && <p dangerouslySetInnerHTML={{__html:info.desc}}></p>}
        </div>
    )
}

export default Title