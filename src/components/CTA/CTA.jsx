import React from 'react';

import styles from './CTA.module.scss';

const CTA = () => (
  <div className={styles.CTAContainer}>
    <div>
      <h2>This should go without saying, please vote in November.</h2>
      <button>
        REGISTER TO VOTE
      </button>
    </div>
  </div>
)

export default CTA;
