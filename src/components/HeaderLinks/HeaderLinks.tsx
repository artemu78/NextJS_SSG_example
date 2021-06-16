import React from 'react';
import styles from './HeaderLinks.module.scss';

const HeaderLinks: React.FC = () => (
  <div className="Container">
  <div className={styles.HeaderLinks__content} data-testid="HeaderLinks">
    HeaderLinks Component
  </div></div>
);

export default HeaderLinks;
