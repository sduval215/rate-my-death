import React, { Component } from 'react';

// SUB UI COMPONENTS
import Statement from '../../components/Statement/Statement';
import Resources from '../../components/Resources/Resources';
import Calendar from '../../components/Calendar/Calendar';
import CTA from '../../components/CTA/CTA';
// STYLES
import styles from './Home.module.scss';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          {/* CALENDAR */}
          <Calendar />
          {/* STATEMENT */}
          <Statement />
          {/* RESOURCES */}
          <Resources />
          {/* CTA */}
          <CTA />
        </div>
      </div>
    )
  }
}

export default Home;
