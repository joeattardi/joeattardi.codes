import Head from 'next/head';

import Header from './Header';

import styles from './Layout.module.css';

export default function Layout({ animate = true, title, children }) {
  return (
    <div>
      <Head>
        <title>{title ? `${title} | ` : ''} Joe Attardi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Header animate={animate} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
