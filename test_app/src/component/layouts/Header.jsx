import React from 'react';
import styles from '../layouts/Header.module.css';

function Header() {

return (  
<header className={styles.header}>
 <div className={styles.contents}>

<div>
<h1>로고 자리</h1>
</div>

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