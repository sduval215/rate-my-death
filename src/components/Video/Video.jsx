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

const Video = ({ id }) => {
  const video = require(`./videos/${id}.mp4`)
  console.log(video);
  return(
    <div className={styles.videoWrapper}>
      <div className={styles.overlay} />
      <div className={styles.videoContainer}>
        <video
            autoPlay
            muted
            playsInline
            loop
            key={video}
          >
            <source src={video} type='video/webm' />
          </video>
      </div>
    </div>
  )
}

export default Video;