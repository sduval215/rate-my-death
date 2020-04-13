import React, { Component } from 'react';

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
          <h1>HOME</h1>
        </div>
      </div>
    )
  }
}

export default Home;
