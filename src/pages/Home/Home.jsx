import React, { Component } from 'react';

import Swiper from 'react-id-swiper';

// COMPONENTS
import Video from '../../components/Video/Video';

import styles from './Home.module.scss';

const calendarObject = [
  {
    month: 'April',
    day: 11,
    deaths: 1830,
    views: '8.8 million'
  },
  {
    month: 'April',
    day: 11,
    deaths: 1830,
    views: '8.8 million'
  },
  {
    month: 'April',
    day: 11,
    deaths: 1830,
    views: '8.8 million'
  }
]

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

  render() {
    const { videoIndex } = this.state;
    console.log(videoIndex);
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
                slideNextClass={styles.adjacentSlide}
                slidePrevClass={styles.adjacentSlide}
                slideActiveClass={styles.activeSlide}
                wrapperClass={styles.swiperContainer}
              >
                <div className={styles.calendar}>
                  <div className={styles.dateContainer}>
                    <h1>11</h1>
                    <h3>April</h3>
                  </div>
                  <Video id={videoIndex} />
                </div>
                <div className={styles.calendar}>
                  <div className={styles.dateContainer}>
                    <h1>12</h1>
                    <h3>April</h3>
                  </div>
                  <Video id={videoIndex} />
                </div>
                <div className={styles.calendar}>
                  <div className={styles.dateContainer}>
                    <h1>13</h1>
                    <h3>April</h3>
                  </div>
                  <Video id={videoIndex} />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
