import React from 'react';

class Content1 extends React.Component {
  render () {
    return (
      <div>
        <span>Content 1</span>
        {this.props.title}
      </div>
    );
  }
}

Content1.propTypes = {
  title: React.PropTypes.string
};

export default Content1;
