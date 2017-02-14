import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string
};

export default Header;
