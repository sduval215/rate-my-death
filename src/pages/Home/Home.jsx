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

// RESOURCE ASSETS
const ppe = require('./imgs/resources/ppe-icon.svg');
const customPPE = require('./imgs/resources/custom-ppe-icon.svg');
const hospital = require('./imgs/resources/hospital-icon.svg');
const blood = require('./imgs/resources/blood-icon.svg');
const mail = require('./imgs/resources/mail-icon.svg');
const business = require('./imgs/resources/business-icon.svg');

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

<<<<<<< HEAD
  renderResourceItem = (icon, label, route) => (
=======
  renderResourceItem = (icon, label, link) => (
>>>>>>> 27e5b98f0bab0dd6e843ddf9982a8779bbb15dbb
    <div className={styles.listItem}>
      <div className={styles.icon}>
        <img alt="resource" src={icon}/>
      </div>
      <div className={styles.link}>
        <p>{label}</p>
<<<<<<< HEAD
        <a href={route}>
=======
        <a href={link}>
>>>>>>> 27e5b98f0bab0dd6e843ddf9982a8779bbb15dbb
          <img alt="link" src={link} />
        </a>
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
          <div className={styles.statementContainer}>
            <div className={styles.heroContainer}>
              <img alt="country" src={country} />
              <div>
                <p>US COVID-19 DEATHS</p>
                <h3>34,934</h3>
              </div>
            </div>
            <div className={styles.copyContainer}>
              <h4>Just a reminder that it didn't need to be like this.</h4>
              <p>
                A reminder that we didn’t need to sacrifice tens of thousands of American lives to this "pandemic no one saw coming." 
                And a reminder that there’s documented evidence that Trump knew about how deadly this pandemic would be as early as January 29th. <span>1</span>
              </p>
              <p>
              Inaction is one thing, but Trump also fired the US Pandemic Response Team in 2018, <span>2</span> willfully ignored the NSC’s pandemic response playbook, <span>3</span> 
              fired CDC experts in China,<span>4</span> haphazardly downplayed the severity of the pandemic for weeks,<span>5</span> is cutting funding to the World Health Organization, <span>6</span>
              and is using his press conferences to tout scientifically unproven and potentially dangerous drugs as treatments for the Coronavirus.<span>7</span>
              </p>
              <p>
              This is a president who cares more about his TV ratings, his stocks, and his reputation than human lives.
              There’s blood on President Trump’s hands.
              </p>
              <div className={styles.citationsContainer}>
                <a>1. "Trade Advisor Warned White House in January..." - NYT</a>
                <a>2. "Did the Trump Administration Fire the US Pandemic response Team?" - Snopes</a>
                <a>3. "Trump team failed to folllow NSC's pandemic playbook" - Politico</a>
                <a>4. "US slashed CDC staff inside China prior to cronavirus outbreak" - Reuters</a>
                <a>5. Video Source - Twitter</a>
                <a>6. "Trump halts funding to World Health Organization" - Politico </a>
                <a>7. "Trump touts unproven drug..." - Independent</a>
              </div>
            </div>
          </div>
          {/* RESOURCES */}
          <div className={styles.resourcesContainer}>
            <h3>If you'd like to help, please consider the following:</h3>
            <div className={styles.listContainer}>
<<<<<<< HEAD
              {this.renderResourceItem(resource, 'Donate Personal Protective Equipment (PPE)')}
              {this.renderResourceItem(resource, 'Make your own PPE')}
              {this.renderResourceItem(resource, 'Send Food to a Hospital')}
              {this.renderResourceItem(resource, 'Donate Blood or Money to the Red Cross')}
              {this.renderResourceItem(resource, 'Save the Postal Service')}
              {this.renderResourceItem(resource, 'Support local businesses')}
=======
              {this.renderResourceItem(ppe, 'Donate Personal Protective Equipment (PPE)')}
              {this.renderResourceItem(customPPE, 'Make your own PPE')}
              {this.renderResourceItem(hospital, 'Send Food to a Hospital')}
              {this.renderResourceItem(blood, 'Donate Blood or Money to the Red Cross')}
              {this.renderResourceItem(mail, 'Save the Postal Service')}
              {this.renderResourceItem(business, 'Support local businesses')}
>>>>>>> 27e5b98f0bab0dd6e843ddf9982a8779bbb15dbb
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
