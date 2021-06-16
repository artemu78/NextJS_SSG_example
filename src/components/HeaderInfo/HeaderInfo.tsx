import React from 'react';
import styles from './HeaderInfo.module.scss';

const HeaderInfo: React.FC = () => (
  <div className="Container">
  <div className={styles.HeaderInfo__content} data-testid="HeaderInfo">
    HeaderInfo Component
  </div>
  </div>
);

export default HeaderInfo;
