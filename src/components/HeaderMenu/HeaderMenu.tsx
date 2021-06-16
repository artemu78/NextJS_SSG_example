import React from 'react';
import Image from 'next/image';
import styles from './HeaderMenu.module.scss';
import cn from 'classnames';

const HeaderMenu: React.FC = () => (
  <div
    className="Container greyBorder"
    style={{ zIndex: 10, backgroundColor: 'white', position: 'relative' }}
  >
    <div className={styles.HeaderMenu__content} data-testid="HeaderMenu">
      <Image src="/images/screwfix-logo.svg" width="230" height="46" alt="Screwfix logo" />
      <div className={styles.HeaderMenu__search}>
        <input
          type="text"
          placeholder="What are you looking for?"
          className={cn(styles.HeaderMenu__inputSearch, 'icon', 'icon-search')}
        />
        <div className={styles.HeaderMenu__inputIcon}>
          <i className="icon icon-search" style={{ fontSize: '21px', color: '#636363' }}></i>
          {/* <Image
            src="/images/icons/search-ltr.svg.png"
            width="20"
            height="20"
            alt="Search icon"
            className={styles.HeaderMenu__inputIcon}
          /> */}
        </div>
      </div>
      <div className={cn(styles.HeaderMenu__buttonText, styles.HeaderMenu__button)}>
        <i className="icon icon-user" style={{ fontSize: '38px' }} />
        <span>Your Account</span>
        <span className={styles.HeaderMenu__buttonText_smallText}>Sign in / Register</span>
      </div>
      <div className={cn(styles.HeaderMenu__buttonText, styles.HeaderMenu__button)}>
        <i className="icon icon-location" style={{ fontSize: '38px' }} />
        <span>Store locator</span>
        <span className={styles.HeaderMenu__buttonText_smallText}>Select a store</span>
      </div>
      <div className={cn(styles.HeaderMenu__buttonText, styles.HeaderMenu__button)}>
        <i className="icon icon-basket" style={{ fontSize: '38px' }} />
        <span style={{ fontSize: '20px' }}>Checkout</span>
      </div>
    </div>
  </div>
);

export default HeaderMenu;
