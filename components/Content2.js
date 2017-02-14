import React from 'react';

class Content2 extends React.Component {
  render () {
    return (
      <div>
        <span>Content 2</span>
        {this.props.title}
      </div>
    );
  }
}

Content2.propTypes = {
  title: React.PropTypes.string
};

export default Content2;
