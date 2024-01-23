import React, { useEffect, useState } from "react";
import styles from '../Technology/Technology.module.css';
import Frame from '../../utils/Frame';

import { tech_list } from '../../utils/Constants';

const Technology = () => {

    const [currIdx, setCurrIdx] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrIdx(prevIdx => (prevIdx + 1) % tech_list.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.techno}>
            <div className={styles.top}>
                <span>COPPER PRODUCTION Technology</span>
            </div>
            <div id="slider-cont" className={styles.sliderCont}>
                <section className={styles.sliderCont__left}>
                    <Frame width="90%" height="75%" image={tech_list[currIdx].image} name={tech_list[currIdx].name} />
                    <section className={styles.dotBox}>
                        <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: `${tech_list[currIdx].id === '1' ? "green" : "white"}` }}></div>
                        <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: `${tech_list[currIdx].id === '2' ? "green" : "white"}` }}></div>
                        <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: `${tech_list[currIdx].id === '3' ? "green" : "white"}` }}></div>
                        <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: `${tech_list[currIdx].id === '4' ? "green" : "white"}` }}></div>
                        <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: `${tech_list[currIdx].id === '5' ? "green" : "white"}` }}></div>
                    </section>
                </section>
                <section className={styles.sliderCont__right}>
                    <span>{tech_list[currIdx].short}</span>
                </section>
            </div>
        </div>
    );
}

export default Technology;
