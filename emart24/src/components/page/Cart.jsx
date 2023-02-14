import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import style from '../page/Cart.module.css';


function Cart() {


    return ( 

        <div className={style.CartWrap}>
        <h1 className={style.Title}>장바구니</h1>
        <Table className={style.Table} bordered columns>
            <thead>
                <tr>
                    <th><Form.Check aria-label="option 1" /></th>
                    <th>상품명</th>
                    <th>상품 수량</th>
                    <th>상품 금액</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Form.Check aria-label="option 1" /></td>
                    <td>롯데 빈츠 2입 리미티드기획 408g</td>
                    <td>1개</td>
                    <td>5370원</td>
                </tr>
                <tr>
                    <td><Form.Check aria-label="option 1" /></td>
                    <td>킷캣 오리지널 18입</td>
                    <td>1개</td>
                    <td>9980원</td>
                </tr>
                <tr>
                <td><Form.Check aria-label="option 1" /></td>
                    <td>허쉬 다크초콜릿 아사이&블루베리210g</td>
                    <td>1개</td>
                    <td>9080원</td>
                </tr>
                <tr>
                <td>주문 금액 </td>
                    <td></td>
                    <td>3개</td>
                    <td>24,430원</td>
                </tr>
                
            </tbody>
        </Table>
        </div>
            );
       }
       
export default Cart;