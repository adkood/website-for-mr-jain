import style from '../Navbar/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.nav}>
            <section className={style.nav__left}>
                icon
             </section>
            <section className={style.nav__right}>
                <section className={style.nav__option}>
                    HOME
                </section>
                <section className={style.nav__option}>
                    PRODUCTS                    
                </section>
                <section className={style.nav__option}>
                    CONTACT-US
                </section>
            </section>
        </div>
    );
}

export default Navbar;