import Banner from './Banner'
import Menu from './Menu'

const Header = ({banner}) => {
    return (
        <header id="site_header" style={{backgroundImage: "url(/images/banner-bg.webp)"}}>
        <div className="navigation" data-aos="fade-down" data-aos-delay="500">
            <nav className="navbar navbar-expand-xl navbar-dark">
                <a className="navbar-brand" href="#">
                    <img src="images/light-logo.webp" alt="Lorem VPN Logo" className="img-fluid" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <Menu />
                </div>  
            </nav>
        </div>
        {banner && <Banner />}
    </header>
    )
}

export default Header