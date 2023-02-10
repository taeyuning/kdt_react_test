
import React from 'react';
import style from '../main/MainBanner.module.css';


function MainBanner() {
  return (


    <div className={style.mainbanner}>
      {/* 움직이게 만들고 싶지만 일단 그냥 있기 */}

      <div className={style.flexbox}>
        <img src={require("../../../img/mainsection1.png")} alt=" " />
        <img src={require("../../../img/mainsection2.png")} alt=" " />
        <img src={require("../../../img/mainsection3.png")} alt=" " />
      </div>
    </div>

  );

}
export default MainBanner;