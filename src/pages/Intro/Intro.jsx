import React, { Component } from 'react';

// ROUTING
// import { Link } from 'react-router-dom';

// COMPONENTS
import Video from '../../components/Video/Video';

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
          <div className={styles.introContainer}>
            <h1>Rate my death</h1>
            {/* <Link to="/home">Home</Link> */}
          </div>
          <Video id={'BjNuiJXEw00'} />
        </div>
      </div>
    )
  }
}

export default Intro;
