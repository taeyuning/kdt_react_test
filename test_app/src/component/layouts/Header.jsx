import React from 'react';
import styles from '../layouts/Header.module.css';

function Header() {

    return (
        <header className={styles.header}>
        <div className={styles.contents}>
       

       <h1 id="logo">
            <a href="#"><img src="./images/logo50.png"/></a> 
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