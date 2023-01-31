import React, { Component } from 'react';
import Gif from "./gif";

export default class GifList extends Component {
  shouldComponentUpdate(nextProps) {
    const { id } = this.props;
    return nextProps.id !== id;
  }

  renderList = () => {
    const { gifs, displaySelectedGif } = this.props;
    return gifs.map((gif) => {
      return <Gif id={gif.id} key={gif.id} displaySelectedGif={displaySelectedGif} />;
    });
  };

  render() {
    return (
      <div className="gif-list">
        { this.renderList() }
      </div>
    );
  }
}
