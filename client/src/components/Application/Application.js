import React, { useState } from 'react';
import styles from '../Application/Application.module.css';
import Frame from '../../utils/Frame';
import { tech_list } from '../../utils/Constants';

const Application = () => {

    const [fIdx, set_fIdx] = useState(0);
    const [sIdx, set_sIdx] = useState(1);
    const [tIdx, set_tIdx] = useState(2);

    return (
        <div className={styles.application}>
            <section className={styles.top}>
                <span>Application</span>
            </section>
            <section className={styles.slider_cont}>
                <section className={styles.sliderCont__inside}>
                    <section className={styles.sliderCont__inside__frameWala}>
                        <section style={{ width: "100%", height: "75%" }}>
                            <Frame width="100%" height="100%" image={tech_list[0].image} name={tech_list[0].name} />
                        </section>
                        <section style={{ width: "100%", height: "15%" }}>
                            <span>whats swbs i siwbs swinswi sinwisn isbnwisb insibws iiwsnws isniwsb siwsiws ins inins siws</span>
                        </section>
                    </section>
                    <section className={styles.sliderCont__inside__frameWala}>
                        <section style={{ width: "100%", height: "75%" }}>
                            <Frame width="100%" height="100%" image={tech_list[0].image} name={tech_list[0].name} />
                        </section>
                        <section style={{ width: "100%", height: "15%" }}>
                            <span>whats swbs i siwbs swinswi sinwisn isbnwisb insibws iiwsnws isniwsb siwsiws ins inins siws</span>
                        </section>
                    </section><section className={styles.sliderCont__inside__frameWala}>
                        <section style={{ width: "100%", height: "75%" }}>
                            <Frame width="100%" height="100%" image={tech_list[0].image} name={tech_list[0].name} />
                        </section>
                        <section style={{ width: "100%", height: "15%" }}>
                            <span>whats swbs i siwbs swinswi sinwisn isbnwisb insibws iiwsnws isniwsb siwsiws ins inins siws</span>
                        </section>
                    </section>
                </section>
                <section className={styles.dotBox}>
                    <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: 'white' }}></div>
                    <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: 'white' }}></div>
                    <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: 'white' }}></div>
                </section>
            </section>
        </div>
    )

}

export default Application;