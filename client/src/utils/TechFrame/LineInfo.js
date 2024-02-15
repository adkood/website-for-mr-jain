import styles from '../TechFrame/LineInfo.module.css';
import { GrNew } from "react-icons/gr";

const LineInfo = ({ data }) => {
    return (
        <div className={styles.main}>
            <section className={styles.main__left}>
                <GrNew />
            </section>
            <section className={styles.main__right}>
                <span>{data}</span>
            </section>
        </div>
    );
}

export default LineInfo;