import React from 'react';
import styles from './HeaderGroups.module.scss';

const catalogue = [
  { name: 'Bathrooms & Kitchens', link: '', items: [] },
  { name: 'Outdoor & Gardening', link: '', items: [] },
  { name: 'Screws, Nails & Fixings', link: '', items: [] },
  { name: 'Security & Ironmongery', link: '', items: [] },
  { name: 'Building & Doors', link: '', items: [] },
  { name: 'Safety & Workwear', link: '', items: [] },
  { name: 'Sealants & Adhesives', link: '', items: [] },
  { name: 'Storage & Ladders', link: '', items: [] },
  { name: 'Auto & Cleaning', link: '', items: [] },
  { name: 'Decorating', link: '', items: [] },
];

interface Item {
  name: string;
  link: string;
  items: any[];
}

const TopLevelItem = (props: Item) => (
  <div className={styles.HeaderGroups__topLevelItem}>
    {props.name}
    <div className={styles.HeaderGroups__popup}>{props.name} content</div>
  </div>
);

const HeaderGroups: React.FC = () => (
  <div className="Container greyBorder">
    <div className={styles.HeaderGroups__content} data-testid="HeaderGroups">
      {catalogue.map((item) => (
        <TopLevelItem {...item} key={item.name} />
      ))}
    </div>
  </div>
);

export default HeaderGroups;
