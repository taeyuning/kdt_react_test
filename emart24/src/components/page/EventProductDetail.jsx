import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "./EventProductDetail.module.css";

function EventProductDetail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState();

  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductDetail(data);
      });
  }, []);

//물어보기//
  return (
        <div>

           {productDetail && productDetail.map((prod) => (
           <div className={style.productWrap}>
           <div className={style.thumbnail}>
            <img src={prod.thumbnail} alt="product 01" />
            </div>
            <div className={style.info}>
            <h2>{prod.name}</h2>
            <p>{prod.price}원</p>
            <p>{prod.category}</p>
            <p>{prod.brand}</p>
            <p>{prod.description}</p>
            </div>
            </div>
            ))}
            
               </div>
        
        );
        }
      
   



export default EventProductDetail;
