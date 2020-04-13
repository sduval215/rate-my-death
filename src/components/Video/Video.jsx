import React from 'react';

// HELPERS
import Youtube from 'react-youtube';

import styles from './Video.module.scss';

const opts = {
  height: '100%',
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    controls: 0,
    rel: 0,
    showinfo: 0,
    playsinline: 1,
    modestBranding: 1,
  }
}

const Video = ({ id }) => (
  <div className={styles.videoWrapper}>
    <div className={styles.overlay} />
    <div className={styles.videoContainer}>
      <Youtube videoId={id} opts={opts}/>
    </div>
  </div>
)

export default Video;