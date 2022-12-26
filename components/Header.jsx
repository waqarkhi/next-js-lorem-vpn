import Banner from './Banner'
import Menu from './Menu'
import Image from 'next/image'

const Header = ({banner}) => {
    return (
        <header id="site_header" style={{backgroundImage: "url(/images/banner-bg.webp)"}}>
        <div className="navigation">
            <nav className="navbar navbar-expand-xl navbar-dark">
                <a className="navbar-brand" href="#">
                    <Image src="/images/light-logo.webp" alt="Lorem VPN Logo" height="40" width="270" className="img-fluid"/>
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