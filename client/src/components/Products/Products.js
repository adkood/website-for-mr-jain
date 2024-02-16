import React, { useEffect } from 'react';
import styles from '../Products/Products.module.css';
import Frame from '../../utils/Frame';
import { GiMoebiusStar } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { currentActions } from '../../store';
import { modalActions } from '../../store';

import { useInView } from 'react-intersection-observer';

const Products = React.memo(() => {

    const dispatch = useDispatch();

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            console.log("in view !");
        }
    }, [inView]);

    return <div ref={ref} id='prod' className={styles.prod}>
        <section className={`${styles.header} ${inView ? styles.inView : ''}`}>
            <GiMoebiusStar size={"1rem"} />
            <span> our products</span>
            <GiMoebiusStar size={"1rem"} />
        </section>
        <section className={`${styles.footer} ${inView ? styles.inView : ''}`}>
            <span>Unveiling Excellence in Copper Innovations: Explore Our Diverse Range of  Products - Copper Wire, Copper Rod, and Copper Strip.</span>
        </section>
        <section className={`${styles.middle} ${inView ? styles.inView : ''}`}>
            <section className={styles.middle__inside}>
                <section
                    // onClick={() => {
                    //     dispatch(currentActions.changeProductState(0));
                    //     dispatch(modalActions.productStateToggle());
                    // }} 
                    className={styles.middle__inside__image}>
                    <Frame width={"100%"} height={"100%"} name={"Copper Wire"} image={"https://i.ibb.co/brsSPgv/copper-Wire.png"} />
                </section>
                <section className={styles.middle__inside__brief}>
                    <span className={styles.product__brief}>Used in power transmission, power distribution, telecommunications and countless types of electrical equipment.</span>
                </section>
            </section>

            <section
                // onClick={() => {
                //     dispatch(currentActions.changeProductState(1));
                //     dispatch(modalActions.productStateToggle());
                // }}
                className={styles.middle__inside}>
                <section className={styles.middle__inside__image}>
                    <Frame width={"100%"} height={"100%"} name={"Copper Rod"} image={"https://i.ibb.co/tYmD8LG/copper-Rod.png"} />
                </section>
                <section className={styles.middle__inside__brief}>
                    <span className={styles.product__brief}>Rods are popular for general applications such as busbars, transformer components and more.</span>
                </section>
            </section>

            <section
                // onClick={() => {
                //     dispatch(currentActions.changeProductState(2));
                //     dispatch(modalActions.productStateToggle());
                // }} 
                className={styles.middle__inside}>
                <section className={styles.middle__inside__image}>
                    <Frame width={"100%"} height={"100%"} name={"Copper Strip"} image={"https://i.ibb.co/FsJ8MKS/copper-Strip.png"} />
                </section>
                <section className={styles.middle__inside__brief}>
                    <span className={styles.product__brief}>Strips are used as heat-sinks, heat exchangers, condensers, lightning conductors and more.</span>
                </section>
            </section>
        </section>
    </div>
});

export default Products;