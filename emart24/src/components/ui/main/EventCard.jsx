import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import style from '../main/EventCard.module.css';


function EventCard() {
 
    return (
        
        <><div className={style.title}>
            <h1>진행중인 이벤트 </h1>
            <h2>이마트24의 다양한 이벤트에 참여해보세요.</h2>
        </div>
        <CardGroup id={style.CardWrap}>
                <Card className={style.Card}>
                    <Card.Img variant="top" src="https://emart24.co.kr/image/NTAwOA==" />
                    <Card.Body>
                        <Card.Title className={style.CardTitle}>1+1 발렌타인 이벤트</Card.Title>
                        <Card.Text  className={style.CardText}>
                            2023.02.08~2023.02.19
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src="https://emart24.co.kr/image/NDg1OA==" />
                    <Card.Body>
                        <Card.Title className={style.CardTitle}>2월 매장/카드행사</Card.Title>
                        <Card.Text className={style.CardText}>
                            2023.02.01~2023.02.28.{' '}
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src="https://emart24.co.kr/image/NDk0MA==" />
                    <Card.Body>
                        <Card.Title className={style.CardTitle}>SKYPASS 적립하고 파리가자!</Card.Title>
                        <Card.Text  className={style.CardText}>
                            2023.02.01~2023.03.17
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup></>
      );
}
export default EventCard;