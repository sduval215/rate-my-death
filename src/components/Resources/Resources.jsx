import React from 'react'

import styles from './Resources.module.scss';

const resource = require('./imgs/resource.svg');
const link = require('./imgs/link.svg');

// ASSETS
const ppeIcon = require('./imgs/icons/ppe-icon.svg');
const customPPEIcon = require('./imgs/icons/custom-ppe-icon.svg');

const renderResourceItem = (icon, label, route) => (
  <div className={styles.listItem}>
    <div className={styles.icon}>
      <img alt="resource" src={icon}/>
    </div>
    <div className={styles.link}>
      <p>{label}</p>
      <a href={route}>
        <img alt="link" src={link} />
      </a>
    </div>
  </div>
)

const Resources = () => (
  <div className={styles.resourcesContainer}>
    <h3>If you'd like to help, please consider the following:</h3>
    <div className={styles.listContainer}>
      {renderResourceItem(ppeIcon, 'Donate Personal Protective Equipment (PPE)')}
      {renderResourceItem(customPPEIcon, 'Make your own PPE')}
      {renderResourceItem(resource, 'Send Food to a Hospital')}
      {renderResourceItem(resource, 'Donate Blood or Money to the Red Cross')}
      {renderResourceItem(resource, 'Save the Postal Service')}
      {renderResourceItem(resource, 'Support local businesses')}
    </div>
  </div>
)

export default Resources;
