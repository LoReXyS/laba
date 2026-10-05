import styles from './Footer.module.css';
import inst from '../../imgs/pc/Footer/inst.png';
import fc from '../../imgs/pc/Footer/fc.png';
import whatsapp from '../../imgs/pc/Footer/whatsapp.png';
import forecast from '../../imgs/pc/header/forecast.png';
import { useState } from 'react';
import { location } from './FooterApi';
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.content}>
            <img src={forecast} alt='logo' className={styles.imgss} />
            <ul className={styles.addressList}>
              <li className={styles.address}>
                <h3 className={styles.addressTitle}>Address</h3>
              </li>
              <li className={styles.address}>
                <nav className={styles.addressNav}>
                  {location[0].split(',').map((part, idx) => (
                    <a key={idx} href='' className={styles.addressLink}>
                      {part.trim()}
                    </a>
                  ))}
                </nav>
              </li>
            </ul>
            <ul className={styles.contactList}>
              <li className={styles.contact}>
                <h3 className={styles.contactTxt}>Contact us</h3>
              </li>
              <li className={styles.contact}>
                <nav className={styles.contactNav}>
                  <a href='' className={styles.contactLink}>
                    <img src={inst} alt='' />
                  </a>
                  <a href='' className={styles.contactLink}>
                    <img src={fc} alt='' />
                  </a>
                  <a href='' className={styles.contactLink}>
                    <img src={whatsapp} alt='' />
                  </a>
                </nav>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
