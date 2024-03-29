import React, { useEffect, useState } from "react";
import styles from '../Technology/Technology.module.css';
import Frame from '../../utils/Frame';
import { GiMoebiusStar } from "react-icons/gi";
import { tech_list } from '../../utils/Constants';
import { GrCloudComputer } from "react-icons/gr";
import UseAnimations from "react-useanimations";
import activity from 'react-useanimations/lib/activity';
import { useDispatch } from 'react-redux';
import { modalActions } from "../../store";
import { currentActions } from "../../store";
import { TiChevronLeftOutline } from "react-icons/ti";
import { TiChevronRightOutline } from "react-icons/ti";
import { useInView } from 'react-intersection-observer';


const Technology = React.memo(() => {

    const [currIdx, setCurrIdx] = useState(0);
    const dispatch = useDispatch();

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrIdx(prevIdx => (prevIdx + 1) % tech_list.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const onLeftMove = () => {
        setCurrIdx(prevIdx => (prevIdx - 1 + tech_list.length) % tech_list.length);
    }

    const onRightMove = () => {
        setCurrIdx(prevIdx => (prevIdx + 1) % tech_list.length);
    }

    return (
        <div ref={ref} id="tech" className={styles.techno}>
            <div className={styles.top}>
                <GiMoebiusStar size={"1rem"} />
                <span>TECHNOLOGY</span>
                <GiMoebiusStar size={"1rem"} />
            </div>
            <div id="slider-cont" className={styles.sliderCont}>
                <section className={`${styles.sliderCont__left} ${inView ? styles.inViewBounce : ''}`}>
                    <span>Revolutionizing Copper Production: Cutting-Edge Technologies Pave the Way for Efficiency and Sustainability</span>
                    <GrCloudComputer className={styles.sliderCont__left__icon} color="#F0E0B4" size={"5rem"} />
                </section>
                <UseAnimations className={styles.sliderCont__aniIcon} strokeColor="#F0E0B4" animation={activity} size={55} />
                <section className={styles.sliderCont__righty}>
                    <TiChevronLeftOutline onClick={onLeftMove} className={`${styles.sliderCont__moveLeft} ${inView ? styles.inView : ''}`} />
                    <section className={`${styles.sliderCont__middle} ${inView ? styles.inView : ''}`} onClick={() => {
                        dispatch(modalActions.techStateToggle());
                        dispatch(currentActions.changeTechnologyState(tech_list[currIdx].id - 1));
                    }}>
                        <Frame width="90%" height="75%" image={tech_list[currIdx].image} name={tech_list[currIdx].name} />
                        <section className={styles.dotBox}>
                            <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: `${tech_list[currIdx].id === '1' ? "green" : "white"}` }}></div>
                            <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: `${tech_list[currIdx].id === '2' ? "green" : "white"}` }}></div>
                            <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: `${tech_list[currIdx].id === '3' ? "green" : "white"}` }}></div>
                        </section>
                    </section>
                    <section className={`${styles.sliderCont__right} ${inView ? styles.inView : ''}`}>
                        <span>{tech_list[currIdx].short}</span>
                    </section>
                    <TiChevronRightOutline onClick={onRightMove} className={`${styles.sliderCont__moveRight} ${inView ? styles.inView : ''}`} />

                </section>
            </div>
        </div>
    );
});

export default Technology;
