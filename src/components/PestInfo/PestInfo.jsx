import styles from '../PestInfo/PestInfo.module.css';
import { useEffect, useState } from 'react';
export default function PetInfo({ data }) {
  if (!data) return null;

  return (
    <li className={styles.petCard}>
      <img src={data.imageUrl} alt='Pet interaction' className={styles.image} />
      <p className={styles.description}>{data.text}</p>
    </li>
  );
}
