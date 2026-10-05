import { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './AccountActions.module.css';
import person from '../../imgs/pc/header/person.png';
import SignUp from '../SignUp/SignUp';

export default function AccountActions({ mobile }) {
  return (
    <ul className={mobile ? styles.ulMobile : styles.ulAccount}>
      <li>
        <SignUp />
      </li>
      <li>
        <img src={person} alt='person' />
      </li>
    </ul>
  );
}
