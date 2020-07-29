import styles from './ContactItem.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactItem({ icon, href }) {
  return (
    <div className={styles['contact-item']}>
      <a href={href}><FontAwesomeIcon icon={icon} /></a>
    </div>
  );
}
