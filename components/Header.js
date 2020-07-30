import Link from 'next/link';

import HeaderMenu from './HeaderMenu';

import styles from './Header.module.css';

export default function Header({ animate }) {
  return (
    <header className={styles.header}>
      <h1><Link href="/"><a>Joe Attardi</a></Link></h1>
      <HeaderMenu animate={animate} />
    </header>
  );
}
