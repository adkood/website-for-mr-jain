import React from 'react';
import styles from '../AboutUs/AboutUs.module.css';
import { GiMoebiusStar } from "react-icons/gi";
import { useInView } from 'react-intersection-observer';

const AboutUs = React.memo(() => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    
    return (
        <div ref={ref} id='about-us' className={styles.aboutUs}>
            <section className={styles.top}>
                <GiMoebiusStar size={"1rem"} />
                <span>ABOUT US</span>
                <GiMoebiusStar size={"1rem"} />

            </section>
            <section className={`${styles.bottom} ${inView ? styles.inView : ''}`}>
                <span>Established in 1949, JD Jain and Company stands as a stalwart in the copper trading industry. With a rich legacy of over seven d­ecades, we have been the epitome of reliability and excellence in wholesale copper trade. Our commitment to quality and customer satisfaction has propelled us to the forefront of the market, making JDJ & Co. a trusted name in the industry since its inception.
                    JD Jain and Company proudly presents its manufacturing unit, JDJ Alloys, as it embarks on a groundbreaking venture.</span>
            </section>
        </div>
    );
});

export default AboutUs; 