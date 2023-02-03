import React from 'react';
import cls from './MyFooter.module.css';

const MyFooter = () => {
    return (
        <footer className={cls.footer__wrapper}>
            <div className={`${cls.footer__content} row`}>
                <div className={cls.logo}>
                    <strong>Tech </strong>
                    world
                </div>
                <div className={cls.contacts}>
                    <a href='tel:+380667770202'>+380 66 777 0202</a>
                    <a href='mailto:mymail@gmail.com'>mymail@gmail.com</a>
                </div>
                <div className={cls.socials__networks}>
                    <p>Мы в социальных сетях</p>
                    <a href="https://www.facebook.com/" className={cls.icon}>
                        <span className={cls.facebook}></span>
                    </a>
                    <a href="https://www.instagram.com/" className={cls.icon}>
                        <span className={cls.instagram}></span>
                    </a>
                    <a href="viber://chat?number=%2B380667770202" className={cls.icon}>
                        <span className={cls.viber}></span>
                    </a>
                    <a href="tg://resolve?domain=username" className={cls.icon}>
                        <span className={cls.telegram}></span>
                    </a>
                    <a href="https://twitter.com/" className={cls.icon}>
                        <span className={cls.twitter}></span>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+380667770202" className={cls.icon}>
                        <span className={cls.whatsapp}></span>
                    </a> 
                </div>
                <div className={cls.payment}>
                    <p>Платите с помощью карты</p>
                    <span className={cls.visa}></span>
                    <span className={cls.mastercard}></span>
                </div>
                <div className={cls.convert}>
                    <span>uah </span>
                    |
                    <span> usd</span>
                </div>
                <p className={cls.copyright}>Web Shop © 2023</p>
            </div>
        </footer>
    )
}

export default MyFooter;