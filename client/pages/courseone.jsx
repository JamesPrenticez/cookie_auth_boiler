import React from 'react'
import Video from '../components/Video'
import VideoMenu from '../components/VideoMenu'

const VIDEOS = {
  deer: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  snail: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  spider: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class Courseone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        src: '',
    }
  }
  componentDidMount() {
      this.setState({
        src: VIDEOS.deer
      });
    }
  
  chooseVideo = (newVideo) => {
    this.setState({
      src: VIDEOS[newVideo]
    });
  }

  render() {
    return (
      <div>
        <h1 className='jumbotron text-center bg-primary square'>Video Player</h1>
        <p>Course One</p>
        <div className='wrapper'>
          <VideoMenu chooseVideo={this.chooseVideo} state={this.state}/>
          <Video src={this.state.src} />
        </div>
      </div>
    );
  }
}

export default Courseone