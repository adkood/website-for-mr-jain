import styles from '../AppliFrame/AppliFrame.module.css';

import { appli_list } from '../Constants';
import { useSelector } from 'react-redux';
import LineInfo from '../AppliFrame/LineInfo';

const AppliFrame = () => {

    const applicationState = useSelector((state) => state.current.applicationState);

    return (
        <div className={styles.main}>
            <section className={styles.main__left}>
                <section className={styles.main__left__top}>
                    <img style={{ width: "100%", height: "100%" }} src={appli_list[applicationState].image} />
                </section>
                <section className={styles.main__left__bottom}>
                    <span>{appli_list[applicationState].short}</span>
                </section>
            </section>
            <section className={styles.main__right}>
                <span className={styles.main__right__heading}>{appli_list[applicationState].name}</span>
                <section className={styles.main__right__top}>
                    <span>{appli_list[applicationState].long}</span>
                </section>
                <section className={styles.main__right__bottom}>
                    {
                        appli_list[applicationState].extra ? appli_list[applicationState].extra.map((ele) => {
                            return <LineInfo data={ele} />
                        }) : <LineInfo data={"No data available !"} />
                    }
                </section>
            </section>
        </div>
    );
}

export default AppliFrame;