import React from 'react';

// STYLES
import styles from './Video.module.scss';


const Video = ({ id }) => {
  const video = require(`./videos/${id}.mp4`)
  console.log(video);
  return(
    <div className={styles.videoWrapper}>
      <div className={styles.overlay} />
      <video
        autoPlay
        muted
        playsInline
        loop
        key={video}
      >
        <source src={video} type='video/mp4' />
      </video>
    </div>
  )
}

export default Video;