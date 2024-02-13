import React, { useState } from 'react';
import style from '../Navbar/Navbar.module.css';

const Navbar = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollTo = (to) => {
        const doc = document.getElementById(to);
        doc.scrollIntoView({
            behavior: 'smooth',
        });
    }

    return (
        <div className={style.nav}>
            <section onClick={() => { scrollToTop() }} className={style.nav__left}>
                <img className={style.logo} src={'logo.png'} alt='logo' />
            </section>
            <section className={style.nav__right}>
                <section onClick={() => { scrollTo('about-us') }} className={style.nav__option}>
                    ABOUT-US
                </section>
                <section onClick={() => { scrollTo('prod') }} className={style.nav__option}>
                    PRODUCTS
                </section>
                <section onClick={() => { scrollTo('tech') }} className={style.nav__option}>
                    TECHNOLOGY
                </section>
                <section onClick={() => { scrollTo('appli') }} className={style.nav__option}>
                    APPLICATIONS
                </section>
                <section onClick={() => { scrollTo('contact-us') }} className={style.nav__option}>
                    CONTACT-US
                </section>
            </section>
        </div>
    );
}

export default Navbar;