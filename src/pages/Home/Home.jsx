import React, { Component } from 'react';

import Swiper from 'react-id-swiper';

// COMPONENTS
import Video from '../../components/Video/Video';

// STATIC DATA
import { slideData } from './data';

import styles from './Home.module.scss';

const indexIcon = require('./imgs/index-icon.svg');
const icon = require('./imgs/icon.svg');
const resource = require('./imgs/resource.svg');
const link = require('./imgs/link.svg');
const country = require('./imgs/country.svg');
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
      // swiper.on('slideChange', () => {
      //   this.setState({ videoIndex: swiper.activeIndex + 1 })
      //   console.log('SLIDE CHANGED');
      // })
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
          <p>Today, one human life was worth</p>
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
                    <div className={styles.calendar}>
                      {this.renderSlide(data)}
                      <Video id={videoIndex} />
                    </div>
                  )
                })}
              </Swiper>
            </div>
          </div>
          {/* STATEMENT */}
          <div className={styles.statementContainer}>
            <div className={styles.heroContainer}>
              <img alt="country" src={country} />
              <div>
                <p>US COVID-19 DEATHS</p>
                <h3>27,549</h3>
              </div>
            </div>
            <div className={styles.copyContainer}>
              <h4>Just a reminder that it didn't need to be like this.</h4>
              <p>
                A reminder that we didn't need to sacrifice tens of thousands of American lives
                to this "pandemic no one saw coming." And a reminder that there's documented evidence
                that Trump knew about this now massive pandemic as early as January XX [sources].
              </p>
              <p>
                Inaction is one thing, but Trump also dissolved the Directorate for Global Health
                Security/pandemic response team in 2018, willfully ignored the pandemic response playbook,
                fired the CDC expert in China, haphazardly downplayed the severity of the pandemic for
                weeks, is making states bid against the federal government for critical medical supplies,
                and is using his press conferences to tout scientifically unproven and potentially dangerous drugs as "cures"
                for the Coronavirus.
              </p>
              <p>
                This is a president who cares more about his TV ratings, his stocks, andd his properties than
                human lives. There's blood on President Trump's hands.
              </p>
              <div className={styles.citationsContainer}>
                <p>1. Citation</p>
              </div>
            </div>
          </div>
          {/* RESOURCES */}
          <div className={styles.resourcesContainer}>
            <h3>If you'd like to help, please consider the following:</h3>
            <div className={styles.listContainer}>
              <div className={styles.listItem}>
                <div className={styles.icon}>
                  <img alt="resource" src={resource}/>
                </div>
                <div className={styles.link}>
                  <p>Donate Personal Protective Equipment (PPE) </p>
                  <img alt="link" src={link} />
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.icon}>
                  <img alt="resource" src={resource}/>
                </div>
                <div className={styles.link}>
                  <p>Donate Personal Protective Equipment (PPE) </p>
                  <img alt="link" src={link} />
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.icon}>
                  <img alt="resource" src={resource}/>
                </div>
                <div className={styles.link}>
                  <p>Donate Personal Protective Equipment (PPE) </p>
                  <img alt="link" src={link} />
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.icon}>
                  <img alt="resource" src={resource}/>
                </div>
                <div className={styles.link}>
                  <p>Donate Personal Protective Equipment (PPE) </p>
                  <img alt="link" src={link} />
                </div>
              </div>
            </div>
          </div>
          {/* CTA */}
          <div className={styles.CTAContainer}>
            <div>
              <h2>This should go without saying, please vote in November.</h2>
              <button>
                REGISTER TO VOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
