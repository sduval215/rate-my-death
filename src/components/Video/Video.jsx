import React, { Component } from 'react';

// STYLES
import styles from './Video.module.scss';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    }
    this.videoPlayer = React.createRef();
  }

  handlePlayLogic = () => {
    const { canRender } = this.props;
    const { current } = this.videoPlayer;
    this.setState({ isReady: this.props.canRender });
    if(current && canRender) current.play();
    if(current && !canRender) current.pause();
  }

  onReady = () => {
    this.handlePlayLogic()
  }

  componentDidUpdate(prevProps) {
    const { canRender } = this.props;
    if(prevProps.canRender !== canRender) {
      this.handlePlayLogic();
    }
  }

  render() { 
    const { id, autoPlay } = this.props;
    const { isReady } = this.state;
    if (!id) return null;
    const video = require(`./videos/${id}.mp4`);
    const backgroundImage = id !== 10 ? require(`./videos/${id}-still.png`) : null;
    return(
      <div
        style={{ backgroundImage: `url(${backgroundImage})`}}
        className={styles.videoWrapper}>
        <div className={styles.overlay} />
        <video
          ref={this.videoPlayer}
          className={isReady ? styles.renderVideo : null}
          onCanPlay={this.handlePlayLogic}
          autoPlay={autoPlay}
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
}

export default Video;