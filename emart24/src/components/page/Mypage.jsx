import React from 'react';
import style from '../page/Mypage.module.css';


function Mypage() {
    return (

        <section className={style.mypage}>
            <div className={style.container}>
                <div className={style.box1}>
                    <h1> 김태윤님 반갑습니다 </h1>
                    <h2> emart24 QR코드 </h2>
                    <button1 className='btn'> 열기 </button1>
                    <h3> emart24 포인트 </h3>
                    <h4>1000 p</h4>
                    <h5> 쿠폰 </h5>
                    <h6> 3 개 </h6>
                
                    <h7> 회원정보 변경 </h7>
                    <button2 className='btn'> 개인정보 변경 </button2>
                    <button3 className='btn'> 비밀번호 변경 </button3>

</div>

                <h8> 구매내역 (최근 1개월)  </h8>
                <h9> 이벤트 참여 내역  </h9>

                <div className={style.box2}>
                    <li>  </li>
                </div>

                <div className={style.box3}>
                </div>

                <h9>  </h9>
                <div className={style.box4}>
                </div>

                <div className={style.box5}>
                </div>


           
                </div> 
               

        </section>

    );
}

export default Mypage;