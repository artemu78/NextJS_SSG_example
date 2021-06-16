import React from 'react';
import classnames from 'classnames';

import styles from './HeaderHelp.module.scss';

const HeaderHelp: React.FC = () => (
  <div
    className={classnames(styles.HeaderHelp, 'Container')}
    data-testid="HeaderHelp"
    style={{ zIndex: 10, position: 'relative' }}
  >
    <div className={styles.HeaderHelp__content}>
      <div>
        Need help <span className="icon-help-circled"></span>
      </div>
      <div className={styles.HeaderHelp__vat}>
        INC VAT{' '}
        <label className={styles.HeaderHelp__switch}>
          <input type="checkbox" className={styles.HeaderHelp__checkbox} />
          <span className={styles.HeaderHelp__slider}></span>
        </label>{' '}
        EX VAT
      </div>
    </div>
  </div>
);

export default HeaderHelp;
