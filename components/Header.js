import HeaderMenu from './HeaderMenu';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Joe Attardi</h1>
      <HeaderMenu />
    </header>
  );
}
