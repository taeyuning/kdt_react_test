import React from "react";
import style from "../main/Login.module.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  return (
    <Form id={style.formWrap}>
       
      <div className={style.select}>
        <button1 className='btn'>아이디</button1>
        <button2 className='btn'> emart24 앱</button2>
        
      </div>

      <Form className={style.form}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className={style.email}
            type="email"
            placeholder="아이디 입력"
          />
        </Form.Group>

        <Form.Group className="mbmb-3" controlId="formBasicPassword">
          <Form.Control
            className={style.password}
            type="password"
            placeholder="비밀번호 입력"
          />
        </Form.Group>

        <Form.Group className="style.mb-4" controlId="formBasicCheckbox">
          <Form.Check
            className={style.checkbox}
            type="checkbox"
            label="로그인 상태 유지"
          />
        </Form.Group>

        <Button calssname={style.button} variant="primary" type="submit">
          로그인
        </Button>
      </Form>
    </Form>
  );
}

export default BasicExample;
