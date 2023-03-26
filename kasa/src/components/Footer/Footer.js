import styles from "./Footer.module.css"


const Footer = () => {
  return (
   <footer className={styles.footerContainer}>
    <img src="/assets/whiteLogo.png" className={styles.footerLogo} alt="logo white" />
    <p className={styles.footerText}>© 2020 Kasa. All rights reserved</p>
   </footer>
  )
}

export default Footer