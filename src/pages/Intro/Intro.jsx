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
          <div className={styles.introContainer}>
            <img alt="icon" src={icon} />
            <h1>RateMyDeath.org</h1>
            <p>
              While Trump brags about his press conference ratings,
              thousands of Americans are dying. So exactly how much is a humanlife worth to Trump?
            </p>
            <Link to="/home">
              Let's Find Out
            </Link>
            {/* <Link to="/home">Home</Link> */}
          </div>
          <Video id={'BjNuiJXEw00'} />
        </div>
      </div>
    )
  }
}

export default Intro;
