import React from 'react';

class Template extends React.Component {
  render () {
    return (
      <div>
        {this.props.header}
        {this.props.content}
        {this.props.footer}
      </div>
    );
  }
}

Template.propTypes = {
  header: React.PropTypes.element,
  footer: React.PropTypes.element,
  content: React.PropTypes.element
};

export default Template;
