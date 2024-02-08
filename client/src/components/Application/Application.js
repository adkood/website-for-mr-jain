import React, { useEffect, useState } from 'react';
import styles from '../Application/Application.module.css';
import Frame from '../../utils/Frame';
import { tech_list } from '../../utils/Constants';
import { GiMoebiusStar } from "react-icons/gi";
import UseAnimations from 'react-useanimations';
import infinity from 'react-useanimations/lib/infinity';

const Application = () => {

    const [fIdx, set_fIdx] = useState(0);
    const [sIdx, set_sIdx] = useState(1);
    const [tIdx, set_tIdx] = useState(2);
    const [foIdx, set_foIdx] = useState(3);

    useEffect(() => {
        const intervalId = setInterval(() => {
            set_fIdx(prevIdx => (prevIdx + 1) % tech_list.length);
            set_sIdx(prevIdx => (prevIdx + 1) % tech_list.length);
            set_tIdx(prevIdx => (prevIdx + 1) % tech_list.length);
            set_foIdx(prevIdx => (prevIdx + 1) % tech_list.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className={styles.application}>
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
                            <Frame width="100%" height="100%" image={tech_list[fIdx].image} name={tech_list[fIdx].name} />
                        </section>
                        <section style={{ width: "100%", height: "25%", marginTop: "10%" }}>
                            <span>whats swbs i siwbs swinswi sinwisn isbnwisb insibws iiwsnws isniwsb siwsiws ins inins siws</span>
                        </section>
                    </section>
                    <section className={styles.sliderCont__inside__frameWala}>
                        <section style={{ width: "100%", height: "65%" }}>
                            <Frame width="100%" height="100%" image={tech_list[sIdx].image} name={tech_list[sIdx].name} />
                        </section>
                        <section style={{ width: "100%", height: "25%", marginTop: "10%" }}>
                            <span>whats swbs i siwbs swinswi sinwisn isbnwisb insibws iiwsnws isniwsb siwsiws ins inins siws</span>
                        </section>
                    </section>
                    <section className={styles.sliderCont__inside__frameWala}>
                        <section style={{ width: "100%", height: "65%" }}>
                            <Frame width="100%" height="100%" image={tech_list[tIdx].image} name={tech_list[tIdx].name} />
                        </section>
                        <section style={{ width: "100%", height: "25%", marginTop: "10%" }}>
                            <span>whats swbs i siwbs swinswi sinwisn isbnwisb insibws iiwsnws isniwsb siwsiws ins inins siws</span>
                        </section>
                    </section>
                    <section className={styles.sliderCont__inside__frameWala}>
                        <section style={{ width: "100%", height: "65%" }}>
                            <Frame width="100%" height="100%" image={tech_list[foIdx].image} name={tech_list[foIdx].name} />
                        </section>
                        <section style={{ width: "100%", height: "25%", marginTop: "10%" }}>
                            <span>whats swbs i siwbs swinswi sinwisn isbnwisb insibws iiwsnws isniwsb siwsiws ins inins siws</span>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    )

}

export default Application;

