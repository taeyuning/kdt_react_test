import React, { useEffect, useState }  from 'react';
import style from './Event.module.css';
import { Link } from 'react-router-dom';

function Event() { 

        // product data 가져오기
        const [eventList, setEventList] = useState();
        
        useEffect(() => {
          fetch("http://localhost:3001/events")
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setEventList(data);
          }) 
        }, []);
      
        return(
            <section>
              <div className={style.eventWrap}>
              <h2>2월 이벤트</h2>
              <h3>EMART24가 준비한 이달의 행사상품을 만나보세요.</h3>
              <div className={style.container}>
              {eventList && eventList.map((prod) => (
                        <div className={style.thumbnail}>  
                        <div id="container">
                        <Link to={`/eventdetail/${prod.id}`}>
                            <img src={prod.thumbnail} alt="event01" />
                           </Link>
                        </div>
                       
                          <div className={style.info}>
                          <p className="product_title">{prod.date}</p>
                        <p className="product_title">{prod.name}</p>
                        </div>
                      </div>
                ))}
                </div>
                 </div>
            </section>
        );
       
    }
export default Event;