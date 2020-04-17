import React, { Component } from 'react';

import Swiper from 'react-id-swiper';

// COMPONENTS
import Video from '../../components/Video/Video';


// SUB UI COMPONENTS
import Statement from '../../components/Statement/Statement';
import Resources from '../../components/Resources/Resources';
import CTA from '../../components/CTA/CTA';

// STATIC DATA
import { slideData } from './data';

import styles from './Home.module.scss';

const indexIcon = require('./imgs/index-icon.svg');
const icon = require('./imgs/icon.svg');
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
      swiper.on('sliderMove', () => {
        this.setState({ dragging: true });
      });
      swiper.on('touchEnd', () => {
        this.setState({ dragging: false });
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
          RateMyDeath.org uses simple math: the number of viewers divided by the number of deaths. <br />
          Let's show Trump the human cost of his precious ratings.
        </p>
        <button type="button">
          <img alt="twitter" src={twitterIcon}/>
          SHARE THIS SITE
        </button>
      </div>
    </div>
  )

  renderSlide = (data) => {
    const { month, day, viewers, body } = data;
    return (
      <div className={styles.calendarContent}>
        <div className={styles.header}>
          <img alt="icon" src={icon} />
          <div>
            <p>{month}</p>
            <h2>{day}</h2>
          </div>
        </div>
        <div className={styles.body}>
          <p dangerouslySetInnerHTML={{__html: body}}/>
        </div>
        <div className={styles.footer}>
          <p>If you died today, your life was worth</p>
          <h3>{`${viewers} viewers`}</h3>
          <p>to President Trump</p>
          <button type="button">
            <img alt="twitter" src={twitterIcon}/>
            TWEET @ TRUMP
          </button>
        </div>
      </div>
    )
  }

  render() {
    const { videoIndex, dragging } = this.state;
    return(
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <div className={styles.calendarWrapper}>
            <div className={styles.calendarContainer}>
              <img className={styles.mobileHeader} alt="icon" src={icon} /> 
              <Swiper
                getSwiper={this.setSwiperListener}
                allowTouchMove
                slide
                keyboard
                initialSlide={slideData.length - 1}
                // slideNextClass={styles.nextSlide}
                // slidePrevClass={styles.prevSlide}
                slideActiveClass={styles.activeSlide}
                wrapperClass={styles.swiperContainer}
              >
                {slideData.map((data, index) => {
                  // RENDER INDEX SLIDE ON FIRST INDEX
                  if (index === 0) return this.renderIndexSlide();
                  return(
                    <div className={[
                      styles.calendar,
                      dragging ? styles.dragging : null
                    ].join(' ')}
                    >
                      {this.renderSlide(data)}
                      <Video id={videoIndex} />
                    </div>
                  )
                })}
              </Swiper>
            </div>
          </div>
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
