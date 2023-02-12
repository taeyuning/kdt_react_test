import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "./EventProductDetail.module.css";

function EventProductDetail() {
  const { id } = useParams();
  
  console.log(id);

  const [productDetail, setProductDetail] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductDetail(data);
      });
  }, []);


  return (
<section>
 {productDetail && productDetail.map((prod) =>(
<></>

 ))}
</section>
  );


  }

export default EventProductDetail;
