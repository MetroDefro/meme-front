import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  return (
      <header>
        <div className={styles.Header}>
            <h1 class="home" id="home">Meme</h1>
        </div>
      </header>
  );
};

export default Header;
