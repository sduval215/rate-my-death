import React, { Component } from 'react';

// SUB UI COMPONENTS
import Statement from '../../components/Statement/Statement';
import Resources from '../../components/Resources/Resources';
import Calendar from '../../components/Calendar/Calendar';
import CTA from '../../components/CTA/CTA';
import Intro from '../../components/Intro/Intro';

// STYLES
import styles from './Home.module.scss';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      showIntro: false
    }
  }

  render() {
    const { showIntro } = this.state;
    return(
      <div className={styles.pageWrapper}>
        { showIntro ? (
          <Intro navigate={() => this.setState({ showIntro: false })}/>
        ): (
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
        )}
      </div>
    )
  }
}

export default Home;
