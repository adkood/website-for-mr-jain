import styles from '../ContactUs/ContactUs.module.css';
import { GiMoebiusStar } from "react-icons/gi";
import { FaSquarePhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div id='contact-us' className={styles.ContactUs}>
            <section className={styles.top}>
                <GiMoebiusStar size={"1rem"} />
                <span>Contact Us</span>
                <GiMoebiusStar size={"1rem"} />
            </section>
            <section className={styles.middle}>
                <section className={styles.middle__item}>
                    <section className={styles.middle__item__left}>
                        <FaSquarePhone />
                    </section>
                    <section className={styles.middle__item__right}>
                        <span>+91 9205186548</span>
                    </section>
                </section>

                <section className={styles.middle__item}>
                    <section className={styles.middle__item__left}>
                        <MdAttachEmail />
                    </section>
                    <section className={styles.middle__item__right}>
                        <span>Info.jdjain@gmail.com</span>
                    </section>
                </section>

                <section className={styles.middle__item}>
                    <section className={styles.middle__item__left}>
                        <FaAddressBook />
                    </section>
                    <section className={styles.middle__item__right}>
                        <span>JDJ ALLOYS PVT LTD, Kundali village, Kundli, Haryana</span>
                    </section>
                </section>

            </section>
        </div>
    );
}

export default ContactUs;