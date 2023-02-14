import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import style from "./Product.module.css";

function Product() {
  // products data 가져오기
  const [productList, setProductList] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductList(data);
      });
  }, []);

  return (
    <section>
      <h2 className={style.title}>2월 행사 상품</h2>
      <h3 className={style.text}>
        EMART24가 준비한 이달의 행사상품을 만나보세요.
      </h3>
      <div className={style.productWrap}>
        <div className={style.container}>
          {productList && productList.map((prod) => (
              <div>
                <div className={style.box}>
                  <div className={style.thumbnail}>
                    <Link to={`/productdetail/${prod.id}`}>
                      <img src={prod.thumbnail} alt="product01" />
                    </Link>
                  </div>
                </div>

                <div className={style.info}>
                  <p className="product_title">{prod.name}</p>
                  <p className="product_price">{prod.price}원</p>
                  {/* <p className="product_brand">{prod.brand}</p> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
