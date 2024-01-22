import React from 'react';
import styles from '../Products/Products.module.css';
import Frame from '../../utils/Frame';
const Products = () => {
    return <div id='prod' className={styles.prod}>
        <section className={styles.header}>
            <span>our products</span>
        </section>
        <section className={styles.middle}>
            <Frame width={"300px"} height={"300px"} name={"Copper Wire"} image={"copperWire.png"} />
            <Frame width={"300px"} height={"300px"} name={"Copper Rod"} image={"copperRod.png"} />
            <Frame width={"300px"} height={"300px"} name={"Copper Strip"} image={"copperStrip.png"} />
        </section>
        <section className={styles.footer}>
            <span>Unveiling Excellence in Copper Innovations: Explore Our Diverse Range of  Products - Copper Wire, Copper Rod, and Copper Strip.</span>
        </section>
    </div>
}

export default Products;