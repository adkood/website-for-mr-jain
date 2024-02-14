import React, { useEffect, useState } from 'react';
import styles from '../Application/Application.module.css';
import Frame from '../../utils/Frame';
import { appli_list } from '../../utils/Constants';
import { GiMoebiusStar } from "react-icons/gi";

const Application = React.memo(() => {

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
        <div id='appli' className={styles.application}>
            <section className={styles.top}>
                <GiMoebiusStar size={"1rem"} />
                <span>Application</span>
                <GiMoebiusStar size={"1rem"} />
            </section>
            <section className={styles.middle}>
                <span>Maximizing Potential: Innovative Applications of Copper Products at JDJ</span>
            </section>
            <section className={styles.slider_cont}>
                <section className={styles.sliderCont__inside}>
                    <section className={styles.sliderCont__inside__frameWala}>
                        <section style={{ width: "100%", height: "65%" }}>
                            <Frame width="100%" height="100%" image={appli_list[fIdx].image} name={appli_list[fIdx].name} />
                        </section>
                        <section style={{ width: "100%", height: "25%", marginTop: "10%" }}>
                            <span>{appli_list[fIdx].short}</span>
                        </section>
                    </section>
                    <section className={styles.sliderCont__inside__frameWala}>
                        <section style={{ width: "100%", height: "65%" }}>
                            <Frame width="100%" height="100%" image={appli_list[sIdx].image} name={appli_list[sIdx].name} />
                        </section>
                        <section style={{ width: "100%", height: "25%", marginTop: "10%" }}>
                            <span>{appli_list[sIdx].short}</span>
                        </section>
                    </section>
                    <section className={styles.sliderCont__inside__frameWala}>
                        <section style={{ width: "100%", height: "65%" }}>
                            <Frame width="100%" height="100%" image={appli_list[tIdx].image} name={appli_list[tIdx].name} />
                        </section>
                        <section style={{ width: "100%", height: "25%", marginTop: "10%" }}>
                            <span>{appli_list[tIdx].short}</span>
                        </section>
                    </section>
                    <section className={styles.sliderCont__inside__frameWala}>
                        <section style={{ width: "100%", height: "65%" }}>
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

