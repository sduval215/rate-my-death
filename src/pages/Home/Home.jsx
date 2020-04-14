import React, { Component } from 'react';

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
    this.state = {}
  }

  renderCalendar = () => (
    <div className={styles.calendarContainer}>
      {calendarObject.map(({month, day, deaths, views}) => (
        <div className={styles.calendar}>
          <p>{deaths}</p>
          <p>{views}</p>
        </div>
      ))}
    </div>
  )

  render() {
    return(
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <div className={styles.calendarContainer}>
            <Video />
            <div className={styles.calendarWrapper}>
              {this.renderCalendar()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
