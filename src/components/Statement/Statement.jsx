import React from 'react';

import styles from './Statement.module.scss';

const country = require('./imgs/country.svg');

const Statement = () => (
  <div className={styles.statementContainer}>
    <div className={styles.heroContainer}>
      <img alt="country" src={country} />
      <div>
        <p>US COVID-19 DEATHS</p>
        <h3>34,934</h3>
      </div>
    </div>
    <div className={styles.copyContainer}>
      <h4>Just a reminder that it didn't need to be like this.</h4>
      <p>
        A reminder that we didn’t need to sacrifice tens of thousands of American lives to this "pandemic no one saw coming." 
        And a reminder that there’s documented evidence that Trump knew about how deadly this pandemic would be as early as January 29th. <span>1</span>
      </p>
      <p>
      Inaction is one thing, but Trump also fired the US Pandemic Response Team in 2018, <span>2</span> willfully ignored the NSC’s pandemic response playbook, <span>3</span> 
      fired CDC experts in China,<span>4</span> haphazardly downplayed the severity of the pandemic for weeks,<span>5</span> is cutting funding to the World Health Organization, <span>6</span>
      and is using his press conferences to tout scientifically unproven and potentially dangerous drugs as treatments for the Coronavirus.<span>7</span>
      </p>
      <p>
      This is a president who cares more about his TV ratings, his stocks, and his reputation than human lives.
      There’s blood on President Trump’s hands.
      </p>
      <div className={styles.citationsContainer}>
        <a>1. "Trade Advisor Warned White House in January..." - NYT</a>
        <a>2. "Did the Trump Administration Fire the US Pandemic response Team?" - Snopes</a>
        <a>3. "Trump team failed to folllow NSC's pandemic playbook" - Politico</a>
        <a>4. "US slashed CDC staff inside China prior to cronavirus outbreak" - Reuters</a>
        <a>5. Video Source - Twitter</a>
        <a>6. "Trump halts funding to World Health Organization" - Politico </a>
        <a>7. "Trump touts unproven drug..." - Independent</a>
      </div>
    </div>
  </div>
)

export default Statement;