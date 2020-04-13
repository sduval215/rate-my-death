import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import styles from './Intro.module.scss';

class Intro extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <h1>INTRODUCTION</h1>
          <Link to="/home">Home</Link>
        </div>
      </div>
    )
  }
}

export default Intro;
