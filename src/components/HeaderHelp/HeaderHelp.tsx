import React, { useContext } from 'react';
import classnames from 'classnames';
import { ThemeContext } from 'src/contexts/theme';
import styles from './HeaderHelp.module.scss';

const HeaderHelp: React.FC = () => {
  const { switchTheme } = useContext(ThemeContext);

  const toggleTheme = (obj: any) => {
    switchTheme(obj.target.checked ? 'dark' : 'light');
  };

  return (
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
          Change theme LIGHT{' '}
          <label className={styles.HeaderHelp__switch}>
            <input type="checkbox" className={styles.HeaderHelp__checkbox} onClick={toggleTheme} />
            <span className={styles.HeaderHelp__slider}></span>
          </label>{' '}
          DARK
        </div>
      </div>
    </div>
  );
};

export default HeaderHelp;
