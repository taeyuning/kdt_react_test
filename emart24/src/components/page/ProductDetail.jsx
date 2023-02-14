import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "./ProductDetail.module.css";

function ProductDetail() {
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
  }, [id]);


  return (
    <>

    {
      productDetail && 
      <div className={style.productDetailWrap}>
      <h1>{productDetail.name}</h1>
        <img src={productDetail.thumbnail} alt="product01" />
        {/* <p>{productDetail.name}</p> */}
        <p>{productDetail.price}원</p>
        <p>{productDetail.brand}</p>
        <p>{productDetail.description}</p>

      </div>
    }
    </>
  );
}
      
   



export default ProductDetail;
