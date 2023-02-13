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


  return (
    <>{
      productDetail && productDetail.name
  }</>

        
        );
        }
      
   



export default EventProductDetail;
