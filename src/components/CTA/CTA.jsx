import React from 'react';

import styles from './CTA.module.scss';

const CTA = () => (
  <div className={styles.CTAContainer}>
    <div>
      <h2>This should go without saying, but please vote in November:</h2>
      <a target="__blank" href="https://www.usa.gov/register-to-vote">
        <button>
          REGISTER TO VOTE
        </button>
      </a>
    </div>
  </div>
)

export default CTA;
