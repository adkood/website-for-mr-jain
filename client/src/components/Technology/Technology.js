import React from "react";
import styles from '../Technology/Technology.module.css';
import Frame from '../../utils/Frame';

const Technology = () => {
    return <div className={styles.techno}>
        <div className={styles.top}>
            <span>COPPER PRODUCTION Tecnology</span>
        </div>
        <div className={styles.sliderCont}>
            <Frame width="70%" height="70%" image={"casting.jpg"} name={"Casting"} />
        </div>
    </div>
}

export default Technology;