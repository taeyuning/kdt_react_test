import React, { useEffect, useState }  from 'react';
import style from './EventProduct.module.css';
import { Link } from 'react-router-dom';

function EventProduct() { 

        // product data 가져오기
        const [productList, setProductList] = useState();
        
        useEffect(() => {
          fetch("http://localhost:3001/products")
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setProductList(data);
          }) 
        }, []);
      
       //데이터 적용?하기
        return(
          <section>
            <div className={style.productWrap}>
            <h2>이마트24 상품리스트</h2>
            {productList && productList.map(prod => 
                      <div className={style.thumbnail}>
                      <div id="container">
                          <img src={prod.thumbnail} alt="product01" />
                      </div>
                        <div className={style.info}>
                          <p className="product_title">{prod.name}</p>
                          <p className="product_price">{prod.price}</p>
                          <p className="product_option"></p>
                      </div>
                    </div>
              )}
               </div>
          </section>
      
        )
      
      }
      
export default EventProduct;