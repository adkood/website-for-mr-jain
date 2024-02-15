import styles from '../TechFrame/TechFrame.module.css';

import { tech_list } from '../Constants';
import { useSelector } from 'react-redux';
import LineInfo from './LineInfo';

const TechFrame = () => {

    const technologyState = useSelector((state) => state.current.technologyState);

    return (
        <div className={styles.main}>
            <section className={styles.main__left}>
                <section className={styles.main__left__top}>
                    <img style={{ width: "100%", height: "100%" }} src={tech_list[technologyState].image} />
                </section>
                <section className={styles.main__left__middle}>
                    <span>{tech_list[technologyState].name}</span>
                </section>
                <section className={styles.main__left__bottom}>
                    <span>{tech_list[technologyState].short}</span>
                </section>
            </section>
            <section className={styles.main__right}>
                <section className={styles.main__right__top}>
                    <span className={styles.main__right__heading}>Advantages</span>
                    {
                        tech_list[technologyState].advantage ? tech_list[technologyState].advantage.map((ele) => {
                            return <LineInfo data={ele} />
                        }) : <LineInfo data={"No data available !"} />
                    }
                </section>
                <section className={styles.main__right__middle}>
                    <span className={styles.main__right__heading}>Products Available</span>
                    {
                        tech_list[technologyState].prod_avail ? tech_list[technologyState].prod_avail.map((ele) => {
                            return <LineInfo data={ele} />
                        }) : <LineInfo data={"No data available !"} />
                    }
                </section>
                <section className={styles.main__right__bottom}>
                    <span className={styles.main__right__heading}>Applications</span>
                    {
                        tech_list[technologyState].application ? tech_list[technologyState].application.map((ele) => {
                            return <LineInfo data={ele} />
                        }) : <LineInfo data={"No data available !"} />
                    }
                </section>
            </section>
        </div>
    );
}

export default TechFrame;