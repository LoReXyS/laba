import { useState } from 'react';

import ComponentsWeather from '../ComponentsWeather/ComponentsWeather.jsx';
import InputHero from '../InputHero/InputHero.jsx';
import styles from './Hero.module.css';
import bg from '../../imgs/pc/hero/background.png';
export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1></h1>
      <div className={`${styles.container} ${styles.containerHero}`}>
        <h1 className={styles.herotxt}>Weather dashboard</h1>
        <ComponentsWeather />
        <InputHero />
      </div>
    </section>
  );
}
