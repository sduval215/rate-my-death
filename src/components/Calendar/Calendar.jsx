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
const actionArrow = require('./imgs/action-arrow.svg');
const logo = require('./imgs/logo.svg');

// SHARE COPY OPTIONS
const shareCopy = [
  'We’re literally dying for attention @realdonaldtrump: ☠️📺https://www.ratemydeath.org/ %23COVID19',
  'We die, @realdonaldtrump brags. How many lives are his ratings worth? ☠️📺https://www.ratemydeath.org/ %23COVID19',
  'There’s blood on @realdonaldtrump’s ratings: ☠️📺https://www.ratemydeath.org/ %23COVID19'
]

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1
    }
    this.swiper = null;
  }

  /**
   * Randomize share option
   */
  randomizeShare = () => (
    Math.floor(Math.random() * 3)
  );

  /**
   * Sets swiper listener logic
   * @param {Class} swiper
   */
  setSwiperListener = (swiper) => {
    // set global swiper class reference for future use
    this.swiper = swiper;
    // animate
    setTimeout(() => swiper.slideTo(slideData.length - 1, 2000), 500);
    setTimeout(() => this.setState({ slideIndex: slideData.length - 1 }), 2500);
    if(swiper !== null) {
      // handles listeners for cursor UI updates
      swiper.on('sliderMove', () => {
        this.setState({ slideIndex: swiper.activeIndex, dragging: true })
      });
      swiper.on('touchEnd', () => {
        this.setState({ dragging: false})
      });
      swiper.on('slideChange', () => {
        this.setState({ slideIndex: swiper.activeIndex})
      })
    }
  }

  renderShareSection = (isIndex) => (
    <div className={styles.shareFooter}>
      <p className={isIndex ? styles.indexCopy : null}>
      RateMyDeath.org uses simple math: the number of viewers divided by the number of deaths.
      There's blood on Trump's ratings.
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/intent/tweet?text=${shareCopy[this.randomizeShare()]}`}
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

          <button
            onClick={() => this.handleSlide(slideData.length - 1)}
            type="button"
          >
            <p>JUMP TO TODAY</p>
            <img alt="Today" src={backArrow}/>
          </button>
        </div>
        {this.renderShareSection(true)}
      </div>
    </div>
  )

  /**
   * Renders individual slide UI
   * @param {Object} data
   */
  renderSlide = (data, index) => {
    const { slideIndex } = this.state;
    const { month, day, viewers, body, videoID } = data;
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                // FORMATTED TWITTER INTENT LINK
                href={`https://twitter.com/intent/tweet?text=If you died of %23COVID19 on ${month} ${day}, your life was worth ${viewers} viewers to @realdonaldtrump ☠️📺https://www.ratemydeath.org/`}
              >
                  <img alt="twitter" src={twitterIcon}/>
                  TWEET THIS
                </a>
              </button>
            </div>
          )
        }
        <Video canRender={index === slideIndex} id={noViewers ? 10 : videoID} />
      </div>
    )
  }

  /**
   * Handlles swiper carousel index reset
   */
  handleSlide = (slideNumber) => {
    this.swiper.slideTo(slideNumber, 500)
  }

  render() {
    const { dragging, slideIndex } = this.state;
    return(
      <div className={styles.calendarWrapper}>
        <div className={styles.calendarContainer}>
          <img alt="action-arrow" src={actionArrow} id={styles.leftArrow} className={styles.actionArrow} />
          <img alt="action-arrow" src={actionArrow} id={styles.rightArrow} className={styles.actionArrow} />
          <Swiper
            getSwiper={this.setSwiperListener}
            allowTouchMove
            slide
            keyboard
            slidesPerView={1.08}
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
                  {this.renderSlide(data, index)}
                </div>
              )
            })}
            {/* END SLIDE */}
            <div className={[
              styles.endSlide,
              dragging ? styles.dragging : null
            ].join(' ')}>
              <div className={styles.contentContainer}>
                <img alt="logo" src={logo} />
                <p>
                  Accurate ratings data for the White House press briefings
                  becomes available ~24hrs after airtime. Stay tuned.
                </p>
                <button
                  onClick={() => this.handleSlide(slideData.length - 1)}
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
