import styles from '../TechFrame/LineInfo.module.css';
import { FaArrowRightLong } from "react-icons/fa6";

const LineInfo = ({ data }) => {
    return (
        <div className={styles.main}>
            <section className={styles.main__left}>
                <FaArrowRightLong />
            </section>
            <section className={styles.main__right}>
                <span>{data}</span>
            </section>
        </div>
    );
}

export default LineInfo;