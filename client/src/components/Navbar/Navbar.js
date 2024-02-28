import React from 'react';
import style from '../Navbar/Navbar.module.css';
import { Link } from 'react-router-dom'

const Navbar = React.memo(() => {

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // };

    const scrollTo = (to) => {
        const doc = document.getElementById(to);
        if (doc) {
            doc.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }

    const linkStyle = { textDecoration: "none", color: "inherit" };

    return (
        <div className={style.nav}>
            <section onClick={() => { window.location.href = "/" }} className={style.nav__left}>
                <img className={style.logo} src={'logo.png'} alt='logo' />
            </section>
            <section className={style.nav__right}>
                <section onClick={() => { scrollTo('about-us') }} className={style.nav__option}>
                    <Link to={"/"} style={linkStyle}>
                        ABOUT-US
                    </Link>
                </section>
                <section onClick={() => { scrollTo('prod') }} className={style.nav__option}>
                    <Link to={"/"} style={linkStyle}>
                        PRODUCTS
                    </Link>
                </section>
                <section className={style.nav__option}>
                    <Link to={"/technology"} style={linkStyle}>
                        TECHNOLOGY
                    </Link>
                </section>
                <section className={style.nav__option}>
                    <Link to={"/application"} style={linkStyle}>
                        APPLICATIONS
                    </Link>
                </section>
                <section onClick={() => { scrollTo('contact-us') }} className={style.nav__option}>
                    <Link to={"/"} style={linkStyle}>
                        CONTACT-US
                    </Link>
                </section>
            </section>
        </div>
    );
});

export default Navbar;