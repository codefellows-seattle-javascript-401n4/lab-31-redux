import React from 'react';
import './header.scss';


class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          {this.props.appTitle}
        </h1>
      </header>
    );
  }
}

export default Header;
