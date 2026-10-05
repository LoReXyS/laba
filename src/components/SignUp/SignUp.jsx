import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './SignUp.module.css';

export default function SignUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // при завантаженні читаємо localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <>
      {user ? (
        <div className={styles.userBlock}>
          Hello, {user.username}
          <button className={styles.btn} onClick={handleLogout}>
            LogOut
          </button>
        </div>
      ) : (
        <button className={styles.btn} onClick={() => setIsOpen(true)}>
          Sign Up
        </button>
      )}

      {isOpen && <Modal onClose={() => setIsOpen(false)} setUser={setUser} />}
    </>
  );
}
