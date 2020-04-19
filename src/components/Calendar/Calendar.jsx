import React, { Component } from 'react';

// HELPERS
import Swiper from 'react-id-swiper';

// COMPONENTS
import Video from '../../components/Video/Video';

// STATIC DATA
import { slideData } from './data';

// STYLES
import styles from './Calendar.module.scss';

const indexIcon = require('./imgs/index-icon.svg');
const icon = require('./imgs/icon.svg');
const twitterIcon = require('../../static/imgs/twitter-icon.svg');
const backArrow = require('./imgs/back-arrow.svg');

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    }
    this.swiper = null;
  }

  /**
   * Sets swiper listener logic
   * @param {Class} swiper
   */
  setSwiperListener = (swiper) => {
    // set global swiper class reference for future use
    this.swiper = swiper;
    // animate
    setTimeout(() => swiper.slideTo(slideData.length - 1, 1000), 500)
    if(swiper !== null) {
      // handles listeners for cursor UI updates
      swiper.on('sliderMove', () => {
        this.setState({ dragging: true });
      });
      swiper.on('touchEnd', () => {
        this.setState({ dragging: false });
      })
    }
  }

  renderShareSection = (isIndex) => (
    <div className={styles.shareFooter}>
      <p className={isIndex ? styles.indexCopy : null}>
      RateMyDeath.org uses simple math: the number of viewers divided by the number of deaths.
      Trump should know the human cost of his precious ratings.
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/intent/tweet?text=Check%20out%20our%20site:%20www.ratemydeath.org"
      >
        <button type="button">
          <img alt="twitter" src={twitterIcon}/>
          SHARE THIS SITE
        </button>   
      </a>
    </div>
  )
  
  /**
   * Renders the index slide
   */
  renderIndexSlide = () => (
    <div className={[ styles.calendar, styles.indexCalendar ].join(' ')}>
      <div className={styles.indexCalendarContent}>
        <div className={styles.indexHeader}>
          <img alt="index-icon" src={indexIcon}/>
            <p>JAN-MAR</p>
        </div>
        <div className={styles.indexBody}>
          <p>
            For an in-depth timeline of events before Trump's <span>campaign rallies</span>
            White House press briefings, read this detailed article from the <a target="_blank" rel="noopener noreferrer" href="https://www.nytimes.com/article/coronavirus-timeline.html">New York Times.</a>
          </p>
        </div>
        {this.renderShareSection(true)}
      </div>
    </div>
  )

  /**
   * Renders individual slide UI
   * @param {Object} data
   */
  renderSlide = (data) => {
    const { month, day, viewers, body } = data;
    const noViewers = typeof Number(viewers) === 'number' && Number(viewers) === 0;
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
        {noViewers ?
          this.renderShareSection()
          : (
            <div className={styles.footer}>
              <p>If you died today, your life was worth</p>
              <h3>{`${viewers} viewers`}</h3>
              <p>to President Trump</p>
              <button type="button">
                <img alt="twitter" src={twitterIcon}/>
                TWEET THIS
              </button>
            </div>
          )
        }
        <Video id={noViewers ? 5 : null} />
      </div>
    )
  }

  /**
   * Handlles swiper carousel index reset
   */
  handleReset = () => {
    console.log(this.swiper);
    this.swiper.slideTo(0, 1000)
  }

  render() {
    const { dragging, slideIndex } = this.state;
    return(
      <div className={styles.calendarWrapper}>
        <div className={styles.calendarContainer}>
          <img className={styles.mobileHeader} alt="icon" src={icon} /> 
          <Swiper
            getSwiper={this.setSwiperListener}
            allowTouchMove
            slide
            keyboard
            activeSlide={slideIndex}
            initialSlide={slideIndex}
            slideNextClass={styles.nextSlide}
            slidePrevClass={styles.prevSlide}
            slideActiveClass={styles.activeSlide}
            wrapperClass={styles.swiperContainer}
          >
            {slideData.map((data, index) => {
              // RENDER INDEX SLIDE ON FIRST INDEX
              if (index === 0) return this.renderIndexSlide();
              return(
                <div
                  key={index}
                  className={[
                    styles.calendar,
                    dragging ? styles.dragging : null
                  ].join(' ')}
                >
                  {this.renderSlide(data)}
                </div>
              )
            })}
            {/* END SLIDE */}
            <div className={[
              styles.endSlide,
              dragging ? styles.dragging : null
            ].join(' ')}>
              <div className={styles.contentContainer}>
                <p>
                  Accurate ratings data for the White House press briefings
                  becomes available ~24hrs after airtime. Stay tuned.
                </p>
                <button
                  onClick={this.handleReset}
                  type="button"
                >
                  <img alt="back-arrow" src={backArrow}/>
                  <p>GO BACK</p>
                </button>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    )
  }
}

export default Calendar;
