import React, { useState } from 'react';
import style from '../Navbar/Navbar.module.css';
import { Link } from 'react-scroll';

const Navbar = () => {

    return (
        <div className={style.nav}>
            <section className={style.nav__left}>
                <img className={style.logo} src={'logo.png'} alt='logo'/>
            </section>
            <section className={style.nav__right}>
                <section id='home' className={style.nav__option}>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        ABOUT-US
                    </Link>
                </section>
                <section id='home' className={style.nav__option}>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        PRODUCTS
                    </Link>
                </section>
                <section id='home' className={style.nav__option}>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        TECHNOLOGY
                    </Link>
                </section>
                <section id='home' className={style.nav__option}>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        APPLICATIONS
                    </Link>
                </section>
                <section className={style.nav__option}>
                    <Link
                        activeClass="active"
                        // to=""
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={500}
                    >
                        CONTACT-US
                    </Link>
                </section>
            </section>
        </div>
    );
}

export default Navbar;