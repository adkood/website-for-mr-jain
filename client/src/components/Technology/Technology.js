import React, { useEffect, useState } from "react";
import styles from '../Technology/Technology.module.css';
import Frame from '../../utils/Frame';
import { GiMoebiusStar } from "react-icons/gi";
import { tech_list } from '../../utils/Constants';
import { GrCloudComputer } from "react-icons/gr";
import UseAnimations from "react-useanimations";
import activity from 'react-useanimations/lib/activity';

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
                <GiMoebiusStar size={"1rem"} />
                <span>COPPER PRODUCTION Technology</span>
                <GiMoebiusStar size={"1rem"} />
            </div>
            <div id="slider-cont" className={styles.sliderCont}>
                <section className={styles.sliderCont__left}>
                    <span>Revolutionizing Copper Production: Cutting-Edge Technologies Pave the Way for Efficiency and Sustainability</span>
                    <GrCloudComputer className={styles.sliderCont__left__icon} color="#F0E0B4" size={"5rem"}/>
                </section>
                <UseAnimations className={styles.sliderCont__aniIcon} strokeColor="#F0E0B4" animation={activity} size={55}/>
                <section className={styles.sliderCont__middle}>
                    <Frame width="90%" height="75%" image={tech_list[currIdx].image} name={tech_list[currIdx].name} />
                    <section className={styles.dotBox}>
                        <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: `${tech_list[currIdx].id === '1' ? "green" : "white"}` }}></div>
                        <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: `${tech_list[currIdx].id === '2' ? "green" : "white"}` }}></div>
                        <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: `${tech_list[currIdx].id === '3' ? "green" : "white"}` }}></div>
                        <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: `${tech_list[currIdx].id === '4' ? "green" : "white"}` }}></div>
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
