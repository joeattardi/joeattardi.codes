import Layout from '../components/Layout';

import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.title}>
            <img src="/joe.jpg" />
            <div>
              <h1>Joe Attardi</h1>
              <h2>Full Stack Software Engineer</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
