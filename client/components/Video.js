import React from 'react'

class Video extends React.Component {
  render() {
    return(
      <div>
        <video 
          controls 
          autoPlay
          src={this.props.src} />
      </div>
    )
  }
}

export default Video