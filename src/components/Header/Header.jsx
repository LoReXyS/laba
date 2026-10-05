import { useState } from 'react';
import NavList from '../NavList/NavList';
import AccountActions from '../AccountActions/AccountActions';
import styles from './Header.module.css';
import forecast from '../../imgs/pc/header/forecast.png';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleToggle = () => {
    if (open) {
      setClosing(true);
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 250);
    } else {
      setOpen(true);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={forecast} alt='logo' className={styles.imgss} />

        <button className={styles.menuBtn} onClick={handleToggle}>
          Menu ›
        </button>

        <div className={styles.desktop}>
          <NavList />
          <AccountActions />
        </div>

        {(open || closing) && (
          <div
            className={`${styles.mobileMenu} ${
              closing ? styles.closing : styles.open
            }`}
          >
            <NavList mobile />
            <AccountActions mobile />
          </div>
        )}
      </div>
    </header>
  );
}
