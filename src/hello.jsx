import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// a function for static content (stateless)
// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick = () => {
    const { clicked } = this.state;
    const { counter } = this.state;
    this.setState({
      clicked: !clicked,
      counter: counter + 1
    });
  }

  render() {
    // Build and return HTML
    const { name } = this.props;
    const { clicked } = this.state;
    const { counter } = this.state;
    return (
      <div onClick={this.handleClick} onKeyUp={this.handleClick} role="button" tabIndex={0} className={clicked ? 'clicked' : null}>
        `Hello
        { name }
        , you clicked
        { counter }
        times!`
      </div>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
