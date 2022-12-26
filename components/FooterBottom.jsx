import moment from 'moment'

const FooterBottom = () => {
    return (
        <div id="footer_bottom">
            <center>
                <p>Copyright © {<span>{moment().format('Y')}</span>}. All right reserved <a href="#">Lorem VPN</a> Inc</p>
            </center>
        </div>
    )
}

export default FooterBottom