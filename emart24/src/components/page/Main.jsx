import React from 'react';
import MainBanner from '../ui/main/MainBanner.jsx';
import Login from '../ui/main/Login.jsx';
import EventCard from '../ui/main/EventCard.jsx';
import EventProductCard from '../ui/main/EventProductCard.jsx';

import style from '../page/Main.module.css';


function Main() {
    return ( 
        <>
            <div className={style.mainWrap}>
            <MainBanner />
            <Login />
            <EventCard/>
            <EventProductCard/>
            </div>
        </>
    );
}

export default Main;