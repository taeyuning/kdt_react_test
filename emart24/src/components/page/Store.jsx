import React from "react";
import style from "./Store.module.css";

function Store() {
  return (
    <section className={style.mapServiceSection}>
      <div className={style.titleWrap}>
        <div className={style.title}>
          <h1>매장찾기</h1>
          <h2>EMART24의 매장을 찾아보세요.</h2>
        </div>

        <box className={style.searchBarWrap}>
          <input
            className={style.searchBar}
            placeholder="매장명을 검색해주세요"
            type="text"
            class="searchBar"
          />

          <img
            className={style.icon}
            src="https://emart24.co.kr/assets/assets/imgs/searchYellow.png"
            alt=""
          />
        </box>
      </div>
      <div class={style.tagWrap}>
          <button>24시간</button>
          <button>택배</button>
          <button>ATM</button>
          <button>와인</button>
          <button>커피</button>
      </div>

      {/* <div className={style.mapWrap}>
        <img
          className={style.pin}
          src="https://emart24.co.kr/assets/assets/imgs/mapPin.png"
          alt="지도"
        />
        <img
          className={style.mapPaper}
          src="https://emart24.co.kr/assets/assets/imgs/mapPaper.png"
          alt="지도"
        />
      </div> */}
    </section>
  );
}

export default Store;
