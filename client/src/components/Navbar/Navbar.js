import React, { useState } from 'react';
import style from '../Navbar/Navbar.module.css';

const Navbar = () => {

    const scrollTo = () => {
        const doc = document.getElementById('prod');
        doc.scrollIntoView({
            behavior: 'smooth',
        });
    }

    return (
        <div className={style.nav}>
            <section className={style.nav__left}>
                <img className={style.logo} src={'logo.png'} alt='logo' />
            </section>
            <section className={style.nav__right}>
                <section className={style.nav__option}>
                    ABOUT-US
                </section>
                <section onClick={scrollTo} className={style.nav__option}>
                    PRODUCTS
                </section>
                <section className={style.nav__option}>
                    TECHNOLOGY
                </section>
                <section className={style.nav__option}>
                    APPLICATIONS
                </section>
                <section className={style.nav__option}>
                    CONTACT-US
                </section>
            </section>
        </div>
    );
}

export default Navbar;