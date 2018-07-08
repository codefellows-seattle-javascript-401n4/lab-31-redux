import React from 'react';
import './footer.scss';


class Footer extends React.Component {
  render() {
    return (
      <footer>
        {this.props.children}
      </footer>
    );
  }
}

export default Footer;
