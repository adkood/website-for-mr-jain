import styles from './TechnologyHome.module.css';
import { FaRobot } from "react-icons/fa";

const TechnologyHome = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.cont__inside}>
                <div className={styles.cont__inside__header}>
                    <span>Revolutionizing Industries with Cutting-Edge Precision: JDJ Company's Advanced Technologies in Casting, Extrusion, and Drawing Processes</span>
                </div>
                <div className={styles.cont__inside__body}>
                    <p>JDJ Company stands at the forefront of innovation, redefining industrial processes with their state-of-the-art technologies in casting, extrusion, and drawing. Renowned for precision and excellence, JDJ has seamlessly integrated advanced techniques to revolutionize these fundamental manufacturing methods. Their commitment to pushing the boundaries of what is achievable has led to unparalleled results, setting new standards across various industries. </p>
                </div>
                <div className={styles.cont__inside__icon}>
                    <FaRobot />
                </div>
            </div>
        </div>
    );
}

export default TechnologyHome;