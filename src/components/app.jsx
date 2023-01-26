import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [{ id: "PZinYdZrJsavejA8al" }, { id: "MJp9HJBMGVfLps9zsN" }],
      selectedGifId: "PZinYdZrJsavejA8al"
    };

    this.search("homer thinking");
  }

  search = (query) => {
    giphy("HDBMswD999FDjZEQFUvxSwSRoFCPDqGS").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data,
        selectedGifId: res.data[0].id
      });
    });
  }

  displaySelectedGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const { selectedGifId, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} displaySelectedGif={this.displaySelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
