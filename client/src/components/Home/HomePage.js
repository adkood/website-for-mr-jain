import React, { useEffect, useState } from "react";
import style from '../Home/HomePage.module.css';
import { IoMdStar } from "react-icons/io";
import { GiBee } from "react-icons/gi";

import { home_list } from "../../utils/Constants";

const HomePage = React.memo(() => {

    const [img, setImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImg(prev => (prev + 1 + home_list.length) % home_list.length);
        }, 4000);
        return () => clearInterval(interval)
    }, []);

    const contStyle = {
        backgroundImage: `url(${home_list[img].image})`,
        transition: 'background-image 0.5s ease-in-out',
    };

    return (
        <div id="name" className={style.home}>
            <IoMdStar className={style.star} size="2rem" color="#F0E0B4" />
            <div className={style.cont} style={contStyle}></div>
            <div className={style.content}>
                JD JAIN AND COMPANY PROUDLY PRESENTS ITS MANUFACTURING UNIT JDJ ALLOYS AS IT EMBARKS ON A GROUNDBREAKING VENTURE.
            </div>
        </div>
    );
});

export default HomePage;
