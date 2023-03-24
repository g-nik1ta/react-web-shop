import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-content row">
                <a href='' className="logo">
                    <strong>Tech </strong>
                    world
                </a>
                <div className="contacts">
                    <a href='tel:+380667770202'>+380 66 777 0202</a>
                    <a href='mailto:mymail@gmail.com'>mymail@gmail.com</a>
                </div>
                <div className="socials-networks">
                    <p>Мы в социальных сетях</p>
                    <a href="https://www.facebook.com/" className="icon">
                        <span className="facebook"></span>
                    </a>
                    <a href="https://www.instagram.com/" className="icon">
                        <span className="instagram"></span>
                    </a>
                    <a href="viber://chat?number=%2B380667770202" className="icon">
                        <span className="viber"></span>
                    </a>
                    <a href="tg://resolve?domain=username" className="icon">
                        <span className="telegram"></span>
                    </a>
                    <a href="https://twitter.com/" className="icon">
                        <span className="twitter"></span>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+380667770202" className="icon">
                        <span className="whatsapp"></span>
                    </a> 
                </div>
                <div className="payment">
                    <p>Платите с помощью карты</p>
                    <span className="visa"></span>
                    <span className="mastercard"></span>
                </div>
                <div className="convert">
                    <span>uah </span>
                    |
                    <span> usd</span>
                </div>
                <p className="copyright">Web Shop © 2023</p>
            </div>
        </footer>
    )
}

export default Footer;