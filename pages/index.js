import { useEffect, useState } from 'react';

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ContactItem from '../components/ContactItem';
import Layout from '../components/Layout';

import styles from './index.module.css';

export default function Home() {
  const [backgroundClass, setBackgroundClass] = useState('');

  useEffect(() => {
    if (Modernizr.webp) {
      setBackgroundClass(styles.webp);
    } else {
      setBackgroundClass(styles.jpeg);
    }
  }, []);

  const heroClasses = [styles.hero, backgroundClass].join(' ');

  return (
    <Layout>
      <div className={styles.container}>
        <div className={heroClasses}>
          <div className={styles.title}>
            <picture>
              <source type="image/webp" srcSet="/joe.webp" />
              <img alt="Joe Attardi" src="/joe.jpg" />
            </picture>
            <div>
              <h1>Joe Attardi</h1>
              <h2>Full Stack Software Engineer</h2>
            </div>
          </div>
          <div className={styles.contact}>
            <ContactItem icon={faEnvelope} href="mailto:jattardi@gmail.com" />
            <ContactItem icon={faTwitter} href="https://twitter.com/JoeAttardi" />
            <ContactItem icon={faLinkedin} href="https://linkedin.com/in/JoeAttardi" />
            <ContactItem icon={faGithub} href="https://github.com/joeattardi" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
