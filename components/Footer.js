import React from 'react';

class Footer extends React.Component {
  render () {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}

Footer.propTypes = {
  title: React.PropTypes.string
};

export default Footer;
