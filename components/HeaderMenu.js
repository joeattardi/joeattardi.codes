import { useState } from 'react';

import classNames from 'classnames';

import styles from './HeaderMenu.module.css';

export default function HeaderMenu() {
  const [isOpen, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!isOpen);
  }

  const menuClasses = classNames({
    [styles.menu]: true,
    [styles.open]: isOpen
  });

  return (
    <button className={menuClasses} onClick={toggleMenu}>
      <span className={styles.inner}></span>
      <span className={styles.inner}></span>
      <span className={styles.inner}></span>
    </button>
  )
}
