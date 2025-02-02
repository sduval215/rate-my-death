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
const dragIcon = require('./imgs/drag-icon.svg');
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
      showModal: true,
      slideIndex: slideData.length - 1,
      calendarHeight: window.innerHeight * 0.95
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
    if(swiper) {
      // handles listeners for cursor UI updatess
      swiper.on('sliderMove', () => {
        this.setState({ slideIndex: swiper.activeIndex, dragging: true });
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
    <div
      style={{ height: this.state.calendarHeight }}
      className={[ styles.calendar, styles.indexCalendar ].join(' ')}
    >
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

  renderEndSlide = () => {
    const { calendarHeight, dragging } = this.state;
    return(
      <div
        style={{ height: calendarHeight }}
        className={[
          styles.endSlide,
          dragging ? styles.dragging : null
        ].join(' ')}
      >
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
    )
  }

  renderInstructionsModal = () => (
    <div className={styles.modalWrapper}>
      <div className={styles.modalContainer}>
        <div className={styles.modalTop}>
          <h3>HOW IT WORKS</h3>
          <div className={styles.equationContainer}>
            <div>
              <p># of Daily Viewers</p>
              <div />
              <p># of Daily Deaths</p>
            </div>
            <span>=</span>
            <p>
              What 1 life is
              <br/>
              worth to Trump
            </p>
          </div>
        </div>
        <div className={styles.modalBottom}>
          <p>Swipe or click left/right to explore the calendar.</p>
          <img alt="drag-instructions" src={dragIcon}/>
          <button
            onClick={() => this.setState({ showModal: false })}
            type="button">
            <p>GOT IT</p>
          </button>
        </div>
      </div>
    </div>
  )

  /**
   * Handles swiper carousel index reset
   */
  handleSlide = (slideNumber) => {
    this.swiper.slideTo(slideNumber, 500)
  }

  render() {
    const { dragging, slideIndex, calendarHeight, showModal } = this.state;
    return(
      <div className={styles.calendarWrapper}>
        <div className={styles.calendarContainer}>
          {/* INSTRUCTIONS MODAL */}
          { showModal ? this.renderInstructionsModal() : null}
          {/* CALENDAR CONTROLS */}
          <div onClick={() => this.swiper.slidePrev(500)} id={styles.leftArrow}className={styles.actionContainer}>
            <img alt="action-arrow" src={actionArrow} className={styles.actionArrow} />
          </div>
          {slideIndex <= slideData.length - 2 ? 
            <div onClick={() => this.swiper.slideNext(500)} id={styles.rightArrow} className={styles.actionContainer}>
              <img alt="action-arrow" src={actionArrow} className={styles.actionArrow} />
            </div> : null
          }
          {/* MAIN CALENDAR */}
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
                  style={{ height: calendarHeight }}
                  className={[
                    styles.calendar,
                    dragging ? styles.dragging : null
                  ].join(' ')}
                >
                  {this.renderSlide(data, index)}
                </div>
              )
            })}
            {this.renderEndSlide()}
          </Swiper>
        </div>
      </div>
    )
  }
}

export default Calendar;
