import { useState } from 'react';
import Link from 'next/link';

import classNames from 'classnames';

import styles from './HeaderMenu.module.css';

export default function HeaderMenu() {
  const [isOpen, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!isOpen);
  }

  const buttonClasses = classNames({
    [styles.trigger]: true,
    [styles.open]: isOpen
  });

  const menuClasses = classNames({
    [styles.menu]: true,
    [styles.open]: isOpen
  });

  return (
    <>
      <button className={buttonClasses} aria-label="Menu" onClick={toggleMenu}>
        <span className={styles.inner}></span>
        <span className={styles.inner}></span>
        <span className={styles.inner}></span>
      </button>
      <nav className={menuClasses}>
        <ul>
          <li><Link href="/blog"><a>Blog</a></Link></li>
          <li><Link href="/books"><a>Books</a></Link></li>
          <li><Link href="/projects"><a>Projects</a></Link></li>
          <li><Link href="/uses"><a>Uses</a></Link></li>
        </ul>
      </nav>
    </>
  );
}
