import React from 'react';

// COMPONENTS
import Video from '../../components/Video/Video';

// STYLES
import styles from './Intro.module.scss';

// ASSETS
const logo = require('./imgs/logo.svg');

const Intro = ({ navigate }) => (
  <div className={styles.pageWrapper}>
    <div className={styles.videoWrapper}>
      <Video autoPlay canRender id={1} />
    </div>
    <div className={styles.pageContainer}>
      <div className={styles.introContainer}>
        <img alt="logo" src={logo} />
        <p>
          While president Trump brags about his press conference ratings <br/>
          thousands of Americans are dying.
        </p>
        <p>
          So exactly how much is a human life worth to Trump?
        </p>
        <span onClick={navigate}>
          Let's Find Out
        </span>
      </div>
    </div>
  </div>
)

export default Intro;
