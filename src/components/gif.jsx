import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { id, displaySelectedGif } = this.props;
    console.log(id);
    displaySelectedGif(id);
  }

  render() {
    const { id } = this.props;
    const src = `https://media4.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="selected gif" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
