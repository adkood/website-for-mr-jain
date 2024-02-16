import React, { useEffect } from "react";
import style from '../Home/HomePage.module.css';
import { IoMdStar } from "react-icons/io";
import { PiButterflyFill } from "react-icons/pi";

const HomePage = React.memo(() => {

    useEffect(() => {
        function moveButterfly(classNaam) {
            const butterfly = document.getElementById(classNaam);
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            const randomX = Math.floor(Math.random() * screenWidth);
            const randomY = Math.floor(Math.random() * screenHeight);

            butterfly.style.transition = 'transform 5s ease-in-out';
            butterfly.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }

        const moveButterflies = () => {
            moveButterfly('butterfly01');
            moveButterfly('butterfly02');
            moveButterfly('butterfly03');
            
            setTimeout(moveButterflies, 3000);
        };

        moveButterflies();
    }, []);

    return (
        <div id="name" className={style.home}>
            <PiButterflyFill id="butterfly01" className={style.butterfly01} />
            <PiButterflyFill id="butterfly02" className={style.butterfly02} />
            <PiButterflyFill id="butterfly03" className={style.butterfly03} />
            <IoMdStar className={style.star} size="2rem" color="white" />
            <div className={style.cont}>
                <span className={style.content}>
                    JD Jain and Company proudly presents its manufacturing unit JDJ Alloys as it embarks on a groundbreaking venture.
                </span>
            </div>
        </div>
    );
});

export default HomePage;