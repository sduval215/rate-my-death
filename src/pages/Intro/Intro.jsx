import React, { Component } from 'react';

// ROUTING
import { Link } from 'react-router-dom';

// COMPONENTS
import Video from '../../components/Video/Video';

import styles from './Intro.module.scss';

const icon = require('./imgs/icon.svg');

class Intro extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <Video id={1} />
          <div className={styles.introContainer}>
            <img alt="icon" src={icon} />
            <h1>RateMyDeath.org</h1>
            <p>
              While president Trump brags about his press conference ratings <br/>
              thousands of Americans are dying.
            </p>
            <p>
              So exactly how much is a human life worth to Trump?
            </p>
            <Link to="/home">
              Let's Find Out
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;
