import React, { useEffect, useState } from 'react';
import styles from '../Application/Application.module.css';
import Frame from '../../utils/Frame';
import { appli_list } from '../../utils/Constants';
import { GiMoebiusStar } from "react-icons/gi";
import { modalActions, currentActions } from '../../store';
import { UseDispatch, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';

const Application = React.memo(() => {

    const [ref,inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    const dispatch = useDispatch();
    const [fIdx, set_fIdx] = useState(0);
    const [sIdx, set_sIdx] = useState(1);
    const [tIdx, set_tIdx] = useState(2);
    const [foIdx, set_foIdx] = useState(3);

    useEffect(() => {
        const intervalId = setInterval(() => {
            set_fIdx(prevIdx => (prevIdx + 1) % appli_list.length);
            set_sIdx(prevIdx => (prevIdx + 1) % appli_list.length);
            set_tIdx(prevIdx => (prevIdx + 1) % appli_list.length);
            set_foIdx(prevIdx => (prevIdx + 1) % appli_list.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div ref={ref} id='appli' className={styles.application}>
            <section className={`${styles.top} ${inView ? styles.inView : ''}`}>
                <GiMoebiusStar size={"1rem"} />
                <span>Application</span>
                <GiMoebiusStar size={"1rem"} />
            </section>
            <section className={`${styles.middle} ${inView ? styles.inView : ''}`}>
                <span>Maximizing Potential: Innovative Applications of Copper Products at JDJ</span>
            </section>
            <section className={`${styles.slider_cont} ${inView ? styles.inView : ''}`}>
                <section className={styles.sliderCont__inside}>
                    <section className={styles.sliderCont__inside__frameWala}>
                        <section onClick={() => {
                            dispatch(modalActions.applicaionStateToggle());
                            dispatch(currentActions.changeApplicationState(appli_list[fIdx].id - 1));
                        }} style={{ width: "100%", height: "65%", cursor: "pointer" }}>
                            <Frame width="100%" height="100%" image={appli_list[fIdx].image} name={appli_list[fIdx].name} />
                        </section>
                        <section style={{ width: "100%", height: "25%", marginTop: "10%" }}>
                            <span>{appli_list[fIdx].short}</span>
                        </section>
                    </section>
                    <section className={styles.sliderCont__inside__frameWala}>
                        <section onClick={() => {
                            dispatch(modalActions.applicaionStateToggle());
                            dispatch(currentActions.changeApplicationState(appli_list[sIdx].id - 1));
                        }} style={{ width: "100%", height: "65%", cursor: "pointer" }}>
                            <Frame width="100%" height="100%" image={appli_list[sIdx].image} name={appli_list[sIdx].name} />
                        </section>
                        <section style={{ width: "100%", height: "25%", marginTop: "10%" }}>
                            <span>{appli_list[sIdx].short}</span>
                        </section>
                    </section>
                    <section className={styles.sliderCont__inside__frameWala}>
                        <section onClick={() => {
                            dispatch(modalActions.applicaionStateToggle());
                            dispatch(currentActions.changeApplicationState(appli_list[tIdx].id - 1));
                        }} style={{ width: "100%", height: "65%", cursor: "pointer" }}>
                            <Frame width="100%" height="100%" image={appli_list[tIdx].image} name={appli_list[tIdx].name} />
                        </section>
                        <section style={{ width: "100%", height: "25%", marginTop: "10%" }}>
                            <span>{appli_list[tIdx].short}</span>
                        </section>
                    </section>
                    <section className={styles.sliderCont__inside__frameWala}>
                        <section onClick={() => {
                            dispatch(modalActions.applicaionStateToggle());
                            dispatch(currentActions.changeApplicationState(appli_list[foIdx].id - 1));
                        }} style={{ width: "100%", height: "65%" }}>
                            <Frame width="100%" height="100%" image={appli_list[foIdx].image} name={appli_list[foIdx].name} />
                        </section>
                        <section style={{ width: "100%", height: "25%", marginTop: "10%" }}>
                            <span>{appli_list[foIdx].short}</span>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    )

});

export default Application;

