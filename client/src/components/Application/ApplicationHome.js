import styles from './ApplicationHome.module.css';
import { LuNetwork } from "react-icons/lu";

const ApplicationHome = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.cont__inside}>
                <div className={styles.cont__inside__header}>
                    <span>Elevating Industries with JDJ Copper: Innovations and Applications Redefining Excellence</span>
                </div>
                <div className={styles.cont__inside__body}>
                    <p>Discover the unparalleled potential of JDJ Copper Products as we delve into a world of cutting-edge innovations and versatile applications. From electrical conductivity to corrosion resistance, JDJ's copper solutions are engineered to elevate industries across the spectrum. Join us on a journey where the unmatched properties of JDJ Copper pave the way for transformative advancements and contribute to the evolution of countless applications.</p>
                </div>
                <div className={styles.cont__inside__icon}>
                    <LuNetwork />
                </div>
            </div>
        </div>
    );
}

export default ApplicationHome;