import { useState } from 'react';
import { informList } from './navListData';
import styles from './NavList.module.css';

export default function NavList({ mobile }) {
  return (
    <nav>
      <ul className={mobile ? styles.ulMobile : styles.ulMap}>
        <li>
          <a href='#'>Who we are</a>
        </li>
        <li>
          <a href='#'>Contacts</a>
        </li>
        <li>
          <a href='#'>Menu</a>
        </li>
      </ul>
    </nav>
  );
}
