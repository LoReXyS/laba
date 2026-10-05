import { useState } from 'react';
import styles from './Modal.module.css';

export default function Modal({ onClose, setUser }) {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: form.username.trim(),
      email: form.email.trim(),
      password: form.password,
    };

    localStorage.setItem('user', JSON.stringify(newUser));

    if (setUser) setUser(newUser);

    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Sign up</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            <p className={styles.labelText}>Username</p>
            <input
              className={styles.input}
              type='text'
              name='username'
              value={form.username}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            <p className={styles.labelText}>E-Mail</p>
            <input
              className={styles.input}
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>
            <p className={styles.labelText}>Password</p>
            <input
              className={styles.input}
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <button className={styles.submitBtn} type='submit'>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
