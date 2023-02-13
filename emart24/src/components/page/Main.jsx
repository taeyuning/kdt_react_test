import React from 'react';
import MainBanner from '../ui/main/MainBanner.jsx';
import Login from '../ui/main/Login.jsx';

import style from '../page/Main.module.css';


function Main() {
    return ( 
            <>
            <div className={style.mainWrap}>
            <MainBanner />
            <Login />
            </div>
        </>

                );
                }

                export default Main;