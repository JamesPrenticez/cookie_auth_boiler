import React from 'react'

class VideoMenu extends React.Component {

  componentDidMount() {
    if (this.props.state.src = 'deer'){
        document.getElementById("one").checked = true;
      }     
    }


handleClick = (e) => {
    const text = e.target.value;
    this.props.chooseVideo(text);
  }



  render() {
    return (
      <form onClick={this.handleClick}>
        <input id='one' type="radio" name="src" value="deer" /> Deer
        <input type="radio" name="src" value="snail" /> Snail
        <input type="radio" name="src" value="cat" /> Cat
        <input type="radio" name="src" value="spider" /> Spider
      </form>
    );
  }
}

export default VideoMenu