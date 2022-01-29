const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row footer-row">
                    <div className="col-md-4 contact-numbers">
                        <ul>
                            <li className="heading">Contact us at:</li>
                            <li>Mobile: +916788545451</li>
                            <li>Landline: 08065422456</li>
                        </ul>
                    </div>
                    <div className="col-md-4 contact-address">
                        <ul>
                            <li className="heading">Address:</li>
                            <li>13th cross road,</li>
                            <li>Near MES College,</li>
                            <li>Malleshwaram</li>
                            <li>Bengaluru - 55</li>
                        </ul>
                    </div>
                    <div className="col-md-4 contact-links">
                        <ul>
                            <li className="heading">Follow us at:</li>
                            <li>Instagram: @reactive</li>
                            <li>Twitter: @reactive123</li>
                            <li>Facebook: @reactive</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;