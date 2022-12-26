import Link from "next/link"
import menuItems from '../data/menu.json'

const Menu = () => {
    const subItem = (items) => {
        return (
            <div className="dropdown-menu">
                {items.map((sb,i) => (
                    <Link key={`s${i}`} className="dropdown-item" href={sb.href}><span dangerouslySetInnerHTML={{__html:sb.title}}></span></Link>
                ))}
            </div>
        )
    }
    return (
        <ul className="navbar-nav ml-auto">
            {menuItems.map((item,i) => (
                <li key={i} className={
                    `nav-item${(typeof item.subMenu !== 'undefined')?" dropdown":""}${(item.href.includes('login')) ? " login":""}${(item.href.includes('signup')) ? " signup":""}`
                }>
                    <Link href={item.href} className={`${
                        (item.href.includes('login') || item.href.includes('signup') ? 'btn':'nav-link')}${item.href.includes('login') ? ' btn-primary' : ''}${item.href.includes('signup') ? ' btn-secondary':''}`}>{item.title}</Link>
                    {item.subMenu && subItem(item.subMenu)}
                </li>
            ))}
        </ul>
    )
}

export default Menu