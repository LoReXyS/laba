import { useState } from 'react';
import img from '../../imgs/pc/hero/search.png';
import styles from './InputHero.module.css';
export default function InputHero() {
  return (
    <>
      <form className={styles.formHero}>
        <input
          type='text'
          placeholder='Search location...'
          className={styles.inputHero}
        />

        <button className={styles.btnHero}>
          <img src={img} alt='lupa' />
        </button>
      </form>
    </>
  );
}
