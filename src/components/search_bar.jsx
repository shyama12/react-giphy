import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  componentWillMount() {
    console.log("COMPONENT WILL MOUNT");
  }

  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
  }

  handleUpdate = (event) => {
    this.setState({
      term: event.currentTarget.value
    });
    const { search } = this.props;
    search(event.currentTarget.value);
  }

  render() {
    console.log("COMPONENT RENDER");
    const { term } = this.state;
    return (
      <input value={term} className="form-control form-search" type="text" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
