import React, { useEffect } from "react";
import style from '../Home/HomePage.module.css';
import { IoMdStar } from "react-icons/io";
import { GiBee } from "react-icons/gi";
const HomePage = React.memo(() => {

    return (
        <div id="name" className={style.home}>
            <IoMdStar className={style.star} size="2rem" color="rgb(238, 236, 236)" />
            <div className={style.cont}></div>
            <div className={style.content}>
                    JD Jain and Company proudly presents its manufacturing unit JDJ Alloys as it embarks on a groundbreaking venture.
            </div>
        </div>
    );
});

export default HomePage;