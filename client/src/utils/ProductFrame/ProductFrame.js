import styles from '../ProductFrame/ProductFrame.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { prod_list } from '../Constants';
const ProductFrame = () => {

    const productState = useSelector((state) => state.current.productState);

    return <div className={styles.main}>
        <section className={styles.left}>
            <section className={styles.left__inside}>
                <img style={{ width: "100%", height: "100%" }} src={prod_list[productState].image} />
            </section>
        </section>
        <section className={styles.right}>
            <section className={styles.right__heading}>
                <span>{prod_list[productState].name}</span>
            </section>
            <section className={styles.right__desc}>

            </section>
            <section className={styles.right__body}>

            </section>
        </section>
    </div>
}

export default ProductFrame;