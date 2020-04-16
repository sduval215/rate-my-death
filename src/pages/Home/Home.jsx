import React, { Component } from 'react';

import Swiper from 'react-id-swiper';

// COMPONENTS
import Video from '../../components/Video/Video';

// STATIC DATA
import { slideData } from './data';

import styles from './Home.module.scss';

const indexIcon = require('./imgs/index-icon.svg');
const twitterIcon = require('../../static/imgs/twitter-icon.svg');

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoIndex: 1
    }
  }

  /**
   * Sets swiper listener logic
   * @param {Class} swiper
   */
  setSwiperListener = (swiper) => {
    if(swiper !== null) {
      swiper.on('slideChange', () => {
        this.setState({ videoIndex: swiper.activeIndex + 1 })
        console.log('SLIDE CHANGED');
      })
    }
  }
  
  renderIndexSlide = () => (
    <div className={[ styles.calendar, styles.indexCalendar ].join(' ')}>
      <div className={styles.indexHeader}>
        <img alt="index-icon" src={indexIcon}/>
          <p>JAN-MAR</p>
      </div>
        <div className={styles.indexBody}>
          <p>
            For an in-depth timeline of events before Trump's <span>campaign rallies</span>
            White House press briefings, read this detailed article from the <a href="/">New York Times.</a>
          </p>
        </div>
        <div className={styles.indexFooter}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Ut eros urna, sollicitudin quis ornare vel, ultrices sit amet urna.
        </p>
        <button type="button">
          <img alt="twitter" src={twitterIcon}/>
          TWEET @ TRUMP
        </button>
      </div>
    </div>
  )

  render() {
    const { videoIndex } = this.state;
    return(
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <div className={styles.calendarWrapper}>
            <div className={styles.calendarContainer}>
              <Swiper
                getSwiper={this.setSwiperListener}
                allowTouchMove
                freeMode
                freeModeSticky
                // initialSlide={2}
                slideNextClass={styles.adjacentSlide}
                slidePrevClass={styles.adjacentSlide}
                slideActiveClass={styles.activeSlide}
                wrapperClass={styles.swiperContainer}
              >
                {slideData.map((data, index) => {
                  const { month, day, viewers, body } = data;
                  // RENDER INDEX SLIDE ON FIRST INDEX
                  if (index === 0) return this.renderIndexSlide();
                  return(
                    <div className={styles.calendar}>
                      <div className={styles.dateContainer}>
                        <h1>11</h1>
                        <h3>April</h3>
                      </div>
                      <Video id={videoIndex} />
                    </div>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
