
import React from 'react';
import style from '../main/MainBanner.module.css';


function MainBanner() {
  return (
<div className={style.bannerWrap}>
<div className={style.slider}>
    <input type="radio" name="slide" id="slide1" checked/>
    <input type="radio" name="slide" id="slide2"/>
    <input type="radio" name="slide" id="slide3"/>

    <ul id="imgholder" className={style.img}>
        <li><img src="https://emart24.co.kr/image/NTAwOA==" alt=''/></li>
        <li><img src="https://emart24.co.kr/image/NDk3Mg==" alt=''/></li>
        <li><img src="https://emart24.co.kr/image/NDg1OA==" alt=''/></li> 
    </ul>
    <div className={style.bullet}>
        <label for="slide1">&nbsp;</label>
        <label for="slide2">&nbsp;</label>
        <label for="slide3">&nbsp;</label>
    </div>
    
</div>
</div>
  );

}

export default MainBanner;
//수정하기