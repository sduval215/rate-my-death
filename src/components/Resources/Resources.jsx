import React from 'react'

import styles from './Resources.module.scss';

const link = require('./imgs/link.svg');

// ASSETS
const ppeIcon = require('./imgs/icons/ppe-icon.png');
const customPPEIcon = require('./imgs/icons/custom-ppe-icon.png');
const businessIcon = require('./imgs/icons/business-icon.png');
const bloodIcon = require('./imgs/icons/blood-icon.png');
const mailIcon = require('./imgs/icons/mail-icon.png');
const hospitalIcon = require('./imgs/icons/hospital-icon.png');

const renderResourceItem = (icon, label, route) => (
  <a target="__blank" href={route}>
    <div className={styles.listItem}>
      <div className={styles.icon}>
        <img alt="resource" src={icon}/>
      </div>
      <div className={styles.link}>
        <p>{label}</p>
        <img alt="link" src={link} />
      </div>
    </div>
  </a>
)

const Resources = () => (
  <div className={styles.resourcesContainer}>
    <h3>
      Feeling helpless? Here are some ways you can help:
    </h3>
    <div className={styles.listContainer}>
      {renderResourceItem(ppeIcon, 'Donate Personal Protective Equipment (PPE)', 'https://thriveglobal.com/categories/first-responders-first/')}
      {renderResourceItem(customPPEIcon, 'Make your own PPE', 'https://www.youtube.com/watch?v=zm_NmpdgWWA')}
      {renderResourceItem(hospitalIcon, 'Send Food to a Hospital', 'https://www.gofundme.com/f/help-us-send-dinner-to-healthcare-heroes-in-nyc')}
      {renderResourceItem(bloodIcon, 'Donate to the Red Cross', 'https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/coronavirus-safety.html')}
      {renderResourceItem(mailIcon, 'Save the Postal Service', 'https://store.usps.com/store/home')}
      {renderResourceItem(businessIcon, 'Support local businesses', '')}
    </div>
  </div>
)

export default Resources;
