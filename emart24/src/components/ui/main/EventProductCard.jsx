import React from "react";
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import style from "../main/EventProductCard.module.css";

function EventProductCard() {
  return (
    <>
      <div className={style.title}>
        <h1>행사 상품 </h1>
        <h2>이마트24가 준비한 이달의 행사상품을 만나보세요.</h2>
      </div>
      <CardGroup id={style.CardWrap}>
        <Card>
        <Link to="/productdetail/1">
          <Card.Img
            variant="top"
            src="https://sitem.ssgcdn.com/21/16/61/item/1000529611621_i1_1100.jpg"
          /></Link>
          <Card.Body>
            <Card.Title className={style.CardTitle}>킷캣 오리지널</Card.Title>
          </Card.Body>
        </Card>

        <Card>
        <Link to="/productdetail/4">
          <Card.Img
            variant="top"
            src="https://sitem.ssgcdn.com/50/75/43/item/1000029437550_i1_1100.jpg"
          /></Link>
          <Card.Body>
            <Card.Title className={style.CardTitle}>
              린트 엑설런스 다크 99%
            </Card.Title>
          </Card.Body>
        </Card>

        <Card>
        <Link to="/productdetail/6">
          <Card.Img
            variant="top"
            src="https://sitem.ssgcdn.com/17/24/06/item/1000262062417_i1_550.jpg"
          /></Link>
          <Card.Body>
            <Card.Title className={style.CardTitle}>
              게이샤 헤이즐넛 필링 밀크 초콜릿{" "}
            </Card.Title>
          </Card.Body>
        </Card>

        <Card>
        <Link to="/productdetail/8">
          <Card.Img
            variant="top"
            src="https://sitem.ssgcdn.com/60/71/07/item/2097001077160_i1_1100.jpg"
          /></Link>
          <Card.Body>
            <Card.Title className={style.CardTitle}>
              쇼게튼 다크초콜릿 위드 코코아 헤이즐넛
            </Card.Title>
          </Card.Body>
        </Card>

        <Card>
        <Link to="/productdetail/9">
          <Card.Img
            variant="top"
            src="https://sitem.ssgcdn.com/50/60/73/item/1000293736050_i1_1100.jpg"
          /></Link>
          <Card.Body>
            <Card.Title className={style.CardTitle}>허쉬 후퍼스</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}
export default EventProductCard;
