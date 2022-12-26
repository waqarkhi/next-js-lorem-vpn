const List = ({config}) => {
    return (
        <ul className={config.class} data-aos={config.aos}>
            {config.items.map((item,i) => (
                <li key={i}><span dangerouslySetInnerHTML={{__html:item}}></span></li>
            ))}
        </ul>
    )
}

export default List