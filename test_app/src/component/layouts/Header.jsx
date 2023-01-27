import React from 'react';
import styles from '../layouts/Header.module.css';

function Header() {

    return (
        <header className={styles.header}>
        <div className={styles.contents}>

        {/* 로고 사이즈 조절하기ㅠㅠ */}
       <h1 id="logo">
            <a href="#"><img src="./images/logo192.png"/></a> 
            </h1>
                    <nav className={styles.navigation}>
                        <ul>
                            <li> Menu </li>
                            <li> Cart </li>
                            <li> Store</li>
                        </ul>
                    </nav>

            </div>

        </header>


    );
}

export default Header;