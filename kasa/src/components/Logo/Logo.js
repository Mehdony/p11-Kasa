import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <img className='Logo' src="/LOGO.png" alt="logo Kasa" />
        </div>
    );
};

export default Logo;