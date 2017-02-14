import React from 'react';

class Content extends React.Component {
  render () {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}

Content.propTypes = {
  title: React.PropTypes.string
};

export default Content;
